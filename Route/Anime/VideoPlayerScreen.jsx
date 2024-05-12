import { Player } from "../../Components/Anime/VideoplayerScreen/Player";
import { PlainText } from "../../Components/Global/PlainText";
import { Spacer } from "../../Components/Global/Spacer";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ReadMore from "@fawazahmed/react-native-read-more";
import { FormatDescription } from "../../Utils/FormatDescription";
import { SelectList } from "react-native-dropdown-select-list/index";
import { useCallback, useEffect, useState } from "react";
import { getAnimeEpisodesStreamingLink } from "../../Api/AnimeData";
import { GetDefaultQuality } from "../../LocalStorage/AppSettings";
import { EpiosdesRender } from "../../Components/VideoPlayer/EpisodesRender";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import { Heading } from "../../Components/Global/Heading";
export const VideoPlayerScreen = ({route, navigation}) => {
  const {width, height} = Dimensions.get("window")
  const [Loading, setLoading] = useState(true);
  const [StreamingUrl, setStreamingUrl] = useState("");
  const [Quality, setQuality] = useState("Auto");
  const {id, number, isSub, totalEpisodes, description} = route.params
  const [CurrentPlayingEpisode, setCurrentPlayingEpisode] = useState(number);
  const [fullScreen, setFullScreen] = useState(false);
  const styles = StyleSheet.create({
    textStyle:{
      paddingHorizontal:10,
      fontSize:13,
      color:"white"
    },
  })
  const data = [
    {value:"Auto"},
    {value:"1080p"},
    {value:"720p"},
    {value:"480p"},
    {value:"360p"},
  ]
  function getQualityUrl() {
    if (Quality === "Auto"){
      return StreamingUrl
    } else if (Quality === "1080p"){
      return  StreamingUrl.slice(0,StreamingUrl.length - 4) + "1080.m3u8"
    } else if (Quality === "720p"){
      return  StreamingUrl.slice(0,StreamingUrl.length - 4) + "720.m3u8"
    } else if (Quality === "480p"){
      return  StreamingUrl.slice(0,StreamingUrl.length - 4) + "480.m3u8"
    } else {
      return  StreamingUrl.slice(0,StreamingUrl.length - 4) + "360.m3u8"
    }
  }
  // eslint-disable-next-line no-shadow
  const getLink = useCallback(async (id)=>{
    setLoading(true)
    try {
      let finalId = id
      if (!isSub) {
        const tempId = id
        const b = "-dub"
        const position = tempId.lastIndexOf("-episode-")
        finalId = [tempId.slice(0, position), b, tempId.slice(position)].join('');
      }
      const {sources} = await getAnimeEpisodesStreamingLink(finalId)
      const defaultUrl = sources.filter((e)=>e.quality === "default")
      setStreamingUrl(defaultUrl[0].url)
    } catch (e) {
      console.log(e + "Streaming Link error");
    } finally {
      setLoading(false)
    }
  },[])
  const getDefaultQuality = useCallback(async ()=>{
    const temp = await GetDefaultQuality()
    setQuality(temp)
  },[])
  useEffect(() => {
    getDefaultQuality()
    getLink(id)
  }, []);

  const onPressEpisode = useCallback(async (number, id)=>{
    setCurrentPlayingEpisode(number)
    await getLink(id)
  },[])
  return (
  <>
    <Player Loading={Loading} navigation={navigation} url={getQualityUrl()} number={CurrentPlayingEpisode} onNextPress={()=>{
      const current = CurrentPlayingEpisode
       if (current === totalEpisodes.length){
        return
       }
      onPressEpisode(current + 1, totalEpisodes[current].id)
    }} setFullScreenValue={setFullScreen} onPrevPress={()=>{
      const current = CurrentPlayingEpisode
      if (current === 1){
        return
      }
      onPressEpisode(current + 1, totalEpisodes[current].id)
    }}/>
    <Spacer/>
    {!fullScreen &&  <>
      <PaddingConatiner>
        <SpaceBetween>
          <View>
            <Heading text={totalEpisodes[CurrentPlayingEpisode - 1]?.title ?? ""} style={{
              maxWidth:width * 0.80,
            }}/>
            <PlainText text={"Episode " + CurrentPlayingEpisode}/>
          </View>
          <PlainText text={isSub ? "SUB" : "DUB"} style={{
            backgroundColor:"rgb(190,142,142)",
            padding:5,
            borderRadius:10,
            color:"rgb(0,0,0)",
            fontWeight:"900",
          }}/>
        </SpaceBetween>
        <Spacer/>
        <PlainText text={"Quality"} style={{fontWeight:"900"}}/>
        <Spacer/>
        <SelectList
          placeholder={Quality}
          search={false}
          setSelected={(val) => {
            setQuality(val)
          }}
          data={data}
          save="value"
          arrowicon={<Text style={{paddingHorizontal:5,color:"white"}}>↓</Text>}
          inputStyles={{
            color:"white",
          }}
          dropdownTextStyles={{color:"white"}}
        />
        <Spacer/>
      </PaddingConatiner>
      <ReadMore numberOfLines={2} style={styles.textStyle}>
        {FormatDescription(description)}
      </ReadMore>
      <EpiosdesRender totalEpisodes={totalEpisodes} current={CurrentPlayingEpisode} onPress={onPressEpisode}/>
    </>}
  </>
  );
};


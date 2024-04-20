import { MainWrapper } from "../../Layout/MainWrapper";
import Crousel from "../../Components/Anime/Home/TopCrousel/Crousel";
import { ScrollView, View } from "react-native";
import { Spacer } from "../../Components/Global/Spacer";
import { Sections } from "../../Components/Anime/Home/Sections/Sections";
import { useCallback, useContext, useEffect, useState } from "react";
import { getContinueWatching } from "../../LocalStorage/ContinueWatching";
import Context from "../../GlobalState/Context";
import { SearchBar } from "../../Components/Anime/Discover/SearchBar";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import LinearGradient from "react-native-linear-gradient";

export const Home = ({navigation}) => {
  const {TrendingLoading,
    PopularLoading,
    AirngLoading,
    Trending,
    Popular,
    Airing} = useContext(Context)
  const [ContinueWatchingLoading, setContinueWatchingLoading] = useState(true);
  const [ContinueWatching, setContinueWatching] = useState([]);

const GetContinueWatching = useCallback(async function GetContinueWatching(){
    try {
      const data = await getContinueWatching()
      setContinueWatching(data)
    } catch (e) {
      console.warn("Error in getting Continue Watching Anime", e);
    } finally {
      setContinueWatchingLoading(false)
    }
  },[])
  useEffect(()=>{
    GetContinueWatching()
  },[])
  return (<MainWrapper>
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['rgba(0,0,0,0.07)', 'rgba(0,0,0,0.2)', "rgba(0,0,0,0.72)","black"]} style={{position:"absolute", zIndex:100, backgroundColor:"rgba(16,15,15,0)", justifyContent:"center", paddingVertical:5, paddingHorizontal:10, width:"100%"}}>
          <Heading text={"Anime"} />
          <SearchBar isInverted={false} isTemplate={true} onPressTemplate={()=>{navigation.navigate("DiscoverPage")}} placeholder={"Search Anime"} showIcon={true}/>
      </LinearGradient>
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Crousel isLoading={PopularLoading} Data={Popular.slice(0,4)}/>
      </View>
      {ContinueWatching.length > 0 && <>
        <Sections results={ContinueWatching} title={"Continue Watching"} isLoading={ContinueWatchingLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
      </>}
        <Sections results={Popular.slice(4,Popular.length + 1)} title={"Most Popular"} isLoading={PopularLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Trending} title={"Trending Anime"} isLoading={TrendingLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Airing} title={"Top Airing"} isLoading={AirngLoading} navigation={navigation}/>
    </ScrollView>
  </MainWrapper>
  );
};


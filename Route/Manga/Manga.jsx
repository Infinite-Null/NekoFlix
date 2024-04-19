import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { SearchBar } from "../../Components/Manga/Home/SearchBar";
import { Spacer } from "../../Components/Global/Spacer";
import { MangaDisplayContainer } from "../../Components/Manga/MangaDisplayContainer";
import { ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { GetHomepageData } from "../../Api/MangaData";
import { ContinueReading } from "../../Components/Manga/Home/ContinueReading";

export const Manga = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const getData = useCallback(async ()=>{
    try {
      const result = await  GetHomepageData()
      setData(result)
    } catch (e) {
      console.log("error in getting manga data for homepage");
    } finally {
      setLoading(false)
    }
  },[])
  useEffect(()=>{
    getData()
  },[])
  return (
    <MainWrapper>
      <PaddingConatiner>
       <ScrollView showsVerticalScrollIndicator={false}>
         <Heading text={"Manga"} style={{paddingBottom:5}}/>
         <SearchBar placeholder={"Search"} showSearchButton={false}/>
         <Spacer/>
         <Spacer/>
         <ContinueReading/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer loading={loading} title={"TRENDING NOW"} data={data?.mostViewedManga ? data?.mostViewedManga["7d"] : []}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer loading={loading} title={"ALL TIME POPULAR"} data={data?.mostFollowedNewManga ? data?.mostFollowedNewManga["180d"] : []}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer loading={loading} title={"NEW POPULAR MANHWA"} data={data?.mostFollowedNewManga ? data?.mostFollowedNewManga["7d"] : []}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer loading={loading} title={"LATEST UPDATED"} data={data?.latestUpdates ? data?.latestUpdates : []}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer loading={loading} title={"TOP MANHWA"} data={data?.topManga_views ? data?.topManga_views : []} showRank={true}/>
         <Spacer/>
       </ScrollView>
      </PaddingConatiner>
    </MainWrapper>
  );
};

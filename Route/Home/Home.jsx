import { MainWrapper } from "../../Layout/MainWrapper";
import Crousel from "../../Components/Home/TopCrousel/Crousel";
import { ScrollView } from "react-native";
import { Spacer } from "../../Components/Global/Spacer";
import { Sections } from "../../Components/Home/Sections/Sections";
import { useCallback, useEffect, useState } from "react";
import { getAiringScheduleAnime, getPopularAnime, getTrendingAnime } from "../../Api/AnimeData";
import { getContinueWatching } from "../../Utils/ContinueWatching";

export const Home = ({navigation}) => {
  const [TrendingLoading, setTrendingLoading] = useState(true);
  const [PopularLoading, setPopularLoading] = useState(true);
  const [AirngLoading, setAirngLoading] = useState(true);
  const [ContinueWatchingLoading, setContinueWatchingLoading] = useState(true);
  const [Trending, setTrending] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [Airing, setAiring] = useState([]);
  const [ContinueWatching, setContinueWatching] = useState([]);

  const GetTrending = useCallback(async function GetTrending(){
    try {
      const data = await getTrendingAnime()
      setTrending(data.results)
    } catch (e) {
      console.warn("Error in getting Trending Anime", e);
    }
    setTrendingLoading(false)
  }, []);

  const GetPopular = useCallback( async function GetPopular(){
  try {
    const data = await getPopularAnime()
    setPopular(data.results)
  } catch (e) {
    console.warn("Error in getting Popular Anime", e);
  }
  setPopularLoading(false)
},[])

const GetAiring = useCallback( async function GetAiring(){
    try {
      const data = await getAiringScheduleAnime()
      setAiring(data.results)
    } catch (e) {
      console.warn("Error in getting Airing Anime", e);
    }
    setAirngLoading(false)
},[])

const GetContinueWatching = useCallback(async function GetContinueWatching(){
    try {
      const data = await getContinueWatching()
      setContinueWatching(data)
    } catch (e) {
      console.warn("Error in getting Continue Watching Anime", e);
    }finally {
      setContinueWatchingLoading(false)
    }
  },[])
  useEffect(()=>{
    GetTrending()
    GetPopular()
    GetAiring()
    GetContinueWatching()
  },[])
  return (<MainWrapper>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
      <Crousel isLoading={false} Data={Trending.slice(4,Trending.length + 1)}/>
        <Sections results={ContinueWatching} title={"Continue Watching"} isLoading={ContinueWatchingLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Popular} title={"Most Popular"} isLoading={PopularLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Trending.slice(0,4)} title={"Trending Anime"} isLoading={TrendingLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Airing} title={"Top Airing"} isLoading={AirngLoading} navigation={navigation}/>
    </ScrollView>
  </MainWrapper>
  );
};


import { MainWrapper } from "../../Layout/MainWrapper";
import Crousel from "../../Components/Home/TopCrousel/Crousel";
import { ScrollView } from "react-native";
import { Spacer } from "../../Components/Global/Spacer";
import { Sections } from "../../Components/Home/Sections/Sections";
import { useCallback, useEffect, useState } from "react";
import { getAiringScheduleAnime, getPopularAnime, getTrendingAnime } from "../../Api/AnimeData";

export const Home = ({navigation}) => {
  const [TrendingLoading, setTrendingLoading] = useState(false);
  const [PopularLoading, setPopularLoading] = useState(false);
  const [AirngLoading, setAirngLoading] = useState(false);
  const [Trending, setTrending] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [Airing, setAiring] = useState([]);

  const GetTrending = useCallback(async function GetTrending(){
    setTrendingLoading(true)
    try {
      const data = await getTrendingAnime()
      setTrending(data.results)
    } catch (e) {
      console.warn("Error in getting Trending Anime", e);
    }
    setTrendingLoading(false)
  }, []);

  const GetPopular = useCallback( async function GetPopular(){
  setPopularLoading(true)
  try {
    const data = await getPopularAnime()
    setPopular(data.results)
  } catch (e) {
    console.warn("Error in getting Popular Anime", e);
  }
  setPopularLoading(false)
},[])

const GetAiring = useCallback( async function GetAiring(){
    setAirngLoading(true)
    try {
      const data = await getAiringScheduleAnime()
      setAiring(data.results)
    } catch (e) {
      console.warn("Error in getting Airing Anime", e);
    }
    setAirngLoading(false)
},[])

  useEffect(()=>{
    GetTrending()
    GetPopular()
    GetAiring()
  },[])
  return (<MainWrapper>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
      <Crousel isLoading={false} Data={Trending.slice(0,4)}/>
        <Sections results={Popular} title={"Most Popular"} isLoading={PopularLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Trending.slice(4,Trending.length + 1)} title={"Trending Anime"} isLoading={TrendingLoading} navigation={navigation}/>
        <Spacer/>
        <Spacer/>
        <Sections results={Airing} title={"Top Airing"} isLoading={AirngLoading} navigation={navigation}/>
    </ScrollView>
  </MainWrapper>
  );
};


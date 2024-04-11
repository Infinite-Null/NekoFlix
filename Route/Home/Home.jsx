import { MainWrapper } from "../../Layout/MainWrapper";
import Crousel from "../../Components/Home/TopCrousel/Crousel";
import { ScrollView } from "react-native";
import { Spacer } from "../../Components/Global/Spacer";
import { Sections } from "../../Components/Home/Sections/Sections";
import { useCallback, useContext, useEffect, useState } from "react";
import { getContinueWatching } from "../../LocalStorage/ContinueWatching";
import Context from "../../GlobalState/Context";

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
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
        <Crousel isLoading={PopularLoading} Data={Popular.slice(0,4)}/>
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


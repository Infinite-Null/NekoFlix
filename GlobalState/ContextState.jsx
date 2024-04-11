import Context from "./Context";
import { useCallback, useEffect, useState } from "react";
import { getAiringScheduleAnime, getPopularAnime, getTrendingAnime } from "../Api/AnimeData";
export const ContextState = (props)=>{
  const [TrendingLoading, setTrendingLoading] = useState(true);
  const [PopularLoading, setPopularLoading] = useState(true);
  const [AirngLoading, setAirngLoading] = useState(true);
  const [Trending, setTrending] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [Airing, setAiring] = useState([]);
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
  useEffect(()=>{
    GetTrending()
    GetPopular()
    GetAiring()
  },[])
  return <Context.Provider value={{TrendingLoading,
    PopularLoading,
    AirngLoading,
    Trending,
    Popular,
    Airing}}>
    {props.children}
  </Context.Provider>
}

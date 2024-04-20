import { MainWrapper } from "../../Layout/MainWrapper";
import { SearchBar } from "../../Components/Anime/Discover/SearchBar";
import { HistoryDisplay } from "../../Components/Anime/Discover/HistoryDisplay";
import { addHistoryItem } from "../../LocalStorage/SearchHistory";
import { DisplaySearchResult } from "../../Components/Anime/Discover/DisplaySearchResult";
import { Spacer } from "../../Components/Global/Spacer";
import { useCallback, useEffect, useState } from "react";
import { getSearchAnime } from "../../Api/AnimeData";
import SimpleLoading from "../../Components/Global/Loading/SimpleLoading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Heading } from "../../Components/Global/Heading";
export const Discover = ({navigation}) => {
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");
  const [ApiQuery, setApiQuery] = useState("");
  const [Loading, setLoading] = useState(false);
  // const [Loading, setLoading] = useState(false);
  const [Results, setResults] = useState([]);
  const getSearchedResults = useCallback(
    async (text) => {
      if (text){
        try {
          setLoading(true)
          const Data = await  getSearchAnime(text);
          setShowResults(true)
          setResults(Data.results)
        } catch (e) {
          console.log(e + "error in search");
        } finally {
          setLoading(false)
        }
      }
    }, []);
  const initialSearchCall = useCallback(
    async (term) => {
      if (term) {
        await addHistoryItem(term)
        await getSearchedResults(term)
      }
    },
    [],
  );
  useEffect(() => {
    if (ApiQuery){
      initialSearchCall(ApiQuery)
    } else {
      setResults([])
      setShowResults(false)
    }
  }, [ApiQuery]);
  useEffect(() => {
    const timeoutId = setTimeout(()=>setApiQuery(query), 550)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [query]);
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Animated.View entering={FadeInDown.delay(200)}>
          <Heading text={"What's in your mind"}/>
        </Animated.View>
        <Animated.View entering={FadeInDown}>
          <SearchBar onChangeText={(text)=>{
            setQuery(text)
          }} placeholder={"Search any anime"} showIcon={true} autoFocus={true}/>
        </Animated.View>
      </PaddingConatiner>
      {!Loading &&  <>
        {!showResults && <HistoryDisplay onHistoryTap={(text)=>{getSearchedResults(text)}}/>}
        <Spacer/>
        {showResults && ApiQuery && <DisplaySearchResult data={Results} navigation={navigation}/>}
      </>}
      {Loading && <SimpleLoading/>}
    </MainWrapper>
  );
};

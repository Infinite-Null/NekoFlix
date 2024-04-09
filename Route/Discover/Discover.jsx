import { MainWrapper } from "../../Layout/MainWrapper";
import { SearchBar } from "../../Components/Discover/SearchBar";
import { HistoryDisplay } from "../../Components/Discover/HistoryDisplay";
import { addHistoryItem } from "../../Utils/SearchHistory";
import { DisplaySearchResult } from "../../Components/Discover/DisplaySearchResult";
import { Spacer } from "../../Components/Global/Spacer";
import { useCallback, useState } from "react";
import { getSearchAnime } from "../../Api/AnimeData";
import SimpleLoading from "../../Components/Global/Loading/SimpleLoading";
export const Discover = ({navigation}) => {
 // useEffect(()=>{})
  const [showResults, setShowResults] = useState(false);
  const [Loading, setLoading] = useState(false);
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

  return (
    <MainWrapper>
      <SearchBar onSearch={(text)=>{
        addHistoryItem(text)
        getSearchedResults(text)
      }}/>
      {!Loading &&  <>
        {!showResults && <HistoryDisplay/>}
        <Spacer/>
        {showResults && <DisplaySearchResult data={Results} navigation={navigation}/>}
      </>}
      {Loading && <SimpleLoading/>}
    </MainWrapper>
  );
};

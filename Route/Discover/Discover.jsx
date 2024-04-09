import { MainWrapper } from "../../Layout/MainWrapper";
import { SearchBar } from "../../Components/Discover/SearchBar";
import { HistoryDisplay } from "../../Components/Discover/HistoryDisplay";
import { addHistoryItem } from "../../Utils/SearchHistory";
export const Discover = () => {
 // useEffect(()=>{})
  return (
    <MainWrapper>
      <SearchBar onSearch={(text)=>{
        addHistoryItem(text)
      }}/>
      <HistoryDisplay/>
    </MainWrapper>
  );
};

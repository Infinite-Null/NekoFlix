import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { SearchBar } from "../../Components/Manga/SearchBar";

export const Manga = () => {
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text={"Manga"} style={{paddingBottom:5}}/>
        <SearchBar placeholder={"Search"} showSearchButton={false}/>
      </PaddingConatiner>
    </MainWrapper>
  );
};

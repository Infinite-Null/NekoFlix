import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { SearchBar } from "../../Components/Manga/Home/SearchBar";
import { EachHeaderSection } from "../../Components/Manga/Home/EachHeaderSection";
import { Spacer } from "../../Components/Global/Spacer";
import { MangaDisplayContainer } from "../../Components/Manga/MangaDisplayContainer";
import { ScrollView } from "react-native";

export const Manga = () => {
  return (
    <MainWrapper>
      <PaddingConatiner >
       <ScrollView showsVerticalScrollIndicator={false}>
         <Heading text={"Manga"} style={{paddingBottom:5}}/>
         <SearchBar placeholder={"Search"} showSearchButton={false}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer section={'trending'} title={"TRENDING NOW"}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer section={'popular'} title={"ALL TIME POPULAR"}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer section={'top-manhwa'} title={"POPULAR MANHWA"}/>
         <Spacer/>
         <Spacer/>
         <MangaDisplayContainer section={'top-100'} showRank={true} title={"TOP MANHWA"}/>
       </ScrollView>
      </PaddingConatiner>
    </MainWrapper>
  );
};

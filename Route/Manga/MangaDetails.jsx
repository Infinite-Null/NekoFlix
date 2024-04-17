import { FullScreenLoading } from "../../Components/Manga/Loading/FullScreenLoading";
import { MainWrapper } from "../../Layout/MainWrapper";
import { MangaTopHeader } from "../../Components/Manga/MangaDetails/MangaTopHeader";
import ReadMore from "@fawazahmed/react-native-read-more";
import { FormatDescription } from "../../Utils/FormatDescription";
import { Spacer } from "../../Components/Global/Spacer";
import { MangaDescription } from "../../Components/Manga/MangaDetails/MangaDescription";
export const MangaDetails = () => {
 return <MainWrapper>
  <MangaTopHeader image={"https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg"}/>
  {/*<FullScreenLoading/>*/}
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <MangaDescription description={"Mankind discovered the essence of the human soul, Edeya, and were achieving materialization.\nSociety was built around Edeya, which was invulnerable to conventional weapons. Humanity started to place all their focus into the combat power of Edeya.\nPark Jinsong, the main character, possessed an F-rank soul and F-rank combat power. After the introduction of a poor military program to his high school and the Edeya rank system, Park Jinsong became one of the weak, and suffered under his peers’ contempt for 10 years…\nHowever, in reality, the Edeya he had awakened was actually the S-rank “Absolute Killing Intent”.\nPark Jinsong was greatly disturbed by the fact that the essence of his soul revolved around the thought of killing others, and continued to live his life while thinking of himself as a worthless F-rank.\nWill Park Jinsong, with a soul for killing, be able to get his killing intent under control and prove that there are no ranks to one’s soul?\n\n\nWebtoon Teaser"}/>
 </MainWrapper>
};

import { MainWrapper } from "../../Layout/MainWrapper";
import Crousel from "../../Components/Home/TopCrousel/Crousel";
import { ScrollView } from "react-native";
import { PopularAnimeSection } from "../../Components/Home/PopularAnime/PopularAnimeSection";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";

export const Home = () => {

  return (<MainWrapper>
    <ScrollView>
      <Crousel/>
      <PaddingConatiner>
        <PopularAnimeSection/>
      </PaddingConatiner>
    </ScrollView>
  </MainWrapper>
  );
};


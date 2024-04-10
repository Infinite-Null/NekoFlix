import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";

export const AboutPage = () => {
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text={"About Project"}/>
      </PaddingConatiner>
    </MainWrapper>
  );
};

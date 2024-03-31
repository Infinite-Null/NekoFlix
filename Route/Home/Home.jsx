import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { PlainText } from "../../Components/Global/PlainText";
import { SmallText } from "../../Components/Global/SmallText";

export const Home = () => {

  return (<MainWrapper>
   <PaddingConatiner>
     <Heading text={"Ankit"}/>
     <PlainText text={"Ankit"}/>
     <SmallText text={"Ankit"}/>
   </PaddingConatiner>
  </MainWrapper>
  );
};


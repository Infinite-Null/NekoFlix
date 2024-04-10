import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";

export const SettingsPage = () => {
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text={"Settings"}/>
      </PaddingConatiner>
    </MainWrapper>
  );
};

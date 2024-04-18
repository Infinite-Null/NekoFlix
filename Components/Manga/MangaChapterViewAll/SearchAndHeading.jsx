import { memo } from "react";
import { Heading } from "../../Global/Heading";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { SearchBar } from "../Home/SearchBar";
import { Spacer } from "../../Global/Spacer";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";

export const SearchAndHeading = memo(({updateModalVisible, updateChapterSearchText}) => {
  return (
    <PaddingConatiner>
      <Heading text = {"All Chapters"}/>
      <SpaceBetween>
        <SearchBar searchButtonText={"Filter"} onSearchPress={()=>{
          updateModalVisible(true)
        }} showIcon={true} showSearchButton={true}  keyboard={'numeric'} placeholder={"Search chapter number"} onChangeText={(text)=>{
          updateChapterSearchText(text)
        }}/>
      </SpaceBetween>
      <Spacer/>
    </PaddingConatiner>
  );
});

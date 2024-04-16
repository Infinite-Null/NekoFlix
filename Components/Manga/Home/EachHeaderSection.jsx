import { memo } from "react";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { PlainText } from "../../Global/PlainText";
import { SmallText } from "../../Global/SmallText";
import { Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";

export const EachHeaderSection = memo(({showViewAll, title, OnPress}) => {
  const theme = useTheme()
  return (
    <SpaceBetween style={{paddingHorizontal:5, paddingBottom:5,borderBottomWidth:1, borderBottomColor:"rgb(55,52,52)"}}>
      <PlainText text={title} style={{fontWeight:"900", letterSpacing:1}}/>
      {showViewAll && <Pressable onPress={OnPress}><SmallText text={"View All"} style={{color:theme.colors.primary}}/></Pressable>}
    </SpaceBetween>
  );
});

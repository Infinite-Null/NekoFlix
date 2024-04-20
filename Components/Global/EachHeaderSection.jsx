import { memo } from "react";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import { Pressable } from "react-native";

export const EachHeaderSection = memo(({showViewAll, title, OnPress, loading}) => {
  return (
    <Pressable onPress={()=>{
      if (OnPress && !loading) {OnPress()}
    }} style={{paddingHorizontal:5, paddingBottom:5,borderBottomWidth:1, borderBottomColor:"rgb(55,52,52)", flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
      <PlainText text={title} style={{fontWeight:"900", letterSpacing:1}}/>
      {showViewAll && <SmallText text={"View All"} style={{color:'red'}}/>}
    </Pressable>
  );
});

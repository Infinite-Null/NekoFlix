import { View } from "react-native";
import { SmallText } from "./SmallText";
import { memo } from "react";

export const EachGenres = memo(function EachGenres({ title }) {
  return (
    <View style={{
      backgroundColor:"white",
      borderRadius:10,
      padding:4,
    }}>
      <SmallText text={title} style={{color:"black",fontWeight:"500"}}/>
    </View>
  );
})

import { View, StyleSheet } from "react-native";
import { SmallText } from "./SmallText";
import { memo } from "react";

export const EachGenres = memo(function EachGenres({ title, style, fontSize}) {
  const stylesheet = StyleSheet.create({
    genresContainer:{
      backgroundColor:"white",
      borderRadius:10,
      padding:4,
      ...style,
    },
  })
  return (
    <View style={stylesheet.genresContainer}>
      <SmallText text={title} style={
        fontSize ? {color:"black",fontWeight:"500", fontSize} : {color:"black",fontWeight:"500"}}/>
    </View>
  );
})

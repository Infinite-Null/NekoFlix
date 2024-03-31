import { View, StyleSheet } from "react-native";
import { SmallText } from "./SmallText";
import { memo } from "react";

export const EachGenres = memo(function EachGenres({ title }) {
  const stylesheet = StyleSheet.create({
    genresContainer:{
      backgroundColor:"white",
      borderRadius:10,
      padding:4,
    },
  })
  return (
    <View style={stylesheet.genresContainer}>
      <SmallText text={title} style={{color:"black",fontWeight:"500"}}/>
    </View>
  );
})

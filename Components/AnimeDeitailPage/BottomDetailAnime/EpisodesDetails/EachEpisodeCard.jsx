import { memo } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../../../Global/PlainText";
import { SmallText } from "../../../Global/SmallText";
export const EachEpisodeCard = memo(function EachEpisodeCard({title, image, number}) {
  const style = StyleSheet.create({
    container: {
      width: 150,
      height: 100,
      borderRadius: 5,
      backgroundColor:"rgb(32,32,32)",
      margin:10,
      justifyContent:"flex-end",
    },
    image:{
      width: 150,
      height: 100,
      borderRadius: 5,
      backgroundColor:"rgb(79,56,56)",
      position:"absolute",
    },
  })
  return <View style={style.container}>
    <FastImage resizeMode={FastImage.resizeMode.cover} source={{uri:image}}  style={style.image}/>
    <View style={{backgroundColor:"rgba(0,0,0,0.78)", paddingHorizontal:5}}>
      <PlainText text={"Episode " + number}/>
      <SmallText text={title} style={{color:"rgb(243,243,243)"}}/>
    </View>
  </View>
})

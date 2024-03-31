import { memo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

export const EachAnimeCard = memo(function EachAnimeCard(){
  const width = Dimensions.get("window").width
  const styleSheet = StyleSheet.create({
    ImageStyle:{
      width:width * 0.5,
      height:width * 0.6,
      borderRadius:5,
    },
  })
  return (
    <View >
      <FastImage style={styleSheet.ImageStyle} source={{
        uri:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166216-mK2CNMDLsBfW.jpg",
      }}/>
    </View>
  );
})

import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { PlainText } from "../../../Global/PlainText";
import { SmallText } from "../../../Global/SmallText";
import { ImageLoader } from "../../ImageLoader";

export const EachVoiceActorDetail = memo(function EachVoiceActorDetail({language, name, image}){

  const style = StyleSheet.create({
    mainContainer:{
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      gap:10,
    },
    image:{
      height:80,
      width:80,
      borderRadius:1000,
    },
  })
  const {full,native,userPreferred} = name
  return <View style={style.mainContainer}>
    <ImageLoader image={image} style={style.image}/>
   <View>
     <PlainText text={full} numberOfLine={1}/>
     <SmallText text={language} maxLine={1} />
   </View>
  </View>
});

import { memo } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "./PlainText";
import LinearGradient from "react-native-linear-gradient";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { EachGenres } from "./EachGenres";
import * as React from "react";
import { Spacer } from "./Spacer";
import { SmallText } from "./SmallText";
import { useNavigation } from '@react-navigation/native';

export const EachAnimeCard = memo(function EachAnimeCard({genres,image,status,name, data, id}){
  const navigation = useNavigation()
  const width = Dimensions.get("window").width
  const styleSheet = StyleSheet.create({
    ImageStyle:{
      width:width * 0.5,
      height:width * 0.7,
      borderRadius:5,
    },
    LinearGradientStyle:{
      flex:1,
      justifyContent:"flex-end",
      paddingBottom:5,
    },
    GeneresContainer:{
      flexDirection:"row",
      flexWrap:"wrap",
      gap:5,
    },
    StatusStyle:{
      padding:3,
      backgroundColor:"rgba(174,31,31,0.82)",
      alignItems:"center",
      justifyContent:"center",
      position:"absolute",
      top:0,
      left:5,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
    },
  })
  return (
     <Pressable onPress={()=> navigation.navigate("AnimeDetail",{genres,image,name, data, id })}>
       <FastImage source={{
         uri:image,
         priority:FastImage.priority.high,
       }} style={styleSheet.ImageStyle}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0.07)', 'rgba(0,0,0,0.2)', "rgba(0,0,0,0.69)","rgba(0,0,0,0.81)"]} style={styleSheet.LinearGradientStyle}>
           <View style={styleSheet.StatusStyle}>
             <SmallText text={status} style={{
               fontWeight:"600",
               fontSize:8,
               color:"rgb(237,228,228)",
             }}/>
           </View>
           <PaddingConatiner>
             <View style={styleSheet.GeneresContainer}>
               {genres?.slice(0,3)?.map((e,i)=>{
                 return <EachGenres title={e} key={i} style={{
                   padding:2,
                 }} fontSize={7}/>
               })}
             </View>
             <Spacer/>
             <PlainText text={name?.english ?? name?.userPreferred} style={{
               fontWeight:"700",
               color:"white",
             }}/>
           </PaddingConatiner>
         </LinearGradient>
       </FastImage>
     </Pressable>
  );
})

import { memo, useState } from "react";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { Pressable, StyleSheet } from "react-native";
import { PlainText } from "../../../Global/PlainText";
import { SmallText } from "../../../Global/SmallText";
import { EachCharacterDetailModal } from "./EachCharacterDetailModal";

export const EachCharacter = memo(function EachCharacter({name, image, role, voiceActors}){
  const {full,native,userPreferred} = name
  const style = StyleSheet.create({
    image:{
      height:140,
      width:120,
      borderRadius:10,
    },
    nameContainer:{
      flex:1,
      justifyContent:"flex-end",
      paddingHorizontal:5,
    },
  })
  const [show, setShow] = useState(false);
  return <>
    <EachCharacterDetailModal show={show} voiceActors={voiceActors} setShow={setShow} name={name}/>
    <Pressable onPress={()=>setShow(true)}>
      <FastImage source={{
        uri:image,
      }} style={style.image}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0.07)', 'rgba(0,0,0,0.2)', "rgba(0,0,0,0.57)","black"]} style={style.nameContainer}>
          <PlainText text={full} numberOfLine={1}/>
          <SmallText text={role + "   →"} style={{fontWeight:"800"}} maxLine={1}/>
        </LinearGradient>
      </FastImage>
    </Pressable>
  </>
})

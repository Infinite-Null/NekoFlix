import { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Pressable, StyleSheet } from "react-native";
import { PlainText } from "../../../Global/PlainText";
import { SmallText } from "../../../Global/SmallText";
import FastImage from "react-native-fast-image";
import { useNavigation } from '@react-navigation/native';

export const EachCharacter = memo(function EachCharacter({name, image, role, voiceActors}){
  const {full,native,userPreferred} = name
  const navigation = useNavigation()
  const style = StyleSheet.create({
    image:{
      height:120,
      width:120,
      borderRadius:10000,
      position:"absolute",
    },
    nameContainer:{
      flex:1,
      justifyContent:"flex-end",
      paddingHorizontal:5,
      height:120,
      width:120,
    },
  })
  return <>
    <Pressable onPress={()=>navigation.navigate("EachCharactersDetails",{voiceActors,name})}>
      <FastImage source={{uri:image}}  style={style.image}/>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0.07)', 'rgba(0,0,0,0.2)', "rgba(0,0,0,0.57)","black"]} style={style.nameContainer}>
          <PlainText text={full} numberOfLine={1}/>
          <SmallText text={role + "   →"} style={{fontWeight:"800"}} maxLine={1}/>
        </LinearGradient>
    </Pressable>
  </>
})

import { View, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from "react";
import { Heading } from '../../Components/Global/Heading'
import { PlainText } from '../../Components/Global/PlainText'
import { Spacer } from '../../Components/Global/Spacer'
import { EachVoiceActorDetail } from '../../Components/Anime/AnimeDeitailPage/BottomDetailAnime/CharacterDetails/EachVoiceActorDetail'

export default function EachCharactersDetails({route}) {
  const {voiceActors, name} = route.params
  const {width, height} = Dimensions.get("window")
  const style = StyleSheet.create({
    mainContainer:{
      backgroundColor:"rgba(0,0,0,0.85)",
      height,
      width,
      padding:10,
    },
  })
  const [showCard, setShowCard] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShowCard(true)
    },100)
  },[])
  const {full,native,userPreferred} = name
  return (
   <>
     {showCard && <View style={style.mainContainer}>
       <View>
         <Heading text={full}/>
         <PlainText text={"Voice Actors"}/>
       </View>
       <Spacer/>
       <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{gap:10}} data={voiceActors} renderItem={({item, index})=><EachVoiceActorDetail name={item?.name} image={item?.image} language={item?.language}/>}/>
     </View>}
   </>
  )
}

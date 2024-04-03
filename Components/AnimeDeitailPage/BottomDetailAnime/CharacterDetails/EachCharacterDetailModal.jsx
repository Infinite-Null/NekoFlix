import { memo } from "react";
import { Dimensions, FlatList, Modal, Pressable, StyleSheet, View } from "react-native";
import { EachVoiceActorDetail } from "./EachVoiceActorDetail";
import { Heading } from "../../../Global/Heading";
import { Spacer } from "../../../Global/Spacer";
import { PlainText } from "../../../Global/PlainText";
import { SpaceBetween } from "../../../../Layout/SpaceBetween";

export const EachCharacterDetailModal = memo(function EachCharacterDetailModal({voiceActors, show, setShow, name}){
  const {width, height} = Dimensions.get("window")
  const style = StyleSheet.create({
    mainContainer:{
      backgroundColor:"rgba(0,0,0,0.85)",
      height,
      width,
      padding:10,
    },
  })
  const {full,native,userPreferred} = name
  return <Modal  animated={true} transparent={true} animationType={"fade"} visible={show}>
     <View style={style.mainContainer}>
       <SpaceBetween>
         <View>
           <Heading text={full}/>
           <PlainText text={"Voice Actors"}/>
         </View>
         <Pressable onPress={()=>setShow(false)} style={{
           height:30,
           width:50,
           alignItems:"center",
           justifyContent:"center",
           backgroundColor:"rgb(193,42,42)",
           borderRadius:10,
         }}><PlainText text={"Close"}/></Pressable>
       </SpaceBetween>
       <Spacer/>
       <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{gap:10}} data={voiceActors} renderItem={({item, index})=><EachVoiceActorDetail name={item?.name} image={item?.image} language={item?.language}/>}/>
     </View>
      </Modal>
})

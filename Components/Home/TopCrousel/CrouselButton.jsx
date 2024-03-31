import { Pressable, StyleSheet } from "react-native";
import { SmallText } from "../../Global/SmallText";
import AntDesign from "react-native-vector-icons/AntDesign";
import { memo } from "react";

export const CrouselButton = memo(function CrouselButton({text, onPress, color}) {
  const styleSheet = StyleSheet.create({
    mainButtonContainer:{
      backgroundColor: color,
      flex:1,
      alignItems:"center",
      justifyContent:"space-evenly",
      borderRadius:5,
      padding:10,
      marginVertical:10,
      flexDirection:"row",
      elevation:10,
    },
  })
  return (
    <Pressable onPress={onPress}  style={styleSheet.mainButtonContainer}>
      <SmallText text={text} style={{
        fontWeight:"bold",
      }}/>
      <AntDesign name={"play"}/>
    </Pressable>
  );
})

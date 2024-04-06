import { memo } from "react";
import ReadMore from "@fawazahmed/react-native-read-more";
import { FormatDescription } from "../../Utils/FormatDescription";
import { Linking, Pressable, StyleSheet } from "react-native";
import { SmallText } from "../Global/SmallText";
import AntDesign from "react-native-vector-icons/AntDesign";

export const DescriptionWithTrailer = memo(function DescriptionWithTrailer({description, trailer}){
  const styles = StyleSheet.create({
    textStyle:{
      paddingHorizontal:10,
      fontSize:13,
    },
  })
  const styleSheet = StyleSheet.create({
    mainButtonContainer:{
      backgroundColor: "rgb(30,30,30)",
      width:120,
      alignItems:"center",
      justifyContent:"space-evenly",
      borderRadius:5,
      padding:10,
      margin:10,
      flexDirection:"row",
      elevation:10,
    },
  })
  return (
    <>
      <ReadMore numberOfLines={4} style={styles.textStyle}>
        {FormatDescription(description)}
      </ReadMore>
      <Pressable onPress={async ()=>{
        if (trailer){
          await Linking.openURL(`https://www.youtube.com/watch?v=${trailer}`);
        }
      }}  style={styleSheet.mainButtonContainer}>
        <SmallText text={trailer ? "Watch Trailer" : "Trailer Unavailable"} style={{
          fontWeight:"bold",
        }}/>
        {trailer && <AntDesign name={"play"} size={15} color={"white"}/>}
      </Pressable>
    </>
  );
});

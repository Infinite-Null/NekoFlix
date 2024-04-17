import { memo, useCallback } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../Global/PlainText";
import { useNavigation } from "@react-navigation/native";
import { FormatMangaLinks } from "../../Utils/FormatMangaLinks";

export const EachMangaCard = memo(({id, image, name, rank, slug}) => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation()
  const style = StyleSheet.create({
    container:{
      width:width / 3.5,
      borderRadius:5,
      marginTop:15,
      position:"relative",
    },
    imageStyle:{
      width:width / 3.5,
      height:width / 2.2,
      borderRadius:5,
    },
  })
  const getRankColor = useCallback((rank) => {
    if (rank === 1){
      return {
        backgroundColor:"#EBB62D",
        textColor:"#8e6129",
      }
    } else if (rank === 2){
      return  {
        backgroundColor:"#9CE53E",
        textColor:"#3F8A2D",
      }
    } else if (rank === 3){
      return  {
        backgroundColor:"#D3E7F3",
        textColor:"#3D4C64",
      }
    } else {
      return  {
        backgroundColor:"#E0D59E",
        textColor:"#A87D3F",
      }
    }
  },[])
  return (
    <Pressable onPress={()=>{
      navigation.push("MangaDetails",{id, slug})
    }} style={style.container}>
      {rank && <View style={{
        position:"absolute",
        zIndex:100,
        borderRadius:1000000,
        left:-5,
        top:-5,
        elevation:10,
        height:30,
        width:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:getRankColor(rank).backgroundColor,
      }}>
        <PlainText text={"#" + rank} style={{fontWeight:"700", color:getRankColor(rank).textColor}}/>
      </View>}
      <FastImage style={style.imageStyle} source={{
        uri:FormatMangaLinks.getMangaCover(image, id),
      }}/>
      <PlainText text={name} style={{fontWeight:"600"}}/>
    </Pressable>
  );
});

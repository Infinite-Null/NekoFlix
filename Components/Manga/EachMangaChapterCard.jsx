import { memo } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../Global/PlainText";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../Utils/FormatDate";
import { SmallText } from "../Global/SmallText";

export const EachMangaChapterCard = memo(({id, chapter_number, slug, created_at, image, }) => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation()
  const style = StyleSheet.create({
    container:{
      width:width / 3.5,
      borderRadius:5,
      marginTop:10,
    },
    imageStyle:{
      width:width / 3.5,
      height:width / 2.2,
      borderRadius:5,
      justifyContent:"flex-end",
    },
  })
  return (
    <Pressable onPress={()=>{
      // navigation.push("MangaDetails",{id, slug})
    }} style={style.container}>
      <FastImage style={style.imageStyle} source={{
        uri: image,
      }}>
      <View style={{backgroundColor:"rgba(0,0,0,0.74)", padding:5}}>
        <PlainText text={'Ch. ' + chapter_number} style={{fontWeight:"600", color:"white"}}/>
        <SmallText text={FormatDate(created_at)}/>
      </View>
      </FastImage>
    </Pressable>
  );
});

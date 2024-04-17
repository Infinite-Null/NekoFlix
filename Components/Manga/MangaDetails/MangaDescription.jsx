import { memo } from "react";
import ReadMore from "@fawazahmed/react-native-read-more";
import { View } from "react-native";
import { PlainText } from "../../Global/PlainText";
import { Spacer } from "../../Global/Spacer";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";

export const MangaDescription = memo(({description, views, chapters}) => {
  return (
    <>
      <ReadMore numberOfLines={4} style={{paddingHorizontal:10,
        fontSize:13,
        color:"rgb(223,223,223)"}}>
        {description ? description : "No Description Available"}
      </ReadMore>
      <Spacer/>
      <View style={{flexDirection:"row", alignItems:"center", gap:10, paddingHorizontal:10}}>
        <EachDescriptionWithIcon text={"Views: "} count={views} icon={<Entypo name={"eye"} size={15} color={"white"}/>}/>
        <EachDescriptionWithIcon text={"Chapters: "} count={chapters} icon={<Foundation name={"page-multiple"} size={15} color={"white"}/>}/>
      </View>
    </>
  );
});
function EachDescriptionWithIcon({icon, text, count}) {
  return (
    <View style={{flexDirection:"row", alignItems:"center", flex:1,justifyContent:"center", backgroundColor:"rgb(21,20,20)", padding:10, borderRadius:5, gap:8}}>
      {icon}
      <PlainText text={text}/>
      <PlainText text={count} style={{fontWeight:"600"}}/>
    </View>
  );
}

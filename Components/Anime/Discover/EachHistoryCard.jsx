import { memo } from "react";
import { Pressable } from "react-native";
import { PlainText } from "../../Global/PlainText";
import Entypo from "react-native-vector-icons/Entypo";

export const EachHistoryCard = memo(({onPress, onCrossPress, text, onClearAllPress}) => {
 if (text === "Clear All"){
   return <Pressable onPress={()=>{
     onClearAllPress()
   }} style={{padding:10, borderRadius:20, borderWidth:1, flexDirection:"row", alignItems:"center", gap:10}}>
     <PlainText text={text} numberOfLine={1} style={{color:"rgb(195,35,35)"}}/>
   </Pressable>
 } else {
   return (
     <Pressable onPress={()=>{
       onPress(text)
     }} style={{padding:10, borderRadius:20, borderWidth:1, borderColor:"rgb(56,56,56)", flexDirection:"row", alignItems:"center", gap:10}}>
       <PlainText text={text} numberOfLine={1}/>
       <Pressable onPress={()=>{
         onCrossPress(text)
       }}>
         <Entypo name="circle-with-cross" size={24} color="rgb(56,56,56)"/>
       </Pressable>
     </Pressable>
   );
 }
});

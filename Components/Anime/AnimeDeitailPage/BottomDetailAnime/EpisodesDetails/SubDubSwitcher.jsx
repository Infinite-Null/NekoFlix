import { memo } from "react";
import { Pressable, View } from "react-native";
import { PlainText } from "../../../../Global/PlainText";
import { useTheme } from "@react-navigation/native";

export const SubDubSwitcher = memo(function SubDubSwitcher({ isSub, setIsSub }) {
  const theme = useTheme()
  return <>
  <View style={{width:100, flexDirection:"row", gap:10, marginHorizontal:10, backgroundColor:"rgb(47,47,47)", paddingVertical:5, paddingHorizontal:10, borderRadius:10, alignItems:"center", justifyContent:"center"}}>
      <Pressable onPress={()=>setIsSub(true)}><PlainText text={"SUB"} style={{width:40, backgroundColor:isSub ? theme.colors.primary : "transparent", textAlign:"center", borderRadius:5}}/></Pressable>
     <Pressable onPress={()=>setIsSub(false)}><PlainText text={"DUB"} style={{width:40, backgroundColor:!isSub ? theme.colors.primary : "transparent", textAlign:"center", borderRadius:5}}/></Pressable>
  </View>
  </>
});

import { memo, useState } from "react";
import { Pressable, Text, TextInput } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import { useTheme } from "@react-navigation/native";

export const SearchBar = memo(function ({onSearch}){
  const theme = useTheme()
  const style = {
    searchBar: {
      backgroundColor: "rgb(30,27,27)",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      padding: 10,
      color:'white',
      flex:6,
      height:50,
    },
    textStyle:{
      color:'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonStyle:{
      backgroundColor: theme.colors.primary,
      padding: 10,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      alignItems:"center",
      justifyContent:"center",
      flex: 1,
      height:50,
    },
    buttonTextStyle:{
      color:'rgb(250,208,208)',
      fontSize: 14,
      fontWeight: '400',
    },
  }
  const [text, settext] = useState("");
  const [focused, setFocused] = useState(false);
  return <PaddingConatiner>
    {focused && <Animated.Text style={style.textStyle} exiting={FadeOutUp} entering={FadeInDown}>Whats on your mind?</Animated.Text>}
    <SpaceBetween>
      <TextInput value={text} onChangeText={(text)=>settext(text)} placeholder={"Search any anime"} placeholderTextColor={"rgb(72,72,72)"} style={style.searchBar} onFocus={()=>{
        setFocused(true)
      }} onBlur={()=>{setFocused(false)}}/>
      <Pressable style={style.buttonStyle} onPress={()=>{
        onSearch(text)
      }}>
        <Text style={style.buttonTextStyle}>Search</Text>
      </Pressable>
    </SpaceBetween>
  </PaddingConatiner>
})

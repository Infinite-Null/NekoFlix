import Animated, { FadeIn } from "react-native-reanimated";
import { View } from "react-native";
import { MainWrapper } from "../Layout/MainWrapper";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import FastImage from "react-native-fast-image";

export const InitialScreen = ({navigation}) => {
  const theme = useTheme()
  async function InitialCall(){
      navigation.replace("MainRoute")
  }
  useEffect(() => {
    setTimeout(() => {InitialCall()}, 820)
  }, []);
  return (
    <MainWrapper>
      <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <FastImage source={require("../assets/AppImages/nekoJump.gif")} style={{
          height:200,
          width:200,
        }} resizeMode={FastImage.resizeMode.stretch}/>
        <Animated.Text entering={FadeIn.delay(100).duration(300)} style={{
          fontSize:40,
          color:theme.colors.text,
          fontWeight:500,
        }}>Nekoflix</Animated.Text>
        <Animated.Text entering={FadeIn.delay(300)} style={{
          fontSize:15,
          color:theme.colors.primary,
        }}>Anime for you.</Animated.Text>
      </View>
    </MainWrapper>
  );
};

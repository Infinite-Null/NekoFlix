import Animated, { FadeIn } from "react-native-reanimated";
import { Dimensions, StatusBar, View } from "react-native";
import { MainWrapper } from "../Layout/MainWrapper";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import FastImage from "react-native-fast-image";
import { GetHomePage } from "../LocalStorage/AppSettings";

export const InitialScreen = ({navigation}) => {
  const theme = useTheme()
  const {width, height} = Dimensions.get("window")
  async function InitialCall(){
    const screen = await GetHomePage()
    if (screen === "Anime"){
      navigation.replace("MainRoute")
    } else {
      navigation.replace("MainRouteWithManga")
    }
  }
  useEffect(() => {
    setTimeout(() => {InitialCall()}, 820)
  }, []);
  return (
    <MainWrapper>
      <StatusBar translucent={true}/>
      <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <FastImage source={require("../assets/AppImages/splash.gif")}  style={{
          height:height,
          width:width,
        }} resizeMode={FastImage.resizeMode.stretch}/>
        <View style={{
          position:"absolute",
          width:width,
          height:height,
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"rgba(0,0,0,0.86)",
        }}>
          <Animated.Text entering={FadeIn.delay(100).duration(300)} style={{
            fontSize:30,
            color:'white',
            fontWeight:500,
          }}>Nekoflix</Animated.Text>
          <Animated.Text entering={FadeIn.delay(300)} style={{
            fontSize:15,
            color:theme.colors.primary,
          }}>One app you need</Animated.Text>
        </View>
      </View>
    </MainWrapper>
  );
};

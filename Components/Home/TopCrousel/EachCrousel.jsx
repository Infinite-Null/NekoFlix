import { Dimensions, ImageBackground, View } from "react-native";
import * as React from "react";
import LinearGradient from "react-native-linear-gradient";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { Heading } from "../../Global/Heading";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import { PlainText } from "../../Global/PlainText";
import FastImage from "react-native-fast-image";
import { CrouselButton } from "./CrouselButton";

export const EachCrousel = () => {
  const width = Dimensions.get('window').width;
  return (
    <ImageBackground blurRadius={4}  style={{
      flex:1,
    }} source={{
      uri:"https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
    }}>
      <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.44)"}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0.07)', 'rgba(0,0,0,0.2)', "rgba(0,0,0,0.72)","black"]} style={{
          height:width / 1.45,
          justifyContent:"flex-end",
        }}>
            <PaddingConatiner>
              <SpaceBetween>
                <View style={{
                  flex:1,
                  paddingRight:20,
                }}>
                  <Heading text={"Attack On Titan"}/>
                  <PlainText numberOfLine={4} text={"Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\\r\\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\\r\\n(Source: MangaHelpers)"}/>
                  <CrouselButton/>
                </View>
                <FastImage
                  style={{ width: 120, height: (width / 1.45) - 90, borderRadius:5, elevation:10}}
                  source={{
                    uri: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg',
                  }}
                />
              </SpaceBetween>
            </PaddingConatiner>
          <View style={{height:35}}/>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

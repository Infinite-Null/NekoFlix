import FastImage from "react-native-fast-image";
import { Dimensions, Pressable, View } from "react-native";
import Animated, { FadeInDown, FadeOutDown, FadeOutUp } from "react-native-reanimated";

export const VideoPlayerNextPrev10sec = ({show, image, style, onPress, isFull}) => {
  const {width} = Dimensions.get("window")
  return (
   <>
     {show && <Animated.View entering={FadeInDown.delay(150)} exiting={FadeOutUp.delay(100)}>
       <Pressable onPress={onPress} style={{
         position:"absolute",
         flexDirection:"row",
         bottom:isFull ? (width * 0.75 ) / 3.8 : (width * 0.75 ) / 3,
         backgroundColor:"rgba(0,0,0,0.62)",
         borderRadius:100,
         ...style,
       }}>
         <FastImage source={image} style={{
           height:70,
           width:70,
         }}/>
       </Pressable>
     </Animated.View>}
   </>
  );
};

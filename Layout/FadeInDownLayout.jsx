import { memo } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";

export const FadeInDownLayout = memo(function FadeInDownLayout({children}){
  return (
    <Animated.View entering={FadeInDown.springify(1600)}>
      {children}
    </Animated.View>
  );
})

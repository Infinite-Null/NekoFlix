import * as React from 'react';
import { Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { EachCrousel } from "./EachCrousel";

function Index() {
  const width = Dimensions.get('window').width;
  return (
    <>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={false}
        autoPlayInterval={2000}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
           <EachCrousel/>
        )}
      />
    </>
  );
}

export default Index;

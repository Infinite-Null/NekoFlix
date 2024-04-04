import { FadeInDownLayout } from "../../Layout/FadeInDownLayout";
import FastImage from "react-native-fast-image";
import * as React from "react";
import { Dimensions } from "react-native";
import { ImageLoading } from "../Global/Loading/ImageLoading";
import { useState } from "react";

export const ImageLoader = ({ image, style, notShowAnimation, children}) => {
  const width = Dimensions.get("window").width
  const [Loading, setLoading] = useState(false);
  if (!notShowAnimation){
    return (
      <FadeInDownLayout>
        <FastImage
          onLoadStart={()=>setLoading(true)}
          onLoadEnd={()=>setLoading(false)}
          style={{ width: 120, height: (width / 1.35) - 90, borderRadius:5, elevation:10 , ...style}}
          source={{
            uri: image,
            priority: FastImage.priority.high,
          }}
        >
          {Loading && <ImageLoading height={(width / 1.35) - 90} width={120}/>}
        </FastImage>
      </FadeInDownLayout>
    );
  } else {
    return <FastImage
      onLoadStart={()=>setLoading(true)}
      onLoadEnd={()=>setLoading(false)}
      style={{ width: 120, height: (width / 1.35) - 90, borderRadius:5, elevation:10 , ...style}}
      source={{
        uri: image,
        priority: FastImage.priority.high,
      }}
    >
      {Loading && <ImageLoading height={(width / 1.35) - 90} width={120}/>}
    </FastImage>
  }
};

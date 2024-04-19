import { memo } from "react";
import FastImage from "react-native-fast-image";
import { Dimensions, ImageBackground, View } from "react-native";
import { Heading } from "../../Global/Heading";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { Spacer } from "../../Global/Spacer";
import { SmallText } from "../../Global/SmallText";
import { FormatMangaGeneras } from "../../../Utils/FormatMangaGeneras";

import { ResumeAndRead } from "./ResumeAndRead";
import { SaveMangaButton } from "./SaveMangaButton";

export const MangaTopHeader = memo(({image, name, geners, id, ChaptersData, slug, imageid}) => {
  const { width } = Dimensions.get("window");
  return (
    <ImageBackground blurRadius={5} source={{uri: image}} style={{width: "100%", aspectRatio: 2.5, zIndex:100}} resizeMode={FastImage.resizeMode.cover}>
      <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.61)", flexDirection:"row", height:"150%"}}>
        <FastImage source={{uri: image}} style={{width: width * 0.26, height:"110%", margin: 10, borderRadius:5, position:"relative", elevation:10}} resizeMode={FastImage.resizeMode.cover}/>
        <View style={{flex:1,height:"110%", alignItems:"flex-start", justifyContent:"flex-end"}}>
          <Heading text={name} style={{color:"rgb(255,255,255)"}}/>
          <SmallText text={FormatMangaGeneras(geners)} style={{color:"rgb(255,255,255)", fontWeight:"600", maxWidth:"70%"}}/>
          <Spacer/>
          <SpaceBetween style={{gap:5, marginRight:5}}>
            <ResumeAndRead name={name} image={imageid} id={id} slug={slug} ChaptersData={ChaptersData}/>
            <SaveMangaButton image={imageid} name={name} id={id} slug={slug}/>
          </SpaceBetween>
        </View>
      </View>
    </ImageBackground>
  );
});

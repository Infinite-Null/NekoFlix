import { memo } from "react";
import FastImage from "react-native-fast-image";
import { Dimensions, ImageBackground, View } from "react-native";
import { Heading } from "../../Global/Heading";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { EachButton } from "../EachButton";
import { Spacer } from "../../Global/Spacer";
import { useTheme } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { SmallText } from "../../Global/SmallText";
import { FormatMangaGeneras } from "../../../Utils/FormatMangaGeneras";

export const MangaTopHeader = memo(({image, name, geners}) => {
  const { width } = Dimensions.get("window");
  const theme = useTheme()
  return (
    <ImageBackground blurRadius={5} source={{uri: image}} style={{width: "100%", aspectRatio: 2.5, zIndex:100}} resizeMode={FastImage.resizeMode.cover}>
      <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.61)", flexDirection:"row", height:"150%"}}>
        <FastImage source={{uri: image}} style={{width: width * 0.26, height:"110%", margin: 10, borderRadius:5, position:"relative", elevation:10}} resizeMode={FastImage.resizeMode.cover}/>
        <View style={{flex:1,height:"110%", alignItems:"flex-start", justifyContent:"flex-end"}}>
          <Heading text={name} style={{color:"rgb(255,255,255)"}}/>
          <SmallText text={FormatMangaGeneras(geners)} style={{color:"rgb(255,255,255)", fontWeight:"600", maxWidth:"70%"}}/>
          <Spacer/>
          <SpaceBetween style={{gap:5, marginRight:5}}>
            <EachButton
              title={"Resume"}
              icon={<Entypo name={"controller-play"}
              color={"black"}
              size={20}/>}/>
            <EachButton title={"Save"}
                        Containerstyle={{backgroundColor:theme.colors.primary}}
                        TextStyle={{color:"white"}}
                        icon={<Feather name={"bookmark"} color={"white"} size={20}/>}
            />
          </SpaceBetween>
        </View>
      </View>
    </ImageBackground>
  );
});

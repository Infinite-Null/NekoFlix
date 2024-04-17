import { memo } from "react";
import FastImage from "react-native-fast-image";
import { Dimensions, ImageBackground, View } from "react-native";
import { Heading } from "../../Global/Heading";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { EachButton } from "../EachButton";
import { Spacer } from "../../Global/Spacer";
import Entypo from "react-native-vector-icons/Entypo";
import { SmallText } from "../../Global/SmallText";
import { FormatMangaLinks } from "../../../Utils/FormatMangaLinks";
import { EachHeaderSection } from "../Home/EachHeaderSection";
import Foundation from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/native";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";

export const RecommendedManga = memo(({manga}) => {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation()
  return (
   <>
     <PaddingConatiner><EachHeaderSection title={"Read Next"} showViewAll={false}/></PaddingConatiner>
     <ImageBackground  blurRadius={5} source={{uri: FormatMangaLinks.getMangaCover(manga.cover,manga.id)}} style={{width: "100%", aspectRatio: 2, zIndex:100}} resizeMode={FastImage.resizeMode.cover}>
       <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.71)", flexDirection:"row", height:"150%"}}>
         <FastImage source={{uri: FormatMangaLinks.getMangaCover(manga.cover,manga.id)}} style={{width: width * 0.36, height:"100%", margin: 10, borderRadius:5, position:"relative", elevation:10}} resizeMode={FastImage.resizeMode.cover}/>
         <View style={{flex:1,height:"100%", alignItems:"flex-start", justifyContent:"flex-end"}}>
           <Heading text={manga.title} style={{color:"rgb(255,255,255)"}}/>
           <View style={{flexDirection:"row", alignItems:"flex-start", gap:10, width:"90%"}}>
             <EachDescriptionWithIcon text={"Views: "} count={manga.views_count} icon={<Entypo name={"eye"} size={15} color={"white"}/>}/>
             <EachDescriptionWithIcon text={"Chapters: "} count={manga.chapters_count} icon={<Foundation name={"page-multiple"} size={15} color={"white"}/>}/>
           </View>
           <Spacer/>
           <SpaceBetween style={{gap:5, marginRight:5}}>
             <EachButton
               Onpress={()=>{
                 navigation.push("MangaDetails",{id:manga.id, slug:manga.slug, image:manga.cover, name:manga.title})
               }}
               title={"Read"}
               icon={<Entypo name={"controller-play"}
                             color={"black"}
                             size={20}/>}/>
           </SpaceBetween>
         </View>
       </View>
     </ImageBackground>
   </>
  );
});
function EachDescriptionWithIcon({icon, text, count}) {
  return (
    <View style={{flexDirection:"row", alignItems:"center", flex:1,justifyContent:"center", backgroundColor:"rgb(21,20,20)", padding:10, borderRadius:5, gap:8}}>
      {icon}
      <SmallText text={text}/>
      <SmallText text={count} style={{fontWeight:"600"}}/>
    </View>
  );
}

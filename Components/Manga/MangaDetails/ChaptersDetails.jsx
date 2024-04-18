import { memo } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import { EachMangaChapterCard } from "../EachMangaChapterCard";
import { EachHeaderSection } from "../Home/EachHeaderSection";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export const ChaptersDetails = memo(({image, id, slug, data}) => {
  const navigation = useNavigation()
  return (
    <PaddingConatiner>
        <EachHeaderSection title={"Chapters"} showViewAll={true} OnPress={()=>{
          navigation.navigate("ViewAllChapters",{data, image, id, slug})
        }}/>
        <View style={{paddingHorizontal:10}}>
          <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start", gap:10}}>
            {data.slice(0,9).map((item,i) => <EachMangaChapterCard  key={i} id={item.id} image={image} slug={item.slug} chapter_number={item.chapter_number} created_at={item.created_at}/>)}
          </View>
        </View>
    </PaddingConatiner>
  );
});

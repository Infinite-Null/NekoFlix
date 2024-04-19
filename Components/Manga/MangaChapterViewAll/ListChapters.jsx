import { memo, useEffect, useState } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import { Dimensions, FlatList} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { EachMangaChapterCard } from "../EachMangaChapterCard";

export const ListChapters = memo(({ data, accending, image, SearchText, MangaSlug, MangaId}) => {
  const { width } = Dimensions.get('window');
  const [Data, setData] = useState(data);
  const [accen, setAccen] = useState(accending);

  useEffect(() => {
    setAccen(accending)
  }, [accending]);
  useEffect(() => {
    if (SearchText === ""){
      setData(data)
    } else {
      setData(data.filter((item)=>item.chapter_number.toString() === SearchText))
    }
  }, [SearchText]);

  return (
    <PaddingConatiner>
      <FlatList decelerationRate={'fast'} initialNumToRender={10} numColumns={3} showsVerticalScrollIndicator={false} data={accen ? Data : Data.reverse()} contentContainerStyle={{justifyContent:"space-between", paddingBottom:160}}
                renderItem={({item, index})=>{
                  if (index > 20){
                    return <EachMangaChapterCard MangaSlug={MangaSlug} MangaId={MangaId} key={item.id} id={item.id} image={image} slug={item.slug} chapter_number={item.chapter_number} created_at={item.created_at} ContainerStyle={{marginHorizontal:width / 90}}/>
                  } else {
                    return <Animated.View entering={FadeInDown.delay((index < 20) ? (index * 40) : (0))} style={{marginHorizontal:width / 90}}>
                      <EachMangaChapterCard MangaSlug={MangaSlug} MangaId={MangaId} key={item.id} id={item.id} image={image} slug={item.slug} chapter_number={item.chapter_number} created_at={item.created_at}/>
                    </Animated.View>
                  }
                }}
      />
    </PaddingConatiner>
  );
});

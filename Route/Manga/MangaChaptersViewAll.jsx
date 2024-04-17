import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { Dimensions, FlatList} from "react-native";
import { EachMangaCard } from "../../Components/Manga/EachMangaCard";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { EachMangaChapterCard } from "../../Components/Manga/EachMangaChapterCard";

export const MangaChaptersViewAll = ({route}) => {
  const {data, image} = route.params
  const { width } = Dimensions.get('window');
  const [show, setShow] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },1)
  },[])
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text = {"All Chapters"}/>
        {show && <FlatList numColumns={3} showsVerticalScrollIndicator={false} data={data} contentContainerStyle={{justifyContent:"space-between", paddingBottom:80}} renderItem={({item, index})=><Animated.View entering={FadeInDown.delay((index < 20) ? (index * 40) : (0))} style={{marginHorizontal:width / 90}}>
          <EachMangaChapterCard  key={item.id} id={item.id} image={image} slug={item.slug} chapter_number={item.chapter_number} created_at={item.created_at}/>
        </Animated.View>}/>}
      </PaddingConatiner>
    </MainWrapper>
  );
};

import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { Dimensions, FlatList} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { EachMangaChapterCard } from "../../Components/Manga/EachMangaChapterCard";
import { SearchBar } from "../../Components/Manga/Home/SearchBar";
import { Spacer } from "../../Components/Global/Spacer";

export const MangaChaptersViewAll = ({route}) => {
  const {data, image, id, slug} = route.params
  const [Data, setData] = useState(data);
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
        <SearchBar keyboard={'numeric'} placeholder={"Search chapter number"} onChangeText={(text)=>{
          console.log(text);
          if (text === ""){
            setData(data)
          } else {
            setData(data.filter((item)=>item.chapter_number.toString() === text))
          }
        }}/>
        <Spacer/>
        {show && <FlatList windowSize={20} numColumns={3} showsVerticalScrollIndicator={false} data={Data} contentContainerStyle={{justifyContent:"space-between", paddingBottom:160}} renderItem={({item, index})=><Animated.View entering={FadeInDown.delay((index < 20) ? (index * 40) : (0))} style={{marginHorizontal:width / 90}}>
          <EachMangaChapterCard  key={item.id} id={item.id} image={image} slug={item.slug} chapter_number={item.chapter_number} created_at={item.created_at}/>
        </Animated.View>}/>}
      </PaddingConatiner>
    </MainWrapper>
  );
};

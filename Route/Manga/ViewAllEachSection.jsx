import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { Dimensions, FlatList} from "react-native";
import { EachMangaCard } from "../../Components/Manga/EachMangaCard";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useEffect, useState } from "react";

export const ViewAllEachSection = ({route}) => {
  const {showRank, title, data} = route.params
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
           <Heading text = {title}/>
           {show && <FlatList numColumns={3} showsVerticalScrollIndicator={false} data={data} contentContainerStyle={{justifyContent:"center", gap: 2, paddingBottom:80}} renderItem={({item, index})=><Animated.View entering={FadeInDown.delay((index < 20) ? (index * 40) : (0))} style={{marginHorizontal:width / 90}}>
             <EachMangaCard key={index} id={item.id} image={item.cover} slug={item.slug} name={item.title} rank={showRank ? index + 1 : null}/>
           </Animated.View>}/>}
        </PaddingConatiner>
    </MainWrapper>
  );
};

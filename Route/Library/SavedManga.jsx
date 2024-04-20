import { useEffect, useState } from "react";
import { getSavedManga } from "../../LocalStorage/SavedManga";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { Dimensions, FlatList } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { EachMangaCard } from "../../Components/Manga/EachMangaCard";
import { MainWrapper } from "../../Layout/MainWrapper";

export const SavedManga = () => {
  const [Data, setData] = useState([]);
  const {width} = Dimensions.get('window')
  async function getSavedMangaData(){
    const result = await getSavedManga()
    setData(result)
  }
  useEffect(()=>{
    getSavedMangaData()
  },[])
  return (
    <>
      <MainWrapper>
        <PaddingConatiner>
          <Heading text = {"Saved Manga"}/>
          <FlatList numColumns={3} showsVerticalScrollIndicator={false} data={Data} contentContainerStyle={{justifyContent:"center", gap: 2, paddingBottom:80}} renderItem={({item, index})=>{
            if (index < 20){
              return <Animated.View entering={FadeInDown.delay((index < 20) ? (index * 40) : (0))} style={{marginHorizontal:width / 90}}>
                <EachMangaCard key={index} id={item.id} image={item.image} slug={item.slug} name={item.name}/>
              </Animated.View>
            } else {
             return <EachMangaCard key={index} id={item.id} image={item.image} slug={item.slug} name={item.name}/>
            }
          }}/>
        </PaddingConatiner>
      </MainWrapper>
    </>
  );
};

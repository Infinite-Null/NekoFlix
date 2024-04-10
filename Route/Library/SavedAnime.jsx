import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { useEffect, useState } from "react";
import { getSavedAnime } from "../../Utils/SavedAnime";
import { EachAnimeCard } from "../../Components/Global/EachAnimeCard";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../Components/Global/Spacer";

export const SavedAnime = () => {
  const navigation = useNavigation()
  const [savedAnime, setSavedAnime] = useState([])
  useEffect(()=>{
    getSavedAnime().then((data)=>{
      setSavedAnime(data)
    })
  },[])
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text={"Saved Anime"}/>
        <Spacer/>
      <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={savedAnime}  renderItem={({ item, index })=>(
        <EachAnimeCard
          key={index}
          image={item?.image}
          name={item?.title}
          status={item?.status}
          genres={item?.genres}
          data={item}
          id={item.id}
          navigation={navigation}
        />)}/></PaddingConatiner>
    </MainWrapper>
  );
};

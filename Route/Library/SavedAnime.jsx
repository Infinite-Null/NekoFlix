import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Heading } from "../../Components/Global/Heading";
import { useEffect, useState } from "react";
import { getSavedAnime } from "../../Utils/SavedAnime";
import { EachAnimeCard } from "../../Components/Global/EachAnimeCard";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../Components/Global/Spacer";
import { PlainText } from "../../Components/Global/PlainText";

export const SavedAnime = () => {
  const navigation = useNavigation()
  const [savedAnime, setSavedAnime] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    getSavedAnime().then((data)=>{
      setSavedAnime(data)
    }).finally(()=>setLoading(false))
  },[])
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text={"Saved Anime"}/>
        <Spacer/>
        {!loading && <FlatList ListEmptyComponent={<PlainText text={"No Saved Anime 🙃"}/>} showsVerticalScrollIndicator={false} numColumns={2} data={savedAnime}  renderItem={({ item, index })=>(
          <EachAnimeCard
            key={index}
            image={item?.image}
            name={item?.title}
            status={item?.status}
            genres={item?.genres}
            data={item}
            id={item.id}
            navigation={navigation}
          />)}/>}

      </PaddingConatiner>
    </MainWrapper>
  );
};

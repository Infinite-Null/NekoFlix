import { ScrollView} from "react-native";
import * as React from "react";
import { TopDetail } from "../Components/AnimeDeitailPage/TopDetail";
import { BottomDetailAnime } from "../Components/AnimeDeitailPage/BottomDetailAnime/BottomDetailAnime";

export const AnimeDetailPage = ({route}) => {
  const {genres,image,name, data, id } = route.params
  const {rating, cover} = data
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <TopDetail name={name} image={image} rating={rating} genres={genres} cover={cover}/>
      <BottomDetailAnime id={id} data={data}/>
    </ScrollView>
  );
};

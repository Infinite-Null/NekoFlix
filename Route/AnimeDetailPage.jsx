import { ScrollView} from "react-native";
import * as React from "react";
import { TopDetail } from "../Components/AnimeDeitailPage/TopDetail";

export const AnimeDetailPage = ({route}) => {
  const {genres,image,name, data, id } = route.params
  const {rating, trailer, cover} = data
  return (
    <ScrollView>
     <TopDetail name={name} image={image} rating={rating} genres={genres} cover={cover}/>
    </ScrollView>
  );
};

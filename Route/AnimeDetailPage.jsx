import { ScrollView} from "react-native";
import * as React from "react";
import { TopDetail } from "../Components/AnimeDeitailPage/TopDetail";
import { DescriptionWithTrailer } from "../Components/AnimeDeitailPage/DescriptionWithTrailer";

export const AnimeDetailPage = ({route}) => {
  const {genres,image,name, data, id } = route.params
  const {rating, trailer, cover, description} = data
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <TopDetail name={name} image={image} rating={rating} genres={genres} cover={cover}/>
      <DescriptionWithTrailer description={description} trailer={trailer?.id}/>
    </ScrollView>
  );
};

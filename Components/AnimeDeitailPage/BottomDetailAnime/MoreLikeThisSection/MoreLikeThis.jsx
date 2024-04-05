import { memo, useEffect } from "react";
import { FlatList } from "react-native";
import { EachAnimeCard } from "../../../Global/EachAnimeCard";
import { PaddingConatiner } from "../../../../Layout/PaddingConatiner";
import { PlainText } from "../../../Global/PlainText";

export const MoreLikeThis = memo(function MoreLikeThis({navigation, recommended}){
  return <>
    <FlatList  ListEmptyComponent={
      // eslint-disable-next-line react/no-unstable-nested-components
      (index)=><PlainText text={"No Related Anime 🙃"} key={index}/>} data={recommended} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10, gap:10}} horizontal={true} renderItem={({index, item})=><EachAnimeCard id={item?.id} image={item?.image} data={item} name={item?.title} status={item?.status} genres={item?.genres} key={item.id} navigation={navigation}/>}/>
  </>
})

import { memo } from "react";
import { FlatList } from "react-native";
import { EachAnimeCard } from "../Global/EachAnimeCard";

export const DisplaySearchResult = memo(({navigation, data}) => {
  return (
    <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={data}  renderItem={({ item, index })=>(
      <EachAnimeCard
        key={index}
        image={item?.image}
        name={item?.title}
        status={item?.status}
        genres={item?.genres}
        data={item}
        id={item.id}
        navigation={navigation}
      />)}/>
  );
});

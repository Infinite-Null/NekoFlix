import { memo } from "react";
import { FlatList, View } from "react-native";
import { EachAnimeCard } from "../../Global/EachAnimeCard";
import { PlainText } from "../../Global/PlainText";

export const DisplaySearchResult = memo(({navigation, data}) => {
  return (
    <FlatList ListEmptyComponent={<View style={{flex:1,alignItems:"center",justifyContent:"center", paddingTop:20}}>
      <PlainText text={"No anime found 🙃"}/>
    </View>} showsVerticalScrollIndicator={false} numColumns={2} data={data}  renderItem={({ item, index })=>(
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

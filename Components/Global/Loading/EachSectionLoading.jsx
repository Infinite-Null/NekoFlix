import { FlatList, StyleSheet } from "react-native";
import { ShimmerLoadingEachAnime } from "./ShimmerLoadingEachAnime";

export const EachSectionLoading = () => {
  const value = [1,2,3,4]
  const stylesheet = StyleSheet.create({
    scrollViewStyle:{
      gap:10,
      paddingHorizontal:10,
    },
  })
  return (
    <FlatList data={value} horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={20000} contentContainerStyle={stylesheet.scrollViewStyle} renderItem={()=><ShimmerLoadingEachAnime/>}/>
  );
};

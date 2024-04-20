import { memo} from "react";
import { Dimensions, View } from "react-native";
import { EachMangaCard } from "./EachMangaCard";
import SimpleLoading from "../Global/Loading/SimpleLoading";
import { EachHeaderSection } from "../Global/EachHeaderSection";
import { useNavigation } from "@react-navigation/native";

export const MangaDisplayContainer = memo(({showRank, title,loading, data}) => {
  const navigation = useNavigation()
  const { width } = Dimensions.get('window');

  return (
  <>
    <EachHeaderSection title={title} showViewAll={true} loading={loading} OnPress={()=>{
      navigation.navigate("ViewAllManga",{showRank, title, data})
    }}/>
    {!loading && <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
      {data.slice(0,6).map((item,i) => <EachMangaCard key={i} id={item.id} image={item.cover} slug={item.slug} name={item.title} rank={showRank ? i + 1 : null}/>)}
    </View>}
    {loading && <SimpleLoading containerStyle={{height:(width / 2.2) * 2}}/>}
  </>
  );
});

import { memo, useCallback, useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { EachMangaCard } from "./EachMangaCard";
import { GetMangaPageData } from "../../Api/MangaData";
import SimpleLoading from "../Global/Loading/SimpleLoading";
import { EachHeaderSection } from "./Home/EachHeaderSection";

export const MangaDisplayContainer = memo(({section, showRank, title}) => {
  const [data, setData] = useState([]);
  const { width } = Dimensions.get('window');
  const [loading, setLoading] = useState(true);
  const getData = useCallback(async ()=>{
   try {
     const result = await GetMangaPageData(section)
     setData(result)
   } catch (e) {
     console.log("error in getting manga data for " + section,e);
   } finally {
     setLoading(false)
   }
  },[])
  useEffect(()=>{
    getData()
  },[])
  return (
  <>
    <EachHeaderSection title={title} showViewAll={true}/>
    {!loading && <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
      {data.slice(0,6).map((item,i) => <EachMangaCard key={i} id={item.id} image={item.image} name={item.name} rank={showRank ? i + 1 : null}/>)}
    </View>}
    {loading && <SimpleLoading containerStyle={{height:(width / 2.2) * 2}}/>}
  </>
  );
});

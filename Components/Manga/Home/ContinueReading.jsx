import { memo, useEffect, useState } from "react";
import { getContinueReading } from "../../../LocalStorage/ContinueReadingManga";
import { EachMangaCard } from "../EachMangaCard";
import { FlatList } from "react-native";
import { EachHeaderSection } from "../../Global/EachHeaderSection";
import { useNavigation } from "@react-navigation/native";

export const ContinueReading = memo(() => {
  const [Data, setData] = useState([]);
  const navigation = useNavigation()
  async function getContinueReadingData(){
    const result = await getContinueReading()
    setData(result)
  }
  useEffect(()=>{
    getContinueReadingData()
  },[])
  return (
    <>
      {Data.length > 0 &&  <>
        <EachHeaderSection title={"Continue Reading"} showViewAll={true} OnPress={()=>{
          const data = Data.map((e)=>{
            return {
              id:e.id,
              cover:e.image,
              title:e.name,
              slug:e.slug,
            }
          })
          navigation.navigate("ViewAllManga",{showRank:false, title:"Continue Reading", data})
        }}/>
        <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:13, flexDirection:"row"}} data={Data} horizontal={true} renderItem={({item})=><EachMangaCard key={item.index} name={item.name} id={item.id} slug={item.slug} image={item.image}/>}/>
      </>}
    </>
  );
});

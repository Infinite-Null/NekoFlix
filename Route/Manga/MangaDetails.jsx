import { MainWrapper } from "../../Layout/MainWrapper";
import { MangaTopHeader } from "../../Components/Manga/MangaDetails/MangaTopHeader";
import { Spacer } from "../../Components/Global/Spacer";
import { MangaDescription } from "../../Components/Manga/MangaDetails/MangaDescription";
import { ChaptersDetails } from "../../Components/Manga/MangaDetails/ChaptersDetails";
import { ScrollView } from "react-native";
import { FormatMangaLinks } from "../../Utils/FormatMangaLinks";
import { RecommendedManga } from "../../Components/Manga/MangaDetails/RecommendedManga";
import { useCallback, useEffect, useState } from "react";
import { GetMangaChapters, GetMangaDetails } from "../../Api/MangaData";
import { FullScreenLoading } from "../../Components/Manga/Loading/FullScreenLoading";
export const MangaDetails = ({route}) => {
 const {id, slug, image, name} = route.params
 const [Loading, setLoading] = useState(true);
 const [MangaData, setMangaData] = useState({});
 const [ChaptersData, setChaptersData] = useState([]);
 const GetData = useCallback(async ()=>{
  try {
   const promises = [GetMangaDetails(id, slug), GetMangaChapters(id, slug)]
   const data = await Promise.all(promises)
   setMangaData(data[0])
   setChaptersData(data[1])
  } catch (e) {
   console.log(e)
  } finally {
    setLoading(false)
  }
  return
 },[])

 useEffect(() => {
  GetData()
 }, []);
 return <MainWrapper>
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}}>
   <MangaTopHeader image={FormatMangaLinks.getMangaCover(image, id)} name={name} geners={MangaData?.main_manga?.genres ?? []}/>
   {Loading && <FullScreenLoading />}
   {!Loading && <>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <MangaDescription views={MangaData?.main_manga?.views_count ?? 0} chapters={MangaData?.main_manga?.chapters_count ?? 0} description={MangaData?.main_manga?.desc ?? ""}/>
      <Spacer/>
      <Spacer/>
     <ChaptersDetails id={id} slug={slug}  image={FormatMangaLinks.getMangaCover(image, id)} data={ChaptersData} />
      <Spacer/>
     <Spacer/>
     <RecommendedManga manga={MangaData?.best_to_read_next?.manga}/>
   </>}
  </ScrollView>
 </MainWrapper>
};

import { memo, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  getMangaCurrentReadingChapter,
  setMangaCurrentReadingChapter,
} from "../../../LocalStorage/EachMangaChaptersStatus";
import { EachButton } from "../EachButton";
import Entypo from "react-native-vector-icons/Entypo";

export const ResumeAndRead = memo(({id, ChaptersData, slug}) => {
  const [currentReading, setCurrentReading] = useState(false);
  const navigation = useNavigation()
  const getCurrentReadingChapter = async () => {
    try {
      const value = await getMangaCurrentReadingChapter(id);
      setCurrentReading(value)
    } catch (e) {
      console.warn("error in search history", e)
    }
  }
  async function setCurrentChapter(ChapterId,ChapterSlug){
    try {
      await  setMangaCurrentReadingChapter(id,ChapterId,slug,ChapterSlug)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getCurrentReadingChapter()
  }, []);
  return (
    <>
      {currentReading &&  <EachButton
        Onpress={()=>{
          if (currentReading.chapterId && currentReading.chapterSlug){
            navigation.push("MangaChaptersViewer",{id:currentReading.chapterId, slug:currentReading.chapterSlug, MangaSlug:slug, MangaId:id})
          }
        }}
        title={"Resume"}
        icon={<Entypo name={"controller-play"}
                      color={"black"}
                      size={20}/>}/>}
      {!currentReading && ChaptersData.length > 0 &&  <EachButton
        Onpress={()=>{
          const ChaptersDataReversed = [...ChaptersData].reverse()
          const temp = {}
          temp.chapterId = ChaptersDataReversed[0].id
          temp.chapterSlug = ChaptersDataReversed[0].slug
          setCurrentReading(temp)
          setCurrentChapter(ChaptersDataReversed[0].id,ChaptersDataReversed[0].slug)
          navigation.push("MangaChaptersViewer",{id:ChaptersDataReversed[0].id, slug:ChaptersDataReversed[0].slug, MangaSlug:slug, MangaId:id})
        }}
        title={"Read"}
        icon={<Entypo name={"book"}
                      color={"black"}
                      size={20}/>}/>}
    </>
  );
});

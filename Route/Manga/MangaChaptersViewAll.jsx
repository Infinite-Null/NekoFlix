import { MainWrapper } from "../../Layout/MainWrapper";
import { useCallback, useState } from "react";
import { ModalOption } from "../../Components/Manga/MangaChapterViewAll/ModalOption";
import { SearchAndHeading } from "../../Components/Manga/MangaChapterViewAll/SearchAndHeading";
import { ListChapters } from "../../Components/Manga/MangaChapterViewAll/ListChapters";

export const MangaChaptersViewAll = ({route}) => {
  const {data, image, id, slug} = route.params
  const [ModalVisible, setModalVisible] = useState(false);
  const [Ascending, setAscending] = useState(true);
  const [ChapterSearchText, setChapterSearchText] = useState("");
  const updateAscending = useCallback((value)=>setAscending(()=>value),[])
  const updateModalVisible = useCallback((value)=>setModalVisible(value),[])
  const updateChapterSearchText = useCallback((value)=>setChapterSearchText(value),[])
  return (
    <MainWrapper>
      <ModalOption Ascending={Ascending} ModalVisible={ModalVisible} updateAscending={updateAscending} updateModalVisible={updateModalVisible}/>
      <SearchAndHeading updateModalVisible={updateModalVisible} updateChapterSearchText={updateChapterSearchText}/>
      <ListChapters data={data.reverse()} image={image} accending={Ascending} SearchText={ChapterSearchText}/>
    </MainWrapper>
  );
};

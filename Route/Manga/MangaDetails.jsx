import { MainWrapper } from "../../Layout/MainWrapper";
import { MangaTopHeader } from "../../Components/Manga/MangaDetails/MangaTopHeader";
import { Spacer } from "../../Components/Global/Spacer";
import { MangaDescription } from "../../Components/Manga/MangaDetails/MangaDescription";
import { ChaptersDetails } from "../../Components/Manga/MangaDetails/ChaptersDetails";
import { ScrollView } from "react-native";
import { FormatMangaLinks } from "../../Utils/FormatMangaLinks";
import { RecommendedManga } from "../../Components/Manga/MangaDetails/RecommendedManga";
export const MangaDetails = ({route}) => {
 const {id, slug, image, name} = route.params
 const geners = [
  {
   "name": "Action",
   "slug": "action",
   "type": "genre"
  },
  {
   "name": "Adventure",
   "slug": "adventure",
   "type": "genre"
  },
  {
   "name": "Drama",
   "slug": "drama",
   "type": "genre"
  },
  {
   "name": "Fantasy",
   "slug": "fantasy",
   "type": "genre"
  },
  {
   "name": "Horror",
   "slug": "horror",
   "type": "genre"
  },
  {
   "name": "Mystery",
   "slug": "mystery",
   "type": "genre"
  },
  {
   "name": "Psychological",
   "slug": "psychological",
   "type": "genre"
  },
  {
   "name": "Thriller",
   "slug": "thriller",
   "type": "genre"
  }
 ]
 const manga = {
  "id": 2862,
  "title": "Transcension Academy",
  "slug": "transcension-academy",
  "alt_titles": [],
  "authors": [],
  "artists": [],
  "demographic": [],
  "contents": [],
  "themes": [],
  "formats": [],
  "genres": [],
  "all_genres": [],
  "pubstatus": [],
  "lang_name": "Korean",
  "lang_code": "kr",
  "flag": "kr",
  "desc": null,
  "published": 1,
  "views_count": 682730,
  "bookmarks_count": 607,
  "chapters_count": 105,
  "comments_count": null,
  "users_rated_count": null,
  "rating": 10,
  "cover": "manga_2862-5479003300.png",
  "sub_covers": null,
  "first_chapter": "{\"id\":252864,\"chapter_number\":\"0.0\",\"slug\":\"0\"}",
  "last_chapter_number": "0",
  "last_chapter_slug": null,
  "last_chapter_created_at": "2024-04-17T12:35:33.545962Z",
  "is_bookmarked": false,
  "all_ch_read": null
 }
 return <MainWrapper>
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}}>
   <MangaTopHeader image={FormatMangaLinks.getMangaCover(image, id)} name={name} geners={geners}/>
   {/*<FullScreenLoading/>*/}
   <Spacer/>
   <Spacer/>
   <Spacer/>
   <Spacer/>
   <Spacer/>
   <MangaDescription views={100} chapters={200} description={"Mankind discovered the essence of the human soul, Edeya, and were achieving materialization.\nSociety was built around Edeya, which was invulnerable to conventional weapons. Humanity started to place all their focus into the combat power of Edeya.\nPark Jinsong, the main character, possessed an F-rank soul and F-rank combat power. After the introduction of a poor military program to his high school and the Edeya rank system, Park Jinsong became one of the weak, and suffered under his peers’ contempt for 10 years…\nHowever, in reality, the Edeya he had awakened was actually the S-rank “Absolute Killing Intent”.\nPark Jinsong was greatly disturbed by the fact that the essence of his soul revolved around the thought of killing others, and continued to live his life while thinking of himself as a worthless F-rank.\nWill Park Jinsong, with a soul for killing, be able to get his killing intent under control and prove that there are no ranks to one’s soul?\n\n\nWebtoon Teaser"}/>
   <Spacer/>
   <Spacer/>
   <ChaptersDetails id={id} slug={slug}  image={FormatMangaLinks.getMangaCover(image, id)}/>
    <Spacer/>
   <Spacer/>
    <RecommendedManga manga={manga}/>
  </ScrollView>
 </MainWrapper>
};

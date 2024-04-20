import { MainWrapper } from "../../Layout/MainWrapper";
import { SearchBar } from "../../Components/Manga/Home/SearchBar";
import Animated, { FadeInDown } from "react-native-reanimated";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { useCallback, useEffect, useState } from "react";
import { GetSearchManga } from "../../Api/MangaData";
import { FullScreenLoading } from "../../Components/Manga/Loading/FullScreenLoading";
import { Spacer } from "../../Components/Global/Spacer";
import { EachMangaCard } from "../../Components/Manga/EachMangaCard";
import { Dimensions, FlatList } from "react-native";

export const SearchPageManga = () => {
  const width = Dimensions.get("window").width;
  const [SearchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [ApiQuery, setApiQuery] = useState("");
  const [Loading, setLoading] = useState(false);
  const getSearchResult = useCallback(
    async (term) => {
     try {
        setLoading(true);
        const result = await GetSearchManga(term);
       console.log(result);
        setSearchResult(result.data);
     } catch (e) {
       console.log("error in getting search result");
     } finally {
        setLoading(false);
     }
    },
    [],
  );
  useEffect(() => {
     if (ApiQuery){
       getSearchResult(ApiQuery)
     } else {
       setSearchResult([])
     }
  }, [ApiQuery]);
  useEffect(() => {
    const timeoutId = setTimeout(()=>setApiQuery(query), 450)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [query]);
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Animated.View entering={FadeInDown}>
          <SearchBar showIcon={true} placeholder={"Search for manga"} autoFocus={true} onChangeText={(text)=>{
            setQuery(text)
          }}/>
        </Animated.View>
      </PaddingConatiner>
      <Spacer/>
      {Loading && <FullScreenLoading />}
      {!Loading && <PaddingConatiner>
        <FlatList numColumns={3} showsVerticalScrollIndicator={false} data={SearchResult}
                  contentContainerStyle={{ justifyContent: "center", gap: 2, paddingBottom: 80 }}
                  renderItem={({ item, index }) => {
                    if (index < 20) {
                      return <Animated.View entering={FadeInDown.delay((index < 20) ? (index * 40) : (0))}
                                            style={{ marginHorizontal: width / 90 }}>
                        <EachMangaCard key={index} id={item.id} image={item.cover} slug={item.slug} name={item.title} />
                      </Animated.View>;
                    } else {
                      return  <EachMangaCard key={index} id={item.id} image={item.cover} slug={item.slug} name={item.title} />
                    }
                  }} />
      </PaddingConatiner>}
    </MainWrapper>
  );
};

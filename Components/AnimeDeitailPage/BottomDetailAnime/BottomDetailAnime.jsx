import { CharacterDetails } from "./CharacterDetails/CharacterDetails";
import { memo, useCallback, useEffect, useState } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import { Heading } from "../../Global/Heading";
import { Spacer } from "../../Global/Spacer";
import { EpisodesDetails } from "./EpisodesDetails/EpisodesDetails";
import { MoreLikeThis } from "./MoreLikeThisSection/MoreLikeThis";
import { DescriptionWithTrailer } from "../DescriptionWithTrailer";
import * as React from "react";
import SimpleLoading from "../../Global/Loading/SimpleLoading";
import { getAnimeEpisodes, getAnimeInfo } from "../../../Api/AnimeData";
import { SpaceBetween } from "../../../Layout/SpaceBetween";
import { SubDubSwitcher } from "./EpisodesDetails/SubDubSwitcher";

export const BottomDetailAnime = memo(({id, data}) => {
  const [Trailer, setTrailer] = useState({});
  const [Description, setDescription] = useState("");
  const [Characters, setCharacters] = useState([]);
  const [Recommendations, setRecommendations] = useState([]);
  const [AnimeDataLoading, setAnimeDataLoading] = useState(true);
  const [Episodes, setEpisodes] = useState([]);
  const [EpisodesLoading, setEpisodesLoading] = useState(true);
  const [isSub, setIsSub] = useState(true);
  const getAnimeData = useCallback(
    async () => {
      try {
        const animeData = await getAnimeInfo(id);
        const {trailer, description, characters, recommendations} = animeData
        setTrailer(trailer);
        setDescription(description);
        setCharacters(characters);
        setRecommendations(recommendations);
      } catch (e) {
        console.log(e + "In BottomDetailAnime");
      } finally {
        setAnimeDataLoading(false);
      }
    }, []);

  const getEpisodes = useCallback(
    async () => {
     try {
       const episodes = await getAnimeEpisodes(id);
       setEpisodes(episodes);
     } catch (e) {
       console.log(e + "In BottomDetailAnime");
     } finally {
       setEpisodesLoading(false);
     }
    }, []);


  useEffect(()=>{
    getAnimeData();
    getEpisodes();
  },[])
  return (
    <>
      {!AnimeDataLoading && <>
        <DescriptionWithTrailer description={Description} trailer={Trailer?.id} id={id} data={data}/>
        <CharacterDetails characters={Characters} />
        <Spacer />
        <PaddingConatiner>
          <SpaceBetween>
            <Heading text={"Episodes"} />
            <SubDubSwitcher isSub={isSub} setIsSub={setIsSub}/>
          </SpaceBetween>
        </PaddingConatiner>
        <Spacer/>
        <EpisodesDetails data={data} isSub={isSub} isLoading={EpisodesLoading} links={Episodes} description={Description}/>
        <Spacer />
        <PaddingConatiner><Heading text={"More Like This"} /></PaddingConatiner>
        <MoreLikeThis  recommended={Recommendations} />
        <Spacer />
      </>}
      {AnimeDataLoading && <SimpleLoading />}
    </>
  );
});

import * as React from 'react';
import { Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { EachCrousel } from "./EachCrousel";
import FormatRating from "../../../Utils/FormatRating";
import { memo } from "react";
import { CrouselLoading } from "../../Global/Loading/CrouselLoading";

function Crousel({isLoading}) {
  const width = Dimensions.get('window').width;
  const data = [
    {
      image:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
      title: {
        "romaji": "Shingeki no Kyojin",
        "english": "Attack on Titan",
        "native": "進撃の巨人",
        "userPreferred": "Shingeki no Kyojin",
      },
      cover:"https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
      genres: [
        "Action",
        "Drama",
        "Fantasy",
        "Mystery",
      ],
      trailer: {
        "id": "luYOt2-c2TI",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/luYOt2-c2TI/hqdefault.jpg",
        "thumbnailHash": "hash",
      },
      rating: 84,
    },{
      image:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
      title: {
        "romaji": "Kimetsu no Yaiba",
        "english": "Demon Slayer: Kimetsu no Yaiba",
        "native": "鬼滅の刃",
        "userPreferred": "Kimetsu no Yaiba",
      },
      cover:"https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
      genres: [
        "Action",
        "Adventure",
        "Drama",
        "Fantasy",
        "Supernatural",
      ],
      trailer: {
        "id": "6vMuWuWlW4I",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/6vMuWuWlW4I/hqdefault.jpg",
        "thumbnailHash": "hash",
      },
      rating: 83,
    },{
      image:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",
      title: {
        "romaji": "DEATH NOTE",
        "english": "Death Note",
        "native": "DEATH NOTE",
        "userPreferred": "DEATH NOTE",
      },
      cover:"https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
      genres: [
        "Mystery",
        "Psychological",
        "Supernatural",
        "Thriller",
      ],
      trailer: {
        "id": "NlJZ-YgAt-c",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/NlJZ-YgAt-c/hqdefault.jpg",
        "thumbnailHash": "hash",
      },
      rating: 74,
    },
  ]
  return (
    <>
      {isLoading && <CrouselLoading/>}
      {!isLoading &&  <Carousel
        windowSize={3}
        loop
        width={width}
        height={width / 1.2}
        autoPlay={true}
        autoPlayInterval={2000}
        data={data}
        snapEnabled={true}
        scrollAnimationDuration={1000}
        renderItem={({item,index}) => {
          return <EachCrousel title={item?.title?.english ?? "No Title"}
                              image={item?.image ?? ""}
                              backgroundImage={item?.cover ?? ""}
                              geners={item?.genres ?? []}
                              trailer={item?.trailer?.id}
                              ratings={FormatRating(item?.rating ?? 0)}
          />
        }}
      />}
    </>
  );
}

export default memo(Crousel);

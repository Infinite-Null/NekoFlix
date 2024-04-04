import { memo } from "react";
import { FlatList } from "react-native";
import { EachAnimeCard } from "../../../Global/EachAnimeCard";

export const MoreLikeThis = memo(function MoreLikeThis({navigation}){
  const recommended =[
      {
        "id": 160,
        "malId": 160,
        "title": {
          "romaji": "Ima, Soko ni Iru Boku",
          "english": "Now and Then, Here and There",
          "native": "今、そこにいる僕",
          "userPreferred": "Ima, Soko ni Iru Boku"
        },
        "status": "Completed",
        "episodes": 13,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx160-t5rKPAhZoznO.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/160-LbiEyoQyuDaL.jpg",
        "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/160-LbiEyoQyuDaL.jpg",
        "rating": 73,
        "type": "TV"
      },
    {
      "id": 101348,
      "malId": 37521,
      "title": {
        "romaji": "VINLAND SAGA",
        "english": "Vinland Saga",
        "native": "ヴィンランド・サガ",
        "userPreferred": "VINLAND SAGA"
      },
      "status": "Completed",
      "episodes": 24,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101348-msJS8z91mG0P.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101348-pivKKffCAwAY.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101348-pivKKffCAwAY.jpg",
      "rating": 87,
      "type": "TV"
    },
    {
      "id": 33,
      "malId": 33,
      "title": {
        "romaji": "Kenpuu Denki Berserk",
        "english": "Berserk",
        "native": "剣風伝奇ベルセルク",
        "userPreferred": "Kenpuu Denki Berserk"
      },
      "status": "Completed",
      "episodes": 25,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx33-CTtcRjqe7UnM.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/33-g7HwYRVm0ZkN.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/33-g7HwYRVm0ZkN.jpg",
      "rating": 83,
      "type": "TV"
    },
    {
      "id": 21196,
      "malId": 28623,
      "title": {
        "romaji": "Koutetsujou no Kabaneri",
        "english": "Kabaneri of the Iron Fortress",
        "native": "甲鉄城のカバネリ",
        "userPreferred": "Koutetsujou no Kabaneri"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21196-2PfPfIDrxKki.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21196-0aQqkn5XWmGo.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21196-0aQqkn5XWmGo.jpg",
      "rating": 70,
      "type": "TV"
    },
    {
      "id": 20829,
      "malId": 26243,
      "title": {
        "romaji": "Owari no Seraph",
        "english": "Seraph of the End: Vampire Reign",
        "native": "終わりのセラフ",
        "userPreferred": "Owari no Seraph"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20829-PYKVvgUqJVUK.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20829-1BRrVJAxlEKT.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20829-1BRrVJAxlEKT.jpg",
      "rating": 73,
      "type": "TV"
    },
    {
      "id": 20849,
      "malId": 27631,
      "title": {
        "romaji": "GOD EATER",
        "english": "God Eater",
        "native": "GOD EATER",
        "userPreferred": "GOD EATER"
      },
      "status": "Completed",
      "episodes": 13,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20849-TvJpY8iLEcYG.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20849-w4KnIo3OfMx1.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20849-w4KnIo3OfMx1.jpg",
      "rating": 67,
      "type": "TV"
    },
    {
      "id": 101759,
      "malId": 37779,
      "title": {
        "romaji": "Yakusoku no Neverland",
        "english": "The Promised Neverland",
        "native": "約束のネバーランド",
        "userPreferred": "Yakusoku no Neverland"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101759-G9I2ymYrFS8o.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
      "rating": 83,
      "type": "TV"
    },
    {
      "id": 20605,
      "malId": 22319,
      "title": {
        "romaji": "Tokyo Ghoul",
        "english": "Tokyo Ghoul",
        "native": "東京喰種 トーキョーグール",
        "userPreferred": "Tokyo Ghoul"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
      "rating": 75,
      "type": "TV"
    },
    {
      "id": 30,
      "malId": 30,
      "title": {
        "romaji": "Shin Seiki Evangelion",
        "english": "Neon Genesis Evangelion",
        "native": "新世紀エヴァンゲリオン",
        "userPreferred": "Shin Seiki Evangelion"
      },
      "status": "Completed",
      "episodes": 26,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx30-wmNoX3m2qTzz.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/30-gEMoHHIqxDgN.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/30-gEMoHHIqxDgN.jpg",
      "rating": 83,
      "type": "TV"
    },
    {
      "id": 98707,
      "malId": 35557,
      "title": {
        "romaji": "Houseki no Kuni",
        "english": "Land of the Lustrous",
        "native": "宝石の国",
        "userPreferred": "Houseki no Kuni"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98707-XbNWbL1VRihA.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98707-ZcFGfUAS4YwK.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98707-ZcFGfUAS4YwK.jpg",
      "rating": 83,
      "type": "TV"
    },
    {
      "id": 1818,
      "malId": 1818,
      "title": {
        "romaji": "CLAYMORE",
        "english": "Claymore",
        "native": "CLAYMORE",
        "userPreferred": "CLAYMORE"
      },
      "status": "Completed",
      "episodes": 26,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1818-XX52j6ECeO7O.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1818-7Nt2HYxVIxtA.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1818-7Nt2HYxVIxtA.jpg",
      "rating": 73,
      "type": "TV"
    },
    {
      "id": 5114,
      "malId": 5114,
      "title": {
        "romaji": "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
        "english": "Fullmetal Alchemist: Brotherhood",
        "native": "鋼の錬金術師 FULLMETAL ALCHEMIST",
        "userPreferred": "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST"
      },
      "status": "Completed",
      "episodes": 64,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-Dilr312jctdJ.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
      "rating": 90,
      "type": "TV"
    },
    {
      "id": 20729,
      "malId": 24405,
      "title": {
        "romaji": "World Trigger",
        "english": "World Trigger",
        "native": "ワールドトリガー",
        "userPreferred": "World Trigger"
      },
      "status": "Completed",
      "episodes": 73,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20729-DnBXnUxFon1B.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20729-yIc4suclOeOA.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20729-yIc4suclOeOA.jpg",
      "rating": 72,
      "type": "TV"
    },
    {
      "id": 21341,
      "malId": 31580,
      "title": {
        "romaji": "Ajin",
        "english": "AJIN: Demi-Human",
        "native": "亜人",
        "userPreferred": "Ajin"
      },
      "status": "Completed",
      "episodes": 13,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21341-Pyc7SkMEuGsl.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21341-v415m6GrpeZY.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21341-v415m6GrpeZY.jpg",
      "rating": 71,
      "type": "TV"
    },
    {
      "id": 109586,
      "malId": 38663,
      "title": {
        "romaji": "Mushikago no Cagaster",
        "english": "Cagaster of an Insect Cage",
        "native": "虫籠のカガステル",
        "userPreferred": "Mushikago no Cagaster"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109586-kCEXqdiTMX0j.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109586-kCEXqdiTMX0j.png",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109586-kCEXqdiTMX0j.png",
      "rating": 62,
      "type": "ONA"
    },
    {
      "id": 20623,
      "malId": 22535,
      "title": {
        "romaji": "Kiseijuu: Sei no Kakuritsu",
        "english": "Parasyte -the maxim-",
        "native": "寄生獣 セイの格率",
        "userPreferred": "Kiseijuu: Sei no Kakuritsu"
      },
      "status": "Completed",
      "episodes": 24,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20623-rVoHgF3Apo7P.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20623-xb9PPf8rGOsG.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20623-xb9PPf8rGOsG.jpg",
      "rating": 81,
      "type": "TV"
    },
    {
      "id": 20993,
      "malId": 28927,
      "title": {
        "romaji": "Owari no Seraph: Nagoya Kessen-hen",
        "english": "Seraph of the End: Battle in Nagoya",
        "native": "終わりのセラフ　名古屋決戦編",
        "userPreferred": "Owari no Seraph: Nagoya Kessen-hen"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20993-c34UTma2bCcv.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20993-pZacVGnE1F2L.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20993-pZacVGnE1F2L.jpg",
      "rating": 74,
      "type": "TV"
    },
    {
      "id": 1575,
      "malId": 1575,
      "title": {
        "romaji": "Code Geass: Hangyaku no Lelouch",
        "english": "Code Geass: Lelouch of the Rebellion",
        "native": "コードギアス 反逆のルルーシュ",
        "userPreferred": "Code Geass: Hangyaku no Lelouch"
      },
      "status": "Completed",
      "episodes": 25,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1575-dG7vMMZMF3wk.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1575.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1575.jpg",
      "rating": 84,
      "type": "TV"
    },
    {
      "id": 20613,
      "malId": 22199,
      "title": {
        "romaji": "Akame ga Kill!",
        "english": "Akame ga Kill!",
        "native": "アカメが斬る！",
        "userPreferred": "Akame ga Kill!"
      },
      "status": "Completed",
      "episodes": 24,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20613-4VGGPacciJBL.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20613-CoEQF4qKiWDX.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20613-CoEQF4qKiWDX.jpg",
      "rating": 72,
      "type": "TV"
    },
    {
      "id": 110353,
      "malId": 40056,
      "title": {
        "romaji": "Deca-Dence",
        "english": "DECA-DENCE",
        "native": "デカダンス",
        "userPreferred": "Deca-Dence"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110353-XGYSsii7qJeK.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110353-ZKkmemQSFP7L.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110353-ZKkmemQSFP7L.jpg",
      "rating": 71,
      "type": "TV"
    },
    {
      "id": 777,
      "malId": 777,
      "title": {
        "romaji": "HELLSING OVA",
        "english": "Hellsing Ultimate",
        "native": "HELLSING OVA",
        "userPreferred": "HELLSING OVA"
      },
      "status": "Completed",
      "episodes": 10,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx777-wviqUSUoSXAl.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/777-XzPjBZdSRtDT.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/777-XzPjBZdSRtDT.jpg",
      "rating": 81,
      "type": "OVA"
    },
    {
      "id": 18679,
      "malId": 18679,
      "title": {
        "romaji": "Kill la Kill",
        "english": "Kill la Kill",
        "native": "キルラキル",
        "userPreferred": "Kill la Kill"
      },
      "status": "Completed",
      "episodes": 24,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx18679-zE07Y4SFaOiO.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18679-rpC99hxBxaMn.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18679-rpC99hxBxaMn.jpg",
      "rating": 79,
      "type": "TV"
    },
    {
      "id": 97986,
      "malId": 34599,
      "title": {
        "romaji": "Made in Abyss",
        "english": "Made in Abyss",
        "native": "メイドインアビス",
        "userPreferred": "Made in Abyss"
      },
      "status": "Completed",
      "episodes": 13,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97986-tXLonOO0vhHb.jpg",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97986-C55UnbJKB7ZF.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97986-C55UnbJKB7ZF.jpg",
      "rating": 85,
      "type": "TV"
    },
    {
      "id": 2001,
      "malId": 2001,
      "title": {
        "romaji": "Tengen Toppa Gurren Lagann",
        "english": "Gurren Lagann",
        "native": "天元突破グレンラガン",
        "userPreferred": "Tengen Toppa Gurren Lagann"
      },
      "status": "Completed",
      "episodes": 27,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2001-7cvz7Jf8viMT.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2001-3eWhvkau8NV3.jpg",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2001-3eWhvkau8NV3.jpg",
      "rating": 85,
      "type": "TV"
    },
    {
      "id": 21613,
      "malId": 32615,
      "title": {
        "romaji": "Youjo Senki",
        "english": "Saga of Tanya the Evil",
        "native": "幼女戦記",
        "userPreferred": "Youjo Senki"
      },
      "status": "Completed",
      "episodes": 12,
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21613-TsDxB6jqa9fW.png",
      "imageHash": "hash",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21613-FGAqKSTvfxuA.png",
      "coverHash": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21613-FGAqKSTvfxuA.png",
      "rating": 77,
      "type": "TV"
    }
]
  return <>
    <FlatList data={recommended} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10, gap:10}} horizontal={true} renderItem={({index, item})=><EachAnimeCard id={item?.id} image={item?.image} data={item} name={item?.title} status={item?.status} genres={item?.genres} key={item.id} navigation={navigation}/>}/>
  </>
})

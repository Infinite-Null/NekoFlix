import { ScrollView} from "react-native";
import * as React from "react";
import { TopDetail } from "../Components/AnimeDeitailPage/TopDetail";
import { DescriptionWithTrailer } from "../Components/AnimeDeitailPage/DescriptionWithTrailer";
import { BottomDetailAnime } from "../Components/AnimeDeitailPage/BottomDetailAnime/BottomDetailAnime";

export const AnimeDetailPage = ({route, navigation}) => {
  const {genres,image,name, data, id } = route.params
  const {rating, cover} = data
  const animeData = {
    "id": "16498",
    "title": {
      "romaji": "Shingeki no Kyojin",
      "english": "Attack on Titan",
      "native": "進撃の巨人"
    },
    "malId": 16498,
    "trailer": {
      "id": "luYOt2-c2TI",
      "site": "youtube",
      "thumbnail": "https://i.ytimg.com/vi/luYOt2-c2TI/hqdefault.jpg",
      "thumbnailHash": "hash"
    },
    "synonyms": [
      "SnK",
      "AoT",
      "Ataque a los Titanes",
      "Ataque dos Titãs",
      "L'Attacco dei Giganti",
      "מתקפת הטיטאנים",
      "进击的巨人",
      "L’Attaque des Titans",
      "الهجوم على العمالقة",
      "ผ่าพิภพไททัน",
      "حمله به تایتان",
      "Ataque de Titãs",
      "Atak Tytanów"
    ],
    "isLicensed": true,
    "isAdult": false,
    "countryOfOrigin": "JP",
    "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg",
    "imageHash": "hash",
    "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
    "coverHash": "hash",
    "description": "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ",
    "status": "Completed",
    "releaseDate": 2013,
    "totalEpisodes": 25,
    "currentEpisode": 25,
    "rating": 84,
    "duration": 24,
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "studios": [
      "Wit Studio"
    ],
    "season": "SPRING",
    "popularity": 756348,
    "type": "TV",
    "startDate": {
      "year": 2013,
      "month": 4,
      "day": 7
    },
    "endDate": {
      "year": 2013,
      "month": 9,
      "day": 28
    },
    "recommendations": [
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
    ],
    "characters": [
      {
        "id": 40881,
        "role": "MAIN",
        "name": {
          "first": "Mikasa",
          "last": "Ackerman",
          "full": "Mikasa Ackerman",
          "native": "ミカサ・アッカーマン",
          "userPreferred": "Mikasa Ackerman"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 100142,
            "language": "Japanese",
            "name": {
              "first": "Yui",
              "last": "Ishikawa",
              "full": "Yui Ishikawa",
              "native": "石川由依",
              "userPreferred": "Yui Ishikawa"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100142-k6RP0HzXffUG.png",
            "imageHash": "hash"
          },
          {
            "id": 96804,
            "language": "English",
            "name": {
              "first": "Trina",
              "last": "Nishimura",
              "full": "Trina Nishimura",
              "native": null,
              "userPreferred": "Trina Nishimura"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96804-0OKQgacznkZ4.png",
            "imageHash": "hash"
          },
          {
            "id": 110291,
            "language": "Korean",
            "name": {
              "first": "Chea Eun",
              "last": "Han",
              "full": "Chea Eun Han",
              "native": "채언 한",
              "userPreferred": "Chea Eun Han"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/15291.jpg",
            "imageHash": "hash"
          },
          {
            "id": 162285,
            "language": "Italian",
            "name": {
              "first": "Elena",
              "last": "Perino",
              "full": "Elena Perino",
              "native": null,
              "userPreferred": "Elena Perino"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n162285-slcfFvmUkPe1.png",
            "imageHash": "hash"
          },
          {
            "id": 96662,
            "language": "Spanish",
            "name": {
              "first": "Ana",
              "last": "Lobo",
              "full": "Ana Lobo",
              "native": "Ana Mylhán Lobo Peralta",
              "userPreferred": "Ana Lobo"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96662-shb9mPUzkp2T.png",
            "imageHash": "hash"
          },
          {
            "id": 197179,
            "language": "Portuguese",
            "name": {
              "first": "Mayara",
              "last": "Stefane",
              "full": "Mayara Stefane",
              "native": null,
              "userPreferred": "Mayara Stefane"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n197179-8LdIskXBQQJC.jpg",
            "imageHash": "hash"
          },
          {
            "id": 104886,
            "language": "French",
            "name": {
              "first": "Nathalie",
              "last": "Bienaimé",
              "full": "Nathalie Bienaimé",
              "native": null,
              "userPreferred": "Nathalie Bienaimé"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104886-1XdG9QHBeeIE.jpg",
            "imageHash": "hash"
          },
          {
            "id": 105701,
            "language": "German",
            "name": {
              "first": "Nicole",
              "last": "Hannak",
              "full": "Nicole Hannak",
              "native": null,
              "userPreferred": "Nicole Hannak"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/10701.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 40882,
        "role": "MAIN",
        "name": {
          "first": "Eren",
          "last": "Yeager",
          "full": "Eren Yeager",
          "native": "エレン・イェーガー",
          "userPreferred": "Eren Yeager"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95672,
            "language": "Japanese",
            "name": {
              "first": "Yuuki",
              "last": "Kaji",
              "full": "Yuuki Kaji",
              "native": "梶裕貴",
              "userPreferred": "Yuuki Kaji"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95672-RN4nm0OFwCyU.png",
            "imageHash": "hash"
          },
          {
            "id": 95732,
            "language": "English",
            "name": {
              "first": "Bryce",
              "last": "Papenbrook",
              "full": "Bryce Papenbrook",
              "native": null,
              "userPreferred": "Bryce Papenbrook"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/732.jpg",
            "imageHash": "hash"
          },
          {
            "id": 109757,
            "language": "Korean",
            "name": {
              "first": "Won Hyeong",
              "last": "Choi",
              "full": "Won Hyeong Choi",
              "native": "원형 최",
              "userPreferred": "Won Hyeong Choi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/14757.jpg",
            "imageHash": "hash"
          },
          {
            "id": 137561,
            "language": "Italian",
            "name": {
              "first": "Alessandro",
              "last": "Campaiola",
              "full": "Alessandro Campaiola",
              "native": null,
              "userPreferred": "Alessandro Campaiola"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n137561-rdMXsdya6WJS.jpg",
            "imageHash": "hash"
          },
          {
            "id": 182216,
            "language": "Spanish",
            "name": {
              "first": "Miguel Ángel",
              "last": "Leal ",
              "full": "Miguel Ángel Leal ",
              "native": null,
              "userPreferred": "Miguel Ángel Leal "
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182216-NYnHyG9gPhEw.png",
            "imageHash": "hash"
          },
          {
            "id": 153463,
            "language": "Portuguese",
            "name": {
              "first": "Lucas",
              "last": "Almeida",
              "full": "Lucas Almeida",
              "native": null,
              "userPreferred": "Lucas Almeida"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n153463-MF7Z63vMJ47o.jpg",
            "imageHash": "hash"
          },
          {
            "id": 162288,
            "language": "French",
            "name": {
              "first": "Bastien",
              "last": "Bourlé",
              "full": "Bastien Bourlé",
              "native": null,
              "userPreferred": "Bastien Bourlé"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n162288-yqr2S6BgqRuZ.jpg",
            "imageHash": "hash"
          },
          {
            "id": 116461,
            "language": "German",
            "name": {
              "first": "Max",
              "last": "Felder",
              "full": "Max Felder",
              "native": null,
              "userPreferred": "Max Felder"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116461-xc0OwQs5gClw.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 46494,
        "role": "MAIN",
        "name": {
          "first": "Armin",
          "last": "Arlert",
          "full": "Armin Arlert",
          "native": "アルミン・アルレルト",
          "userPreferred": "Armin Arlert"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b46494-g7xYYuBtYPnO.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95158,
            "language": "Japanese",
            "name": {
              "first": "Marina",
              "last": "Inoue",
              "full": "Marina Inoue",
              "native": "井上麻里奈",
              "userPreferred": "Marina Inoue"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95158-OLhgs8zv5xsp.jpg",
            "imageHash": "hash"
          },
          {
            "id": 96047,
            "language": "English",
            "name": {
              "first": "Jessie James",
              "last": "Grelle",
              "full": "Jessie James Grelle",
              "native": null,
              "userPreferred": "Jessie James Grelle"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96047-E9nBWn3YL0Tn.jpg",
            "imageHash": "hash"
          },
          {
            "id": 109929,
            "language": "Korean",
            "name": {
              "first": "Seo Yeong",
              "last": "Kim",
              "full": "Seo Yeong Kim",
              "native": "서영 김",
              "userPreferred": "Seo Yeong Kim"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/14929.jpg",
            "imageHash": "hash"
          },
          {
            "id": 154493,
            "language": "Italian",
            "name": {
              "first": "Gaia",
              "last": "Bolognesi",
              "full": "Gaia Bolognesi",
              "native": null,
              "userPreferred": "Gaia Bolognesi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n154493-VqKkeF0N6GNZ.png",
            "imageHash": "hash"
          },
          {
            "id": 182198,
            "language": "Spanish",
            "name": {
              "first": "Héctor",
              "last": "Ireta de Alba",
              "full": "Héctor Ireta de Alba",
              "native": "Héctor Cuevas Ireta de Alba",
              "userPreferred": "Héctor Ireta de Alba"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182198-MWWfG9lMVddi.png",
            "imageHash": "hash"
          },
          {
            "id": 197181,
            "language": "Portuguese",
            "name": {
              "first": "Pedro",
              "last": "Volpato",
              "full": "Pedro Volpato",
              "native": null,
              "userPreferred": "Pedro Volpato"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n197181-nfs4vEHAahR1.jpg",
            "imageHash": "hash"
          },
          {
            "id": 102303,
            "language": "French",
            "name": {
              "first": "Adrien",
              "last": "Solis",
              "full": "Adrien Solis",
              "native": null,
              "userPreferred": "Adrien Solis"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/7303.jpg",
            "imageHash": "hash"
          },
          {
            "id": 119591,
            "language": "German",
            "name": {
              "first": "Christian",
              "last": "Zeiger",
              "full": "Christian Zeiger",
              "native": null,
              "userPreferred": "Christian Zeiger"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119591-Cqkp0MiISslJ.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 45887,
        "role": "SUPPORTING",
        "name": {
          "first": "Sasha",
          "last": "Blouse",
          "full": "Sasha Blouse",
          "native": "サシャ・ブラウス",
          "userPreferred": "Sasha Blouse"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b45887-QPtJH0KwqthW.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95034,
            "language": "Japanese",
            "name": {
              "first": "Yuu",
              "last": "Kobayashi",
              "full": "Yuu Kobayashi",
              "native": "小林ゆう",
              "userPreferred": "Yuu Kobayashi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95034-AwobjrcmkMi9.png",
            "imageHash": "hash"
          },
          {
            "id": 114123,
            "language": "English",
            "name": {
              "first": "Ashly",
              "last": "Burch",
              "full": "Ashly Burch",
              "native": null,
              "userPreferred": "Ashly Burch"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n114123-5c8l39OmgbcD.png",
            "imageHash": "hash"
          },
          {
            "id": 109927,
            "language": "Korean",
            "name": {
              "first": "Seon Hye",
              "last": "Kim",
              "full": "Seon Hye Kim",
              "native": "선혜 김",
              "userPreferred": "Seon Hye Kim"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/14927.jpg",
            "imageHash": "hash"
          },
          {
            "id": 103464,
            "language": "Italian",
            "name": {
              "first": "Valentina",
              "last": "Favazza",
              "full": "Valentina Favazza",
              "native": null,
              "userPreferred": "Valentina Favazza"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n103464-SHKSTy5Cg3QQ.png",
            "imageHash": "hash"
          },
          {
            "id": 184400,
            "language": "Spanish",
            "name": {
              "first": "Jennifer",
              "last": "Medel",
              "full": "Jennifer Medel",
              "native": null,
              "userPreferred": "Jennifer Medel"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n184400-7hfzD7giOuSA.jpg",
            "imageHash": "hash"
          },
          {
            "id": 197407,
            "language": "Portuguese",
            "name": {
              "first": "Ana Paula",
              "last": "Cadamuro",
              "full": "Ana Paula Cadamuro",
              "native": null,
              "userPreferred": "Ana Paula Cadamuro"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n197407-wfKPhn1S9Zhs.jpg",
            "imageHash": "hash"
          },
          {
            "id": 116893,
            "language": "French",
            "name": {
              "first": "Marie",
              "last": "Nonnenmacher",
              "full": "Marie Nonnenmacher",
              "native": null,
              "userPreferred": "Marie Nonnenmacher"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/21893.jpg",
            "imageHash": "hash"
          },
          {
            "id": 135848,
            "language": "German",
            "name": {
              "first": "Lina Rabea",
              "last": "Mohr",
              "full": "Lina Rabea Mohr",
              "native": null,
              "userPreferred": "Lina Rabea Mohr"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135848-4wAMo64bxxfO.png",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 71479,
        "role": "SUPPORTING",
        "name": {
          "first": "Ymir",
          "last": null,
          "full": "Ymir",
          "native": "ユミル",
          "userPreferred": "Ymir"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b71479-huCD908XIdqv.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95504,
            "language": "Japanese",
            "name": {
              "first": "Saki",
              "last": "Fujita",
              "full": "Saki Fujita",
              "native": "藤田咲",
              "userPreferred": "Saki Fujita"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95504-pDIKpd8t2EYU.png",
            "imageHash": "hash"
          },
          {
            "id": 120732,
            "language": "English",
            "name": {
              "first": "Elizabeth",
              "last": "Maxwell",
              "full": "Elizabeth Maxwell",
              "native": null,
              "userPreferred": "Elizabeth Maxwell"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/120732-DiTLevCL0Q3c.jpg",
            "imageHash": "hash"
          },
          {
            "id": 232593,
            "language": "Italian",
            "name": {
              "first": "Mattea",
              "last": "Serpelloni",
              "full": "Mattea Serpelloni",
              "native": null,
              "userPreferred": "Mattea Serpelloni"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 191980,
            "language": "Spanish",
            "name": {
              "first": "Alina",
              "last": "Galindo",
              "full": "Alina Galindo",
              "native": "Alina Odethe Galindo Villagómez",
              "userPreferred": "Alina Galindo"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n191980-qA07DwWacTGG.png",
            "imageHash": "hash"
          },
          {
            "id": 198077,
            "language": "Portuguese",
            "name": {
              "first": "Ana Maria",
              "last": "Morais",
              "full": "Ana Maria Morais",
              "native": null,
              "userPreferred": "Ana Maria Morais"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 102594,
            "language": "German",
            "name": {
              "first": "Esra",
              "last": "Vural",
              "full": "Esra Vural",
              "native": null,
              "userPreferred": "Esra Vural"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102594-zXkmqWQsZsQJ.png",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 62501,
        "role": "SUPPORTING",
        "name": {
          "first": "Petra",
          "last": "Ral",
          "full": "Petra Ral",
          "native": "ペトラ・ラル",
          "userPreferred": "Petra Ral"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/n62501-CfTtAAgs64nE.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 97123,
            "language": "Japanese",
            "name": {
              "first": "Natsuki",
              "last": "Aikawa",
              "full": "Natsuki Aikawa",
              "native": "相川奈都姫",
              "userPreferred": "Natsuki Aikawa"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/2123.jpg",
            "imageHash": "hash"
          },
          {
            "id": 95313,
            "language": "English",
            "name": {
              "first": "Caitlin",
              "last": "Glass",
              "full": "Caitlin Glass",
              "native": null,
              "userPreferred": "Caitlin Glass"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95313-zK3WpeNtACvm.jpg",
            "imageHash": "hash"
          },
          {
            "id": 156992,
            "language": "Italian",
            "name": {
              "first": "Gemma",
              "last": "Donati",
              "full": "Gemma Donati",
              "native": null,
              "userPreferred": "Gemma Donati"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 193996,
            "language": "Spanish",
            "name": {
              "first": "Pamela",
              "last": "Cruz",
              "full": "Pamela Cruz",
              "native": null,
              "userPreferred": "Pamela Cruz"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n193996-XCzRzPYHOMKe.png",
            "imageHash": "hash"
          },
          {
            "id": 197182,
            "language": "Portuguese",
            "name": {
              "first": "Mari",
              "last": "Haruno",
              "full": "Mari Haruno",
              "native": null,
              "userPreferred": "Mari Haruno"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n197182-mDKkEWvcDi9j.jpg",
            "imageHash": "hash"
          },
          {
            "id": 163030,
            "language": "French",
            "name": {
              "first": "Caroline",
              "last": "Combes",
              "full": "Caroline Combes",
              "native": null,
              "userPreferred": "Caroline Combes"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n163030-PFC47QCuVGBH.jpg",
            "imageHash": "hash"
          },
          {
            "id": 126222,
            "language": "German",
            "name": {
              "first": "Kristina",
              "last": "Tietz",
              "full": "Kristina Tietz",
              "native": null,
              "userPreferred": "Kristina Tietz"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/126222-egK9Tv1JBrj9.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 84327,
        "role": "SUPPORTING",
        "name": {
          "first": "Bart",
          "last": null,
          "full": "Bart",
          "native": "バルト",
          "userPreferred": "Bart"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b84327-Wg2P1FSDecGc.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 103996,
            "language": "Japanese",
            "name": {
              "first": "Kousuke",
              "last": "Takaguchi",
              "full": "Kousuke Takaguchi",
              "native": "高口公介",
              "userPreferred": "Kousuke Takaguchi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/8996.jpg",
            "imageHash": "hash"
          },
          {
            "id": 100431,
            "language": "English",
            "name": {
              "first": "Barry",
              "last": "Yandell",
              "full": "Barry Yandell",
              "native": null,
              "userPreferred": "Barry Yandell"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100431-Mcs0gD7P2ANr.jpg",
            "imageHash": "hash"
          },
          {
            "id": 174635,
            "language": "Italian",
            "name": {
              "first": "Bruno",
              "last": "Alessandro",
              "full": "Bruno Alessandro",
              "native": null,
              "userPreferred": "Bruno Alessandro"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n174635-EWK5yJiF62aZ.png",
            "imageHash": "hash"
          },
          {
            "id": 200036,
            "language": "Spanish",
            "name": {
              "first": "Jesse",
              "last": "Conde",
              "full": "Jesse Conde",
              "native": null,
              "userPreferred": "Jesse Conde"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n200036-6nYRfW1UqfRS.png",
            "imageHash": "hash"
          },
          {
            "id": 275358,
            "language": "Portuguese",
            "name": {
              "first": "Paulo",
              "last": "Carvalho",
              "full": "Paulo Carvalho",
              "native": null,
              "userPreferred": "Paulo Carvalho"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n275358-APXSiJbKwpgT.png",
            "imageHash": "hash"
          },
          {
            "id": 144804,
            "language": "German",
            "name": {
              "first": "André",
              "last": "Beyer",
              "full": "André Beyer",
              "native": null,
              "userPreferred": "André Beyer"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n144804-6UHA3RmcVEzC.png",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 62479,
        "role": "SUPPORTING",
        "name": {
          "first": "Marco",
          "last": "Bott",
          "full": "Marco Bott",
          "native": "マルコ・ボット",
          "userPreferred": "Marco Bott"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b62479-mYcTkU1RXymL.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 110743,
            "language": "Japanese",
            "name": {
              "first": "Ryouta",
              "last": "Oosaka",
              "full": "Ryouta Oosaka",
              "native": "逢坂良太",
              "userPreferred": "Ryouta Oosaka"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n110743-k2SgQwU0JD33.png",
            "imageHash": "hash"
          },
          {
            "id": 111641,
            "language": "English",
            "name": {
              "first": "Austin",
              "last": "Tindle",
              "full": "Austin Tindle",
              "native": null,
              "userPreferred": "Austin Tindle"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111641-DbiOaZhYsNsi.jpg",
            "imageHash": "hash"
          },
          {
            "id": 183615,
            "language": "Italian",
            "name": {
              "first": "Daniele",
              "last": "Giuliani",
              "full": "Daniele Giuliani",
              "native": null,
              "userPreferred": "Daniele Giuliani"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 191979,
            "language": "Spanish",
            "name": {
              "first": "Óscar",
              "last": "López",
              "full": "Óscar López",
              "native": null,
              "userPreferred": "Óscar López"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n191979-VyqtLc8Psxyv.png",
            "imageHash": "hash"
          },
          {
            "id": 197328,
            "language": "Portuguese",
            "name": {
              "first": "Thiago ",
              "last": "Cordova",
              "full": "Thiago  Cordova",
              "native": "Thiago Córdova",
              "userPreferred": "Thiago  Cordova"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n197328-cVtjSGbN9FhW.jpg",
            "imageHash": "hash"
          },
          {
            "id": 102219,
            "language": "German",
            "name": {
              "first": "Konrad",
              "last": "Bösherz",
              "full": "Konrad Bösherz",
              "native": null,
              "userPreferred": "Konrad Bösherz"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102219-Od3pasyGCIbf.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 84309,
        "role": "SUPPORTING",
        "name": {
          "first": "Moses",
          "last": null,
          "full": "Moses",
          "native": "モーゼス",
          "userPreferred": "Moses"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b84309-ntK7TKP6RkPe.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 117423,
            "language": "Japanese",
            "name": {
              "first": "Takuya",
              "last": "Masumoto",
              "full": "Takuya Masumoto",
              "native": "増元拓也",
              "userPreferred": "Takuya Masumoto"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/22423.jpg",
            "imageHash": "hash"
          },
          {
            "id": 106722,
            "language": "English",
            "name": {
              "first": "Jeff",
              "last": "Johnson",
              "full": "Jeff Johnson",
              "native": null,
              "userPreferred": "Jeff Johnson"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106722-oBph5DalCgKm.jpg",
            "imageHash": "hash"
          },
          {
            "id": 184396,
            "language": "Spanish",
            "name": {
              "first": "Héctor",
              "last": "Mena",
              "full": "Héctor Mena",
              "native": null,
              "userPreferred": "Héctor Mena"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n184396-xWboaE1KVAY3.jpg",
            "imageHash": "hash"
          },
          {
            "id": 179920,
            "language": "Portuguese",
            "name": {
              "first": "Rodolfo",
              "last": "Novaes",
              "full": "Rodolfo Novaes",
              "native": "Rodolfo Novaes da Silva",
              "userPreferred": "Rodolfo Novaes"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n179920-na8WBFpfCzX7.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 71691,
        "role": "SUPPORTING",
        "name": {
          "first": "Gunther",
          "last": "Schultz",
          "full": "Gunther Schultz",
          "native": "グンタ・シュルツ",
          "userPreferred": "Gunther Schultz"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b71691-9xxv0NFB2CWm.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 96814,
            "language": "Japanese",
            "name": {
              "first": "Kouzou",
              "last": "Mito",
              "full": "Kouzou Mito",
              "native": "三戸耕三",
              "userPreferred": "Kouzou Mito"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/1814.jpg",
            "imageHash": "hash"
          },
          {
            "id": 95822,
            "language": "English",
            "name": {
              "first": "Brett",
              "last": "Weaver",
              "full": "Brett Weaver",
              "native": null,
              "userPreferred": "Brett Weaver"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95822-NsMPkQBkrH7i.jpg",
            "imageHash": "hash"
          },
          {
            "id": 103527,
            "language": "Italian",
            "name": {
              "first": "Marco",
              "last": "Baroni",
              "full": "Marco Baroni",
              "native": null,
              "userPreferred": "Marco Baroni"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 202439,
            "language": "Spanish",
            "name": {
              "first": "Óscar",
              "last": "de la Rosa",
              "full": "Óscar de la Rosa",
              "native": null,
              "userPreferred": "Óscar de la Rosa"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n202439-5ZKaSVJioOCJ.png",
            "imageHash": "hash"
          },
          {
            "id": 301903,
            "language": "Portuguese",
            "name": {
              "first": "Leandro",
              "last": "Machado",
              "full": "Leandro Machado",
              "native": "Leandro Machado Costa",
              "userPreferred": "Leandro Machado"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n301903-5CVduUFmApFX.jpg",
            "imageHash": "hash"
          },
          {
            "id": 135846,
            "language": "German",
            "name": {
              "first": "Nick",
              "last": "Forsberg",
              "full": "Nick Forsberg",
              "native": null,
              "userPreferred": "Nick Forsberg"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135846-2ptkaVYIxdQX.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 71125,
        "role": "SUPPORTING",
        "name": {
          "first": "Darius",
          "last": "Zackly",
          "full": "Darius Zackly",
          "native": "ダリス・ザックレー",
          "userPreferred": "Darius Zackly"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b71125-XXymqijVoYzV.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 105185,
            "language": "Japanese",
            "name": {
              "first": "Hideaki",
              "last": "Tezuka",
              "full": "Hideaki Tezuka",
              "native": "手塚秀彰",
              "userPreferred": "Hideaki Tezuka"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n105185-JPuDW9dX28ed.png",
            "imageHash": "hash"
          },
          {
            "id": 95201,
            "language": "English",
            "name": {
              "first": "John",
              "last": "Swasey",
              "full": "John Swasey",
              "native": null,
              "userPreferred": "John Swasey"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95201-cas6XbtZmMay.jpg",
            "imageHash": "hash"
          },
          {
            "id": 96189,
            "language": "Italian",
            "name": {
              "first": "Dario",
              "last": "Penne",
              "full": "Dario Penne",
              "native": null,
              "userPreferred": "Dario Penne"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96189-azI9yLnwmNp4.png",
            "imageHash": "hash"
          },
          {
            "id": 198388,
            "language": "Spanish",
            "name": {
              "first": "Rubén",
              "last": "Moya",
              "full": "Rubén Moya",
              "native": null,
              "userPreferred": "Rubén Moya"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n198388-Z27L49zsFzYf.png",
            "imageHash": "hash"
          },
          {
            "id": 102351,
            "language": "Portuguese",
            "name": {
              "first": "Gilberto",
              "last": "Baroli",
              "full": "Gilberto Baroli",
              "native": null,
              "userPreferred": "Gilberto Baroli"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/7351.jpg",
            "imageHash": "hash"
          },
          {
            "id": 135844,
            "language": "German",
            "name": {
              "first": "Reinhard",
              "last": "Scheunemann",
              "full": "Reinhard Scheunemann",
              "native": null,
              "userPreferred": "Reinhard Scheunemann"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135844-Erpqj1eBiHl8.png",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 131455,
        "role": "SUPPORTING",
        "name": {
          "first": "Jurgen",
          "last": null,
          "full": "Jurgen",
          "native": "ユルゲン",
          "userPreferred": "Jurgen"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b131455-8WPESzF24pcm.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 116237,
            "language": "Japanese",
            "name": {
              "first": "Kazuhiro",
              "last": "Fusegawa",
              "full": "Kazuhiro Fusegawa",
              "native": "布施川一寛",
              "userPreferred": "Kazuhiro Fusegawa"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/21237.jpg",
            "imageHash": "hash"
          },
          {
            "id": 133023,
            "language": "German",
            "name": {
              "first": "Marc",
              "last": "Bluhm",
              "full": "Marc Bluhm",
              "native": null,
              "userPreferred": "Marc Bluhm"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 131990,
        "role": "SUPPORTING",
        "name": {
          "first": "Gunther no Haha",
          "last": "",
          "full": "Gunther no Haha",
          "native": "グンタの母",
          "userPreferred": "Gunther no Haha"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/n131990-v6rILcgW9MQa.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 104647,
            "language": "Japanese",
            "name": {
              "first": "Yoshino",
              "last": "Ohtori",
              "full": "Yoshino Ohtori",
              "native": "鳳芳野",
              "userPreferred": "Yoshino Ohtori"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/9647.jpg",
            "imageHash": "hash"
          },
          {
            "id": 248556,
            "language": "Portuguese",
            "name": {
              "first": "Marcela",
              "last": "de Barros",
              "full": "Marcela de Barros",
              "native": null,
              "userPreferred": "Marcela de Barros"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n248556-okUwrHshQG3e.png",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 137286,
        "role": "SUPPORTING",
        "name": {
          "first": "Zoku 1",
          "last": null,
          "full": "Zoku 1",
          "native": "賊１",
          "userPreferred": "Zoku 1"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b137286-K7DBiibnqjKq.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 101724,
            "language": "Japanese",
            "name": {
              "first": "Gou",
              "last": "Shinomiya",
              "full": "Gou Shinomiya",
              "native": "四宮豪",
              "userPreferred": "Gou Shinomiya"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101724-MEUzOW3BRvy2.png",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 46492,
        "role": "SUPPORTING",
        "name": {
          "first": "Hannes",
          "last": null,
          "full": "Hannes",
          "native": "ハンネス",
          "userPreferred": "Hannes"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b46492-5kRaMLDCVD0B.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95063,
            "language": "Japanese",
            "name": {
              "first": "Keiji",
              "last": "Fujiwara",
              "full": "Keiji Fujiwara",
              "native": "藤原啓治",
              "userPreferred": "Keiji Fujiwara"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95063-xAsEUzspuLMG.jpg",
            "imageHash": "hash"
          },
          {
            "id": 104777,
            "language": "English",
            "name": {
              "first": "David",
              "last": "Wald",
              "full": "David Wald",
              "native": null,
              "userPreferred": "David Wald"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/9777.jpg",
            "imageHash": "hash"
          },
          {
            "id": 141602,
            "language": "Italian",
            "name": {
              "first": "Luigi",
              "last": "Ferraro",
              "full": "Luigi Ferraro",
              "native": null,
              "userPreferred": "Luigi Ferraro"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n141602-S8Mv1rHI1Hkf.jpg",
            "imageHash": "hash"
          },
          {
            "id": 191981,
            "language": "Spanish",
            "name": {
              "first": "Víctor",
              "last": "Delgado",
              "full": "Víctor Delgado",
              "native": null,
              "userPreferred": "Víctor Delgado"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n191981-fD8Rpk1ANG5D.png",
            "imageHash": "hash"
          },
          {
            "id": 109485,
            "language": "Portuguese",
            "name": {
              "first": "Thiago",
              "last": "Zambrano",
              "full": "Thiago Zambrano",
              "native": null,
              "userPreferred": "Thiago Zambrano"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n109485-pS7szXNmPvXd.jpg",
            "imageHash": "hash"
          },
          {
            "id": 145366,
            "language": "German",
            "name": {
              "first": "Tim",
              "last": "Moeseritz",
              "full": "Tim Moeseritz",
              "native": null,
              "userPreferred": "Tim Moeseritz"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n145366-39sIVSK8g4iB.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 84307,
        "role": "SUPPORTING",
        "name": {
          "first": "Hugo",
          "last": null,
          "full": "Hugo",
          "native": "フーゴ",
          "userPreferred": "Hugo"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b84307-faKVhlw386q7.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95583,
            "language": "Japanese",
            "name": {
              "first": "Akio",
              "last": "Suyama",
              "full": "Akio Suyama",
              "native": "章央陶山",
              "userPreferred": "Akio Suyama"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95583-pcq7rkDjxRTl.jpg",
            "imageHash": "hash"
          },
          {
            "id": 114069,
            "language": "English",
            "name": {
              "first": "Tyson",
              "last": "Rinehart",
              "full": "Tyson Rinehart",
              "native": null,
              "userPreferred": "Tyson Rinehart"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/19069.jpg",
            "imageHash": "hash"
          },
          {
            "id": 154287,
            "language": "Italian",
            "name": {
              "first": "Davide",
              "last": "Marzi",
              "full": "Davide Marzi",
              "native": null,
              "userPreferred": "Davide Marzi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 250117,
            "language": "Spanish",
            "name": {
              "first": "Omar",
              "last": "Sánchez",
              "full": "Omar Sánchez",
              "native": null,
              "userPreferred": "Omar Sánchez"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n250117-PKj6xtp2b7vW.png",
            "imageHash": "hash"
          },
          {
            "id": 198592,
            "language": "Portuguese",
            "name": {
              "first": "Celso",
              "last": "Henrique",
              "full": "Celso Henrique",
              "native": null,
              "userPreferred": "Celso Henrique"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n198592-0Bswj6EM3eaD.png",
            "imageHash": "hash"
          },
          {
            "id": 117365,
            "language": "German",
            "name": {
              "first": "Jesco",
              "last": "Wirthgen",
              "full": "Jesco Wirthgen",
              "native": null,
              "userPreferred": "Jesco Wirthgen"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/22365.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 84311,
        "role": "SUPPORTING",
        "name": {
          "first": "Moses no Haha",
          "last": null,
          "full": "Moses no Haha",
          "native": "モーゼスの母",
          "userPreferred": "Moses no Haha"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/n84311-iVwsDOzTSyvJ.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 104032,
            "language": "Japanese",
            "name": {
              "first": "Kyouko",
              "last": "Terase",
              "full": "Kyouko Terase",
              "native": "寺瀬今日子",
              "userPreferred": "Kyouko Terase"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104032-T2WQPMRn19IB.png",
            "imageHash": "hash"
          },
          {
            "id": 95252,
            "language": "English",
            "name": {
              "first": "Linda",
              "last": "Young",
              "full": "Linda Young",
              "native": null,
              "userPreferred": "Linda Young"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95252-hFYzYV28b5qI.png",
            "imageHash": "hash"
          },
          {
            "id": 205847,
            "language": "Spanish",
            "name": {
              "first": "Martha",
              "last": "Rave",
              "full": "Martha Rave",
              "native": null,
              "userPreferred": "Martha Rave"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n205847-E8dyLAopcs1U.png",
            "imageHash": "hash"
          },
          {
            "id": 140006,
            "language": "German",
            "name": {
              "first": "Maria",
              "last": "Jany",
              "full": "Maria Jany",
              "native": null,
              "userPreferred": "Maria Jany"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 84341,
        "role": "SUPPORTING",
        "name": {
          "first": "Mikasa no Haha",
          "last": "",
          "full": "Mikasa no Haha",
          "native": "ミカサの母",
          "userPreferred": "Mikasa no Haha"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/n84341-o3ojpfHhp7o8.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 111223,
            "language": "Japanese",
            "name": {
              "first": "Yuuka",
              "last": "Hirose",
              "full": "Yuuka Hirose",
              "native": "広瀬有香",
              "userPreferred": "Yuuka Hirose"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/16223.jpg",
            "imageHash": "hash"
          },
          {
            "id": 95472,
            "language": "English",
            "name": {
              "first": "Colleen",
              "last": "Clinkenbeard",
              "full": "Colleen Clinkenbeard",
              "native": null,
              "userPreferred": "Colleen Clinkenbeard"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95472-fznpewUW95vm.jpg",
            "imageHash": "hash"
          },
          {
            "id": 300009,
            "language": "Italian",
            "name": {
              "first": "Daniela",
              "last": "Cavallini",
              "full": "Daniela Cavallini",
              "native": null,
              "userPreferred": "Daniela Cavallini"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 190705,
            "language": "Spanish",
            "name": {
              "first": "Diana",
              "last": "Huicochea",
              "full": "Diana Huicochea",
              "native": null,
              "userPreferred": "Diana Huicochea"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n190705-k5rZ5906OgsB.jpg",
            "imageHash": "hash"
          },
          {
            "id": 114958,
            "language": "German",
            "name": {
              "first": "Gundi",
              "last": "Eberhard",
              "full": "Gundi Eberhard",
              "native": null,
              "userPreferred": "Gundi Eberhard"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/19958.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 84317,
        "role": "SUPPORTING",
        "name": {
          "first": "Franz",
          "last": "Kefka",
          "full": "Franz Kefka",
          "native": "フランツ・ケフカ",
          "userPreferred": "Franz Kefka"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b84317-mIg4hGXJKhQt.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 117425,
            "language": "Japanese",
            "name": {
              "first": "Kenta",
              "last": "Ookuma",
              "full": "Kenta Ookuma",
              "native": "大隈健太",
              "userPreferred": "Kenta Ookuma"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/22425.jpg",
            "imageHash": "hash"
          },
          {
            "id": 129258,
            "language": "English",
            "name": {
              "first": "James",
              "last": "Chandler",
              "full": "James Chandler",
              "native": null,
              "userPreferred": "James Chandler"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 190701,
            "language": "Spanish",
            "name": {
              "first": "Román",
              "last": "Abreo",
              "full": "Román Abreo",
              "native": null,
              "userPreferred": "Román Abreo"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n190701-wXhUYwb65JSc.jpg",
            "imageHash": "hash"
          },
          {
            "id": 241156,
            "language": "Portuguese",
            "name": {
              "first": "Thiago",
              "last": "Marques",
              "full": "Thiago Marques",
              "native": null,
              "userPreferred": "Thiago Marques"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n241156-BHBy5iKNCAe1.jpg",
            "imageHash": "hash"
          },
          {
            "id": 140228,
            "language": "German",
            "name": {
              "first": "Amadeus",
              "last": "Strobl",
              "full": "Amadeus Strobl",
              "native": null,
              "userPreferred": "Amadeus Strobl"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n140228-QkcDFuPKFd9t.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 71687,
        "role": "SUPPORTING",
        "name": {
          "first": "Oluo",
          "last": "Bozard",
          "full": "Oluo Bozard",
          "native": "オルオ・ボザド",
          "userPreferred": "Oluo Bozard"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b71687-jd78w4orXonI.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95410,
            "language": "Japanese",
            "name": {
              "first": "Shinji",
              "last": "Kawada",
              "full": "Shinji Kawada",
              "native": "川田紳司",
              "userPreferred": "Shinji Kawada"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95410-AosJKUc7YZXE.jpg",
            "imageHash": "hash"
          },
          {
            "id": 101562,
            "language": "English",
            "name": {
              "first": "Christopher",
              "last": "Smith",
              "full": "Christopher Smith",
              "native": null,
              "userPreferred": "Christopher Smith"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/6562.jpg",
            "imageHash": "hash"
          },
          {
            "id": 159109,
            "language": "Italian",
            "name": {
              "first": "Sergio",
              "last": "Lucchetti",
              "full": "Sergio Lucchetti",
              "native": null,
              "userPreferred": "Sergio Lucchetti"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 182446,
            "language": "Spanish",
            "name": {
              "first": "Carlos",
              "last": "del Campo",
              "full": "Carlos del Campo",
              "native": "Carlos Nicolás Ramos del Campo",
              "userPreferred": "Carlos del Campo"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182446-LMMIsEqxraDi.png",
            "imageHash": "hash"
          },
          {
            "id": 241781,
            "language": "Portuguese",
            "name": {
              "first": "Adriano",
              "last": "Paixão",
              "full": "Adriano Paixão",
              "native": null,
              "userPreferred": "Adriano Paixão"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 181396,
            "language": "German",
            "name": {
              "first": "Tom",
              "last": "Radisch",
              "full": "Tom Radisch",
              "native": null,
              "userPreferred": "Tom Radisch"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 127681,
        "role": "SUPPORTING",
        "name": {
          "first": "Abel",
          "last": null,
          "full": "Abel",
          "native": "ゴーグル",
          "userPreferred": "Abel"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/n127681-9Xhk8VzIuKQ4.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 99761,
            "language": "Japanese",
            "name": {
              "first": "Kiyohito",
              "last": "Yoshikai",
              "full": "Kiyohito Yoshikai",
              "native": "吉開清人",
              "userPreferred": "Kiyohito Yoshikai"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n99761-Q9lm6KhwEZck.png",
            "imageHash": "hash"
          },
          {
            "id": 127682,
            "language": "English",
            "name": {
              "first": "Daman",
              "last": "Mills",
              "full": "Daman Mills",
              "native": null,
              "userPreferred": "Daman Mills"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n127682-J5tZnKTPfo5D.jpg",
            "imageHash": "hash"
          },
          {
            "id": 205846,
            "language": "Spanish",
            "name": {
              "first": "Javier",
              "last": "Sánchez",
              "full": "Javier Sánchez",
              "native": null,
              "userPreferred": "Javier Sánchez"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n205846-9j5VZ1IQ0nzw.png",
            "imageHash": "hash"
          },
          {
            "id": 174303,
            "language": "Portuguese",
            "name": {
              "first": "Roberto",
              "last": "Rocha",
              "full": "Roberto Rocha",
              "native": null,
              "userPreferred": "Roberto Rocha"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n174303-EyxMWzKIblve.jpg",
            "imageHash": "hash"
          },
          {
            "id": 181394,
            "language": "German",
            "name": {
              "first": "Alexander",
              "last": "Hauff",
              "full": "Alexander Hauff",
              "native": null,
              "userPreferred": "Alexander Hauff"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 131991,
        "role": "SUPPORTING",
        "name": {
          "first": "Oluo no Haha",
          "last": "",
          "full": "Oluo no Haha",
          "native": "オルオの母",
          "userPreferred": "Oluo no Haha"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/n131991-nW7ztKNllB8z.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95716,
            "language": "Japanese",
            "name": {
              "first": "Yuuki",
              "last": "Kodaira",
              "full": "Yuuki Kodaira",
              "native": "小平有希",
              "userPreferred": "Yuuki Kodaira"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95716-BDejHbIYkT7O.jpg",
            "imageHash": "hash"
          },
          {
            "id": 202529,
            "language": "Portuguese",
            "name": {
              "first": "Zodja",
              "last": "Pereira",
              "full": "Zodja Pereira",
              "native": null,
              "userPreferred": "Zodja Pereira"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 181395,
            "language": "German",
            "name": {
              "first": "Anja",
              "last": "Thiemann",
              "full": "Anja Thiemann",
              "native": null,
              "userPreferred": "Anja Thiemann"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 137284,
        "role": "SUPPORTING",
        "name": {
          "first": "Zoku 2",
          "last": null,
          "full": "Zoku 2",
          "native": "賊２",
          "userPreferred": "Zoku 2"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b137284-N6WzhrtSRLVL.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 137418,
            "language": "Japanese",
            "name": {
              "first": "Hiroki",
              "last": "Maeda",
              "full": "Hiroki Maeda",
              "native": "前田弘喜",
              "userPreferred": "Hiroki Maeda"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n137418-JbEZ0inshvpO.jpg",
            "imageHash": "hash"
          },
          {
            "id": 179920,
            "language": "Portuguese",
            "name": {
              "first": "Rodolfo",
              "last": "Novaes",
              "full": "Rodolfo Novaes",
              "native": "Rodolfo Novaes da Silva",
              "userPreferred": "Rodolfo Novaes"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n179920-na8WBFpfCzX7.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 71121,
        "role": "SUPPORTING",
        "name": {
          "first": "Hange",
          "last": "Zoe",
          "full": "Hange Zoe",
          "native": "ハンジ・ゾエ",
          "userPreferred": "Hange Zoe"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b71121-7R7CnQd3lHgt.png",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 95082,
            "language": "Japanese",
            "name": {
              "first": "Romi",
              "last": "Park",
              "full": "Romi Park",
              "native": "朴璐美",
              "userPreferred": "Romi Park"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95082-pNGbnYv4cHAK.png",
            "imageHash": "hash"
          },
          {
            "id": 96048,
            "language": "English",
            "name": {
              "first": "Jessica",
              "last": "Calvello",
              "full": "Jessica Calvello",
              "native": null,
              "userPreferred": "Jessica Calvello"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96048-jnCHXjbHtDMh.jpg",
            "imageHash": "hash"
          },
          {
            "id": 96182,
            "language": "Italian",
            "name": {
              "first": "Antonella",
              "last": "Baldini",
              "full": "Antonella Baldini",
              "native": null,
              "userPreferred": "Antonella Baldini"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/1182.jpg",
            "imageHash": "hash"
          },
          {
            "id": 104773,
            "language": "Spanish",
            "name": {
              "first": "Rossy",
              "last": "Aguirre",
              "full": "Rossy Aguirre",
              "native": null,
              "userPreferred": "Rossy Aguirre"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104773-PmfPC8nuPYGn.jpg",
            "imageHash": "hash"
          },
          {
            "id": 199394,
            "language": "Portuguese",
            "name": {
              "first": "Paola",
              "last": "Molinari",
              "full": "Paola Molinari",
              "native": null,
              "userPreferred": "Paola Molinari"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n199394-woYf7ea0SDcf.jpg",
            "imageHash": "hash"
          },
          {
            "id": 110555,
            "language": "German",
            "name": {
              "first": "Josephine",
              "last": "Schmidt",
              "full": "Josephine Schmidt",
              "native": null,
              "userPreferred": "Josephine Schmidt"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/15555.jpg",
            "imageHash": "hash"
          }
        ]
      },
      {
        "id": 46490,
        "role": "SUPPORTING",
        "name": {
          "first": "Annie",
          "last": "Leonhart",
          "full": "Annie Leonhart",
          "native": "アニ・レオンハート",
          "userPreferred": "Annie Leonhart"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/character/large/b46490-tan274Ifc1Jf.jpg",
        "imageHash": "hash",
        "voiceActors": [
          {
            "id": 100295,
            "language": "Japanese",
            "name": {
              "first": "Yuu",
              "last": "Shimamura",
              "full": "Yuu Shimamura",
              "native": "嶋村侑",
              "userPreferred": "Yuu Shimamura"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100295-d7CPqlz4jGaT.png",
            "imageHash": "hash"
          },
          {
            "id": 102993,
            "language": "English",
            "name": {
              "first": "Lauren",
              "last": "Landa",
              "full": "Lauren Landa",
              "native": null,
              "userPreferred": "Lauren Landa"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102993-gxDKjC1EvJ4S.jpg",
            "imageHash": "hash"
          },
          {
            "id": 165405,
            "language": "Italian",
            "name": {
              "first": "Chiara",
              "last": "Gioncardi",
              "full": "Chiara Gioncardi",
              "native": null,
              "userPreferred": "Chiara Gioncardi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            "imageHash": "hash"
          },
          {
            "id": 107400,
            "language": "Spanish",
            "name": {
              "first": "Georgina",
              "last": "Sánchez",
              "full": "Georgina Sánchez",
              "native": null,
              "userPreferred": "Georgina Sánchez"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107400-peQnahDFhfOc.png",
            "imageHash": "hash"
          },
          {
            "id": 197180,
            "language": "Portuguese",
            "name": {
              "first": "Maitê",
              "last": "Cunha",
              "full": "Maitê Cunha",
              "native": null,
              "userPreferred": "Maitê Cunha"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n197180-Nwhc1jh6wPLo.png",
            "imageHash": "hash"
          },
          {
            "id": 101135,
            "language": "German",
            "name": {
              "first": "Marieke",
              "last": "Oeffinger",
              "full": "Marieke Oeffinger",
              "native": null,
              "userPreferred": "Marieke Oeffinger"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/staff/large/6135.jpg",
            "imageHash": "hash"
          }
        ]
      }
    ],
    "color": "#f1a143",
    "relations": [
      {
        "id": 53390,
        "malId": 23390,
        "relationType": "ADAPTATION",
        "title": {
          "romaji": "Shingeki no Kyojin",
          "english": "Attack on Titan",
          "native": "進撃の巨人",
          "userPreferred": "Shingeki no Kyojin"
        },
        "status": "Completed",
        "episodes": null,
        "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx53390-1RsuABC34P9D.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/manga/banner/53390-6Uru5rrjh8zv.jpg",
        "coverHash": "hash",
        "rating": 84,
        "type": "MANGA"
      },
      {
        "id": 20691,
        "malId": 23775,
        "relationType": "ALTERNATIVE",
        "title": {
          "romaji": "Shingeki no Kyojin Zenpen: Guren no Yumiya",
          "english": "Attack on Titan Part I: Crimson Bow and Arrow",
          "native": "劇場版「進撃の巨人」前編～紅蓮の弓矢～",
          "userPreferred": "Shingeki no Kyojin Zenpen: Guren no Yumiya"
        },
        "status": "Completed",
        "episodes": 1,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20691-dnv0rkpbgBDJ.png",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20691-xKJkvnhezBb0.jpg",
        "coverHash": "hash",
        "rating": 75,
        "type": "MOVIE"
      },
      {
        "id": 20692,
        "malId": 23777,
        "relationType": "ALTERNATIVE",
        "title": {
          "romaji": "Shingeki no Kyojin Kouhen: Jiyuu no Tsubasa",
          "english": "Attack on Titan Part II: Wings of Freedom",
          "native": "劇場版「進撃の巨人」後編～自由の翼～",
          "userPreferred": "Shingeki no Kyojin Kouhen: Jiyuu no Tsubasa"
        },
        "status": "Completed",
        "episodes": 1,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20692-fSDEpfDtDg9u.png",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20692.jpg",
        "coverHash": "hash",
        "rating": 75,
        "type": "MOVIE"
      },
      {
        "id": 20958,
        "malId": 25777,
        "relationType": "SEQUEL",
        "title": {
          "romaji": "Shingeki no Kyojin 2",
          "english": "Attack on Titan Season 2",
          "native": "進撃の巨人２",
          "userPreferred": "Shingeki no Kyojin 2"
        },
        "status": "Completed",
        "episodes": 12,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",
        "coverHash": "hash",
        "rating": 84,
        "type": "TV"
      },
      {
        "id": 21281,
        "malId": 31374,
        "relationType": "SPIN_OFF",
        "title": {
          "romaji": "Shingeki! Kyojin Chuugakkou",
          "english": "Attack on Titan: Junior High",
          "native": "進撃！巨人中学校",
          "userPreferred": "Shingeki! Kyojin Chuugakkou"
        },
        "status": "Completed",
        "episodes": 12,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b21281-GwCKcZii6fVf.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n21281-NJqGktD33FWm.jpg",
        "coverHash": "hash",
        "rating": 70,
        "type": "TV"
      },
      {
        "id": 18397,
        "malId": 18397,
        "relationType": "SIDE_STORY",
        "title": {
          "romaji": "Shingeki no Kyojin OVA",
          "english": "Attack on Titan OVA",
          "native": "進撃の巨人 OVA",
          "userPreferred": "Shingeki no Kyojin OVA"
        },
        "status": "Completed",
        "episodes": 3,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18397-AnpwhLkSjYL1.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18397-rG4Vpg67Kr0j.jpg",
        "coverHash": "hash",
        "rating": 76,
        "type": "OVA"
      },
      {
        "id": 119113,
        "malId": 42091,
        "relationType": "SUMMARY",
        "title": {
          "romaji": "Shingeki no Kyojin: Chronicle",
          "english": "Attack on Titan ~Chronicle~",
          "native": "進撃の巨人 〜クロニクル〜",
          "userPreferred": "Shingeki no Kyojin: Chronicle"
        },
        "status": "Completed",
        "episodes": 1,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx119113-IzVI5oZ0og8O.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx119113-IzVI5oZ0og8O.jpg",
        "coverHash": "hash",
        "rating": 76,
        "type": "MOVIE"
      },
      {
        "id": 20811,
        "malId": 25781,
        "relationType": "PREQUEL",
        "title": {
          "romaji": "Shingeki no Kyojin Gaiden: Kuinaki Sentaku",
          "english": "Attack on Titan: No Regrets",
          "native": "進撃の巨人 外伝 悔いなき選択",
          "userPreferred": "Shingeki no Kyojin Gaiden: Kuinaki Sentaku"
        },
        "status": "Completed",
        "episodes": 2,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20811-IvXLdxZkYNcP.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20811-xIuYL1yGMT5S.jpg",
        "coverHash": "hash",
        "rating": 82,
        "type": "OVA"
      },
      {
        "id": 99634,
        "malId": 36106,
        "relationType": "SIDE_STORY",
        "title": {
          "romaji": "Shingeki no Kyojin: LOST GIRLS",
          "english": "Attack on Titan: Lost Girls",
          "native": "進撃の巨人 LOST GIRLS",
          "userPreferred": "Shingeki no Kyojin: LOST GIRLS"
        },
        "status": "Completed",
        "episodes": 3,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx99634-9u4hdvWwmC2s.png",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99634-m8hKbCnDL2ue.png",
        "coverHash": "hash",
        "rating": 76,
        "type": "OVA"
      },
      {
        "id": 19391,
        "malId": 19391,
        "relationType": "OTHER",
        "title": {
          "romaji": "Shingeki no Kyojin: Chimi Kyara Gekijou - Tondeke! Kunren Heidan",
          "english": "Attack on Titan Picture Drama",
          "native": "「進撃の巨人」ちみキャラ劇場\"とんでけ! 訓練兵団\"",
          "userPreferred": "Shingeki no Kyojin: Chimi Kyara Gekijou - Tondeke! Kunren Heidan"
        },
        "status": "Completed",
        "episodes": 9,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/19391.jpg",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/19391.jpg",
        "coverHash": "hash",
        "rating": 62,
        "type": "SPECIAL"
      },
      {
        "id": 143391,
        "malId": 43413,
        "relationType": "CHARACTER",
        "title": {
          "romaji": "Chiyuki no Fashion Check",
          "english": null,
          "native": "千雪のファッションチェック！",
          "userPreferred": "Chiyuki no Fashion Check"
        },
        "status": "Completed",
        "episodes": 9,
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143391-iFj8UKciDab3.png",
        "imageHash": "hash",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143391-iFj8UKciDab3.png",
        "coverHash": "hash",
        "rating": 49,
        "type": "ONA"
      }
    ]
  }
  const {trailer, description} = animeData
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <TopDetail name={name} image={image} rating={rating} genres={genres} cover={cover}/>
      <DescriptionWithTrailer description={description} trailer={trailer?.id}/>
      <BottomDetailAnime id={id} navigation={navigation}/>
    </ScrollView>
  );
};

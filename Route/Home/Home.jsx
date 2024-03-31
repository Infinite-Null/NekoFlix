import { MainWrapper } from "../../Layout/MainWrapper";
import Crousel from "../../Components/Home/TopCrousel/Crousel";
import { ScrollView } from "react-native";
import { Spacer } from "../../Components/Global/Spacer";
import { Sections } from "../../Components/Home/Sections/Sections";

export const Home = () => {
  const results = [
    {
      "id": "151807",
      "malId": 52299,
      "title": {
        "romaji": "Ore dake Level Up na Ken",
        "english": "Solo Leveling",
        "native": "俺だけレベルアップな件",
        "userPreferred": "Ore dake Level Up na Ken"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png",
      "imageHash": "hash",
      "trailer": {
        "id": "HkIKAnwLZCw",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/HkIKAnwLZCw/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.<br>\n<br>\n(Source: Crunchyroll) <br><br>",
      "status": "Completed",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg",
      "coverHash": "hash",
      "rating": 83,
      "releaseDate": 2024,
      "color": "#28aef1",
      "genres": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "totalEpisodes": 12,
      "duration": 24,
      "type": "TV"
    },
    {
      "id": "151970",
      "malId": 52347,
      "title": {
        "romaji": "Shangri-La Frontier",
        "english": "Shangri-La Frontier",
        "native": "シャングリラ・フロンティア",
        "userPreferred": "Shangri-La Frontier"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151970-qFKtRhOaSqa0.jpg",
      "imageHash": "hash",
      "trailer": {
        "id": "ZMpfkJiQrGg",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/ZMpfkJiQrGg/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": " \"When was the last time I played a game that wasn't crap?\" This is a world in the near future where games that use display screens are classified as retro. Anything that can't keep up with state-of-the-art VR technology is called a \"crap game,\" and you see a large number of crap games coming out. Those who devote their lives to clearing these games are called \"crap-game hunters,\" and Rakuro Hizutome is one of them. The game he's chosen to tackle next is Shangri-La Frontier, a \"god-tier game\" that has a total of thirty million players. Online friends... An expansive world... Encounters with rivals... These are changing Rakuro and all the other players' fates! The best game adventure tale by the strongest \"crap game\" player begins now!<br>\n<br>\n(Source: Crunchyroll)",
      "status": "Completed",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151970-Tnnfp0f7NOzj.jpg",
      "coverHash": "hash",
      "rating": 79,
      "releaseDate": 2023,
      "color": "#5da1e4",
      "genres": [
        "Action",
        "Adventure",
        "Comedy",
        "Fantasy",
        "Sci-Fi"
      ],
      "totalEpisodes": 25,
      "duration": 26,
      "type": "TV"
    },
    {
      "id": "176508",
      "malId": 58572,
      "title": {
        "romaji": "Shangri-La Frontier 2nd Season",
        "english": null,
        "native": "シャングリラ・フロンティア 2nd season",
        "userPreferred": "Shangri-La Frontier 2nd Season"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176508-1ugnumO0WcIZ.png",
      "imageHash": "hash",
      "trailer": {
        "id": "RYqZUfYBoI0",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/RYqZUfYBoI0/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "The second season of <i>Shangri-La Frontier<i>.",
      "status": "Not yet aired",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176508-1ugnumO0WcIZ.png",
      "coverHash": "hash",
      "rating": null,
      "releaseDate": 2024,
      "color": "#e4a10d",
      "genres": [],
      "totalEpisodes": null,
      "duration": null,
      "type": "TV"
    },
    {
      "id": "166610",
      "malId": 55813,
      "title": {
        "romaji": "MASHLE: Kami Shinkakusha Kouho Senbatsu Shiken-hen",
        "english": "MASHLE: MAGIC AND MUSCLES Season 2",
        "native": "マッシュル-MASHLE- 神覚者候補選抜試験編",
        "userPreferred": "MASHLE: Kami Shinkakusha Kouho Senbatsu Shiken-hen"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166610-IjJ8YLOKsua4.jpg",
      "imageHash": "hash",
      "trailer": {
        "id": "Al0Zin6iVCE",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/Al0Zin6iVCE/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "The second season of <i>MASHLE</i>, adapting the Divine Visionary Candidate Exam Arc.",
      "status": "Completed",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166610-2gA4Vv20MVhv.jpg",
      "coverHash": "hash",
      "rating": 79,
      "releaseDate": 2024,
      "color": "#e48643",
      "genres": [
        "Action",
        "Comedy",
        "Fantasy"
      ],
      "totalEpisodes": 12,
      "duration": 24,
      "type": "TV"
    },
    {
      "id": "21",
      "malId": 21,
      "title": {
        "romaji": "ONE PIECE",
        "english": "ONE PIECE",
        "native": "ONE PIECE",
        "userPreferred": "ONE PIECE"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
      "imageHash": "hash",
      "trailer": {
        "thumbnailHash": "hash"
      },
      "description": "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
      "status": "Ongoing",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
      "coverHash": "hash",
      "rating": 88,
      "releaseDate": 1999,
      "color": "#e4a15d",
      "genres": [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy"
      ],
      "totalEpisodes": 1099,
      "duration": 24,
      "type": "TV"
    },
    {
      "id": "166216",
      "malId": 55690,
      "title": {
        "romaji": "Boku no Kokoro no Yabai Yatsu 2nd Season",
        "english": "The Dangers in My Heart Season 2",
        "native": "僕の心のヤバイやつ 第2期",
        "userPreferred": "Boku no Kokoro no Yabai Yatsu 2nd Season"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166216-mK2CNMDLsBfW.jpg",
      "imageHash": "hash",
      "trailer": {
        "id": "MIi8I2dgzo0",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/MIi8I2dgzo0/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "The second season of <i>Boku no Kokoro no Yabai Yatsu</i>.",
      "status": "Completed",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166216-mmAL8hAH8Ttc.jpg",
      "coverHash": "hash",
      "rating": 88,
      "releaseDate": 2024,
      "color": "#e4ae5d",
      "genres": [
        "Comedy",
        "Romance",
        "Slice of Life"
      ],
      "totalEpisodes": 13,
      "duration": 23,
      "type": "TV"
    },
    {
      "id": "176496",
      "malId": 58567,
      "title": {
        "romaji": "Ore dake Level Up na Ken: Season 2 - Arise from the Shadow",
        "english": "Solo Leveling Season 2 -Arise from the Shadow-",
        "native": "俺だけレベルアップな件 Season 2 -Arise from the Shadow-",
        "userPreferred": "Ore dake Level Up na Ken: Season 2 - Arise from the Shadow"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-0cstHIvRPRaE.jpg",
      "imageHash": "hash",
      "trailer": {
        "id": "YQELzwEahjY",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/YQELzwEahjY/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "The second season of <i>Solo Leveling</i>.",
      "status": "Not yet aired",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-0cstHIvRPRaE.jpg",
      "coverHash": "hash",
      "rating": null,
      "releaseDate": null,
      "color": "#a1bbe4",
      "genres": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "totalEpisodes": null,
      "duration": null,
      "type": "TV"
    },
    {
      "id": "154587",
      "malId": 52991,
      "title": {
        "romaji": "Sousou no Frieren",
        "english": "Frieren: Beyond Journey’s End",
        "native": "葬送のフリーレン",
        "userPreferred": "Sousou no Frieren"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg",
      "imageHash": "hash",
      "trailer": {
        "id": "qgQunxD0qCk",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/qgQunxD0qCk/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…\n<br><br>\n(Source: Crunchyroll)",
      "status": "Completed",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
      "coverHash": "hash",
      "rating": 92,
      "releaseDate": 2023,
      "color": "#d6f1c9",
      "genres": [
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "totalEpisodes": 28,
      "duration": 24,
      "type": "TV"
    },
    {
      "id": "151639",
      "malId": 56285,
      "title": {
        "romaji": "Ninja Kamui",
        "english": "Ninja Kamui",
        "native": "Ninja Kamui",
        "userPreferred": "Ninja Kamui"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151639-7KqJ7BgaM9Mx.png",
      "imageHash": "hash",
      "trailer": {
        "id": "Sjs6MkX9ASU",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/Sjs6MkX9ASU/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "Higan is a Nukenin - a former ninja who escaped his clan and is hiding from his violent past in rural America with his family. One night, he is ambushed by a team of assassins from his former organization who exact a bloody retribution on Joe and his family for betraying their ancient code. Rising from his seeming “death,” Joe will re-emerge as his former self - Ninja Kamui - to avenge his family and friends. Kamui is a 21st century ninja, a shadowy anachronism who pits his ancient skills against high-tech weaponry with brutal finesse. He must face off against trained assassins, combat cyborgs, and rival ninjas to bring down the very clan that made him.\n<br><br>\n(Source: Warner Bros. Discovery)",
      "status": "Ongoing",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151639-6tcLh08KSsmJ.jpg",
      "coverHash": "hash",
      "rating": 79,
      "releaseDate": 2024,
      "color": "#e4351a",
      "genres": [
        "Action",
        "Adventure",
        "Drama",
        "Sci-Fi"
      ],
      "totalEpisodes": 12,
      "duration": 23,
      "type": "TV"
    },
    {
      "id": "137908",
      "malId": 49613,
      "title": {
        "romaji": "Chiyu Mahou no Machigatta Tsukaikata",
        "english": "The Wrong Way to Use Healing Magic",
        "native": "治癒魔法の間違った使い方",
        "userPreferred": "Chiyu Mahou no Machigatta Tsukaikata"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx137908-50af3lKVbst2.jpg",
      "imageHash": "hash",
      "trailer": {
        "id": "UkPRnHQJrws",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/UkPRnHQJrws/hqdefault.jpg",
        "thumbnailHash": "hash"
      },
      "description": "An ordinary walk home from school turns into an epic journey for Usato. After suddenly being dropped into another world with two fellow students, Usato learns he was summoned there by accident. But things turn around when he discovers a unique aptitude for healing magic! Now, he trains beyond human limitations, using his self-healing abilities to gain absurd strength and unrivaled stamina.<br>\n<br>\n(Source: Crunchyroll)",
      "status": "Completed",
      "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/137908-ZJ0tMykH623Z.jpg",
      "coverHash": "hash",
      "rating": 75,
      "releaseDate": 2024,
      "color": "#78e435",
      "genres": [
        "Action",
        "Fantasy"
      ],
      "totalEpisodes": 13,
      "duration": 24,
      "type": "TV"
    }
  ]
  return (<MainWrapper>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
      <Crousel/>
        <Sections results={results} title={"Most Popular"}/>
        <Spacer/>
        <Spacer/>
        <Sections results={results} title={"Trending Anime"}/>
        <Spacer/>
        <Spacer/>
        <Sections results={results} title={"Top Airing"}/>
    </ScrollView>
  </MainWrapper>
  );
};


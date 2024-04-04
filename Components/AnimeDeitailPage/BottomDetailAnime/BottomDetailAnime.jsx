import { CharacterDetails } from "./CharacterDetails/CharacterDetails";
import { EachCharacterDetailModal } from "./CharacterDetails/EachCharacterDetailModal";
import { memo, useCallback, useEffect, useState } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import { Heading } from "../../Global/Heading";
import { Spacer } from "../../Global/Spacer";
import { EpisodesDetails } from "./EpisodesDetails/EpisodesDetails";
import { FadeInDownLayout } from "../../../Layout/FadeInDownLayout";

export const BottomDetailAnime = memo(({id}) => {
  const characters = [
    {
      "id": 89275,
      "role": "MAIN",
      "name": {
        "first": "Satoru",
        "last": "Fujinuma",
        "full": "Satoru Fujinuma",
        "native": "藤沼悟",
        "userPreferred": "Satoru Fujinuma"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/b89275-xCGzh6jAGe2v.png",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 119477,
          "language": "Japanese",
          "name": {
            "first": "Shinnosuke",
            "last": "Mitsushima",
            "full": "Shinnosuke Mitsushima",
            "native": "満島真之介",
            "userPreferred": "Shinnosuke Mitsushima"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/24477-4YlG2lNdgDS0.jpg",
          "imageHash": "hash"
        },
        {
          "id": 119478,
          "language": "Japanese",
          "name": {
            "first": "Tao",
            "last": "Tsuchiya",
            "full": "Tao Tsuchiya",
            "native": "土屋太鳳",
            "userPreferred": "Tao Tsuchiya"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119478-3hHYufbtppgi.png",
          "imageHash": "hash"
        },
        {
          "id": 96085,
          "language": "English",
          "name": {
            "first": "Benjamin Isaac",
            "last": "Diskin",
            "full": "Benjamin Isaac Diskin",
            "native": null,
            "userPreferred": "Benjamin Isaac Diskin"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96085-iWZfsxUiIlni.png",
          "imageHash": "hash"
        },
        {
          "id": 95085,
          "language": "English",
          "name": {
            "first": "Michelle",
            "last": "Ruff",
            "full": "Michelle Ruff",
            "native": null,
            "userPreferred": "Michelle Ruff"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95085-zJmU0x2NLr3j.jpg",
          "imageHash": "hash"
        },
        {
          "id": 96655,
          "language": "German",
          "name": {
            "first": "Oliver-Kim",
            "last": "Hasper",
            "full": "Oliver-Kim Hasper",
            "native": null,
            "userPreferred": "Oliver-Kim Hasper"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/1655.jpg",
          "imageHash": "hash"
        },
        {
          "id": 126221,
          "language": "German",
          "name": {
            "first": "Claudia",
            "last": "Schmidt",
            "full": "Claudia Schmidt",
            "native": null,
            "userPreferred": "Claudia Schmidt"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/126221-OJGVCtPS0VgN.jpg",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89276,
      "role": "MAIN",
      "name": {
        "first": "Kayo",
        "last": "Hinazuki",
        "full": "Kayo Hinazuki",
        "native": "雛月加代",
        "userPreferred": "Kayo Hinazuki"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/89276-LjlYvXfOnjHB.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 101686,
          "language": "Japanese",
          "name": {
            "first": "Aoi",
            "last": "Yuuki",
            "full": "Aoi Yuuki",
            "native": "悠木碧",
            "userPreferred": "Aoi Yuuki"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101686-PTd0lQZMsmcv.png",
          "imageHash": "hash"
        },
        {
          "id": 95396,
          "language": "English",
          "name": {
            "first": "Stephanie",
            "last": "Sheh",
            "full": "Stephanie Sheh",
            "native": null,
            "userPreferred": "Stephanie Sheh"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95396-tNpkTyDD9Y1g.jpg",
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
      "id": 89365,
      "role": "SUPPORTING",
      "name": {
        "first": "Gaku",
        "last": "Yashiro",
        "full": "Gaku Yashiro",
        "native": "八代学",
        "userPreferred": "Gaku Yashiro"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/89365-Esm33rYZ3x0s.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 96469,
          "language": "Japanese",
          "name": {
            "first": "Mitsuru",
            "last": "Miyamoto",
            "full": "Mitsuru Miyamoto",
            "native": "宮本充",
            "userPreferred": "Mitsuru Miyamoto"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96469-uVRO2mYXvXxP.png",
          "imageHash": "hash"
        },
        {
          "id": 129500,
          "language": "English",
          "name": {
            "first": "David",
            "last": "Collins",
            "full": "David Collins",
            "native": null,
            "userPreferred": "David Collins"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129500-uLz37lvyhT6P.png",
          "imageHash": "hash"
        },
        {
          "id": 131935,
          "language": "German",
          "name": {
            "first": "Arne",
            "last": "Stephan",
            "full": "Arne Stephan",
            "native": null,
            "userPreferred": "Arne Stephan"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n131935-kPjvi1wTWHhC.png",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89366,
      "role": "SUPPORTING",
      "name": {
        "first": "Misato",
        "last": null,
        "full": "Misato",
        "native": "美里",
        "userPreferred": "Misato"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/b89366-5KwJW3NNmmti.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 119822,
          "language": "Japanese",
          "name": {
            "first": "Hina",
            "last": "Kino",
            "full": "Hina Kino",
            "native": "木野日菜",
            "userPreferred": "Hina Kino"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/24822-ry2jbsM1CjQa.jpg",
          "imageHash": "hash"
        },
        {
          "id": 96862,
          "language": "English",
          "name": {
            "first": "Mela",
            "last": "Lee",
            "full": "Mela Lee",
            "native": null,
            "userPreferred": "Mela Lee"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/1862.jpg",
          "imageHash": "hash"
        },
        {
          "id": 138295,
          "language": "German",
          "name": {
            "first": "Sarah",
            "last": "Alles",
            "full": "Sarah Alles",
            "native": null,
            "userPreferred": "Sarah Alles"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138295-MzjLNhO5Q7YT.png",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89326,
      "role": "SUPPORTING",
      "name": {
        "first": "Sachiko",
        "last": "Fujinuma",
        "full": "Sachiko Fujinuma",
        "native": "藤沼佐知子",
        "userPreferred": "Sachiko Fujinuma"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/89326-zNVEqTuDt7kL.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 95024,
          "language": "Japanese",
          "name": {
            "first": "Minami",
            "last": "Takayama",
            "full": "Minami Takayama",
            "native": "高山みなみ",
            "userPreferred": "Minami Takayama"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95024-qsZgGp8VHqMP.png",
          "imageHash": "hash"
        },
        {
          "id": 129499,
          "language": "English",
          "name": {
            "first": "Sara",
            "last": "Cravens",
            "full": "Sara Cravens",
            "native": null,
            "userPreferred": "Sara Cravens"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129499-GogPBOV4jwTo.jpg",
          "imageHash": "hash"
        },
        {
          "id": 101140,
          "language": "German",
          "name": {
            "first": "Sonja",
            "last": "Spuhl",
            "full": "Sonja Spuhl",
            "native": null,
            "userPreferred": "Sonja Spuhl"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/6140.jpg",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89360,
      "role": "SUPPORTING",
      "name": {
        "first": "Hiromi",
        "last": "Sugita",
        "full": "Hiromi Sugita",
        "native": "杉田広美",
        "userPreferred": "Hiromi Sugita"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/89360-em18TiJPY32d.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 103639,
          "language": "Japanese",
          "name": {
            "first": "Atsushi",
            "last": "Tamaru",
            "full": "Atsushi Tamaru",
            "native": "田丸篤志",
            "userPreferred": "Atsushi Tamaru"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n103639-HsiG5W51qgzi.png",
          "imageHash": "hash"
        },
        {
          "id": 119722,
          "language": "Japanese",
          "name": {
            "first": "Akari",
            "last": "Kitou",
            "full": "Akari Kitou",
            "native": "鬼頭明里",
            "userPreferred": "Akari Kitou"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119722-Ls7ORfBejJEP.jpg",
          "imageHash": "hash"
        },
        {
          "id": 107344,
          "language": "English",
          "name": {
            "first": "Christine",
            "last": "Cabanos",
            "full": "Christine Cabanos",
            "native": null,
            "userPreferred": "Christine Marie Cabanos"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107344-hEL8CVWtd26L.jpg",
          "imageHash": "hash"
        },
        {
          "id": 138738,
          "language": "German",
          "name": {
            "first": "Charlotte",
            "last": "Uhlig",
            "full": "Charlotte Uhlig",
            "native": null,
            "userPreferred": "Charlotte Uhlig"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138738-merLp1ufa0Gz.jpg",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89355,
      "role": "SUPPORTING",
      "name": {
        "first": "Airi",
        "last": "Katagiri",
        "full": "Airi Katagiri",
        "native": "片桐愛梨",
        "userPreferred": "Airi Katagiri"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/b89355-w1xEKGHisGWE.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 107652,
          "language": "Japanese",
          "name": {
            "first": "Chinatsu",
            "last": "Akasaki",
            "full": "Chinatsu Akasaki",
            "native": "赤﨑千夏",
            "userPreferred": "Chinatsu Akasaki"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107652-wHdkKzhetbiH.jpg",
          "imageHash": "hash"
        },
        {
          "id": 96650,
          "language": "English",
          "name": {
            "first": "Cherami",
            "last": "Leigh",
            "full": "Cherami Leigh",
            "native": null,
            "userPreferred": "Cherami Leigh"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96650-oYspSQuaFo3N.jpg",
          "imageHash": "hash"
        },
        {
          "id": 126223,
          "language": "German",
          "name": {
            "first": "Yvonne",
            "last": "Greitzke",
            "full": "Yvonne Greitzke",
            "native": null,
            "userPreferred": "Yvonne Greitzke"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/126223-WBucop9efdWC.jpg",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 129807,
      "role": "SUPPORTING",
      "name": {
        "first": "Akemi ",
        "last": "Hinazuki",
        "full": "Akemi  Hinazuki",
        "native": "雛月明美",
        "userPreferred": "Akemi  Hinazuki"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/b129807-4AM8Oe3szyxL.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 95076,
          "language": "Japanese",
          "name": {
            "first": "Akemi",
            "last": "Okamura",
            "full": "Akemi Okamura",
            "native": "岡村明美",
            "userPreferred": "Akemi Okamura"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95076-itRGy8F3x5Em.png",
          "imageHash": "hash"
        },
        {
          "id": 96435,
          "language": "English",
          "name": {
            "first": "Carolyn",
            "last": "Keranen",
            "full": "Carolyn Keranen",
            "native": null,
            "userPreferred": "Carolyn Keranen"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96435-q2OMEYsjHGrP.jpg",
          "imageHash": "hash"
        },
        {
          "id": 103550,
          "language": "German",
          "name": {
            "first": "Silvia",
            "last": "Mißbach",
            "full": "Silvia Mißbach",
            "native": null,
            "userPreferred": "Silvia Mißbach"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89356,
      "role": "SUPPORTING",
      "name": {
        "first": "Kazu",
        "last": null,
        "full": "Kazu",
        "native": "カズ",
        "userPreferred": "Kazu"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/89356-2AUiPIMDLXeu.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 119625,
          "language": "Japanese",
          "name": {
            "first": "Yukitoshi",
            "last": "Kikuchi",
            "full": "Yukitoshi Kikuchi",
            "native": "菊池幸利 ",
            "userPreferred": "Yukitoshi Kikuchi"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/24625-E65Pyyfivnzv.jpg",
          "imageHash": "hash"
        },
        {
          "id": 129502,
          "language": "English",
          "name": {
            "first": "Bobby",
            "last": "Thong",
            "full": "Bobby Thong",
            "native": null,
            "userPreferred": "Bobby Thong"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129502-voOTZeuudyun.jpg",
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
      "id": 89357,
      "role": "SUPPORTING",
      "name": {
        "first": "Kenya",
        "last": "Kobayashi",
        "full": "Kenya Kobayashi",
        "native": "小林賢也",
        "userPreferred": "Kenya Kobayashi"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/b89357-E9erSMef5EJC.png",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 109251,
          "language": "Japanese",
          "name": {
            "first": "You",
            "last": "Taichi",
            "full": "You Taichi",
            "native": "大地葉",
            "userPreferred": "You Taichi"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n109251-ge8rmZwppqxy.png",
          "imageHash": "hash"
        },
        {
          "id": 129501,
          "language": "English",
          "name": {
            "first": "Xander",
            "last": "Mobus",
            "full": "Xander Mobus",
            "native": null,
            "userPreferred": "Xander Mobus"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129501-yf0OVJ24zxNv.png",
          "imageHash": "hash"
        },
        {
          "id": 126242,
          "language": "English",
          "name": {
            "first": "Erica",
            "last": "Mendez",
            "full": "Erica Mendez",
            "native": null,
            "userPreferred": "Erica Mendez"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n126242-LjdhLN4TV53X.jpg",
          "imageHash": "hash"
        },
        {
          "id": 138238,
          "language": "German",
          "name": {
            "first": "Melinda",
            "last": "Rachfahl",
            "full": "Melinda Rachfahl",
            "native": null,
            "userPreferred": "Melinda Rachfahl"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138238-91AAoUEBzO2e.png",
          "imageHash": "hash"
        }
      ]
    },
    {
      "id": 89358,
      "role": "SUPPORTING",
      "name": {
        "first": "Osamu",
        "last": null,
        "full": "Osamu",
        "native": "修",
        "userPreferred": "Osamu"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/b89358-FA7IQL7z0MvL.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 119626,
          "language": "Japanese",
          "name": {
            "first": "Ayaka",
            "last": "Nanase",
            "full": "Ayaka Nanase",
            "native": "七瀬彩夏",
            "userPreferred": "Ayaka Nanase"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119626-dYC5gag3c25s.png",
          "imageHash": "hash"
        },
        {
          "id": 129224,
          "language": "English",
          "name": {
            "first": "Ryan",
            "last": "Bartley",
            "full": "Ryan Bartley",
            "native": null,
            "userPreferred": "Ryan Bartley"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129224-UOYnTHSiSC9C.png",
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
      "id": 89359,
      "role": "SUPPORTING",
      "name": {
        "first": "Jun",
        "last": "Shiratori",
        "full": "Jun Shiratori",
        "native": "白鳥潤",
        "userPreferred": "Jun Shiratori"
      },
      "image": "https://s4.anilist.co/file/anilistcdn/character/large/89359-HxH4BTvRzoq7.jpg",
      "imageHash": "hash",
      "voiceActors": [
        {
          "id": 95279,
          "language": "Japanese",
          "name": {
            "first": "Takahiro",
            "last": "Mizushima",
            "full": "Takahiro Mizushima",
            "native": "水島大宙",
            "userPreferred": "Takahiro Mizushima"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95279-5fMO4r9szQKL.jpg",
          "imageHash": "hash"
        },
        {
          "id": 120213,
          "language": "English",
          "name": {
            "first": "Max",
            "last": "Mittelman",
            "full": "Max Mittelman",
            "native": null,
            "userPreferred": "Max Mittelman"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/25213-IylSduNo7Q2O.jpg",
          "imageHash": "hash"
        },
        {
          "id": 132511,
          "language": "German",
          "name": {
            "first": "Bastian",
            "last": "Sierich",
            "full": "Bastian Sierich",
            "native": null,
            "userPreferred": "Bastian Sierich"
          },
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n132511-ukqDBcr6YYaC.png",
          "imageHash": "hash"
        }
      ]
    }
  ]
  const [show, setShow] = useState(false)
  const [voiceActors, setVoiceActors] = useState([])
  const [characterName, setCharacterName] = useState({})
  const updateShow = useCallback((value) => setShow(value), [])
  const updateVoiceActors = useCallback((value) => setVoiceActors(value), [])
  const updateCharacter = useCallback((value) => setCharacterName(value), [])
  const [showCard, setShowCard] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShowCard(true)
    },200)
  },[])
  return (
    <>
      <EachCharacterDetailModal show={show} voiceActors={voiceActors} setShow={updateShow} name={characterName}/>
      <CharacterDetails characters={characters} updateVoiceActors={updateVoiceActors} updateShow={updateShow} updateCharacter={updateCharacter}/>
      <Spacer/>
      <PaddingConatiner><Heading text={"Episodes"}/></PaddingConatiner>
      {showCard && <FadeInDownLayout><EpisodesDetails/></FadeInDownLayout>}
      <Spacer/>
    </>
  );
});

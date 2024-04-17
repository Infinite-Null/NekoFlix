import { memo, useCallback, useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { EachMangaCard } from "./EachMangaCard";
import { GetMangaPageData } from "../../Api/MangaData";
import SimpleLoading from "../Global/Loading/SimpleLoading";
import { EachHeaderSection } from "./Home/EachHeaderSection";
import { useNavigation } from "@react-navigation/native";

export const MangaDisplayContainer = memo(({showRank, title,loading, data}) => {
  const navigation = useNavigation()
  // const data = [
  //   {
  //     "id": 446866,
  //     "title": "Becoming the Sacheon Dang's Swordsmaster-Rank Young Lord",
  //     "slug": "becoming-the-sacheon-dang-s-swordsmaster-rank-young-lord",
  //     "cover": "manga_446866-4987863337.jpeg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653598,\"chapter_number\":\"11\",\"slug\":\"11\",\"created_at\":\"2024-04-11T13:17:45.000000Z\"},{\"id\":653597,\"chapter_number\":\"8\",\"slug\":\"8\",\"created_at\":\"2024-04-11T13:17:00.000000Z\"},{\"id\":653596,\"chapter_number\":\"7\",\"slug\":\"7\",\"created_at\":\"2024-04-11T13:16:19.000000Z\"},{\"id\":653594,\"chapter_number\":\"6\",\"slug\":\"6\",\"created_at\":\"2024-04-11T13:15:35.000000Z\"},{\"id\":653595,\"chapter_number\":\"5\",\"slug\":\"5\",\"created_at\":\"2024-04-11T13:16:10.000000Z\"}],\"count\":8}",
  //     "last_chapter_number": "12",
  //     "last_chapter_slug": "12",
  //     "last_chapter_created_at": "2024-04-11T12:52:23.000000Z",
  //     "second_last_chapter_number": "11",
  //     "second_last_chapter_slug": "11",
  //     "second_last_chapter_created_at": "2024-04-11T13:17:45.000000Z",
  //     "third_last_chapter_number": "10",
  //     "third_last_chapter_slug": "10",
  //     "third_last_chapter_created_at": "2024-04-11T13:00:55.000000Z",
  //     "views_count": 10286,
  //     "bookmarks_count": 121,
  //     "chapters_count": 12,
  //     "comments_count": 0,
  //     "users_rated_count": 6,
  //     "rating": 10,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 447172,
  //     "title": "The Indomitable Martial King",
  //     "slug": "the-indomitable-martial-king",
  //     "cover": "manga_447172-6289317512.jpeg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655214,\"chapter_number\":\"25\",\"slug\":\"25\",\"created_at\":\"2024-04-15T17:49:16.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "25",
  //     "last_chapter_slug": "25",
  //     "last_chapter_created_at": "2024-04-15T17:49:16.000000Z",
  //     "second_last_chapter_number": "24",
  //     "second_last_chapter_slug": "24",
  //     "second_last_chapter_created_at": "2024-04-08T18:36:23.000000Z",
  //     "third_last_chapter_number": "23",
  //     "third_last_chapter_slug": "23",
  //     "third_last_chapter_created_at": "2024-04-01T15:06:18.000000Z",
  //     "views_count": 33637,
  //     "bookmarks_count": 221,
  //     "chapters_count": 25,
  //     "comments_count": 3,
  //     "users_rated_count": 9,
  //     "rating": 10,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 447281,
  //     "title": "The Second Life of the Archmage Dominates with Close-Range Magic",
  //     "slug": "the-second-life-of-the-archmage-dominates-with-close-range-magic",
  //     "cover": "manga_447281-9217803346.png",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653570,\"chapter_number\":\"13\",\"slug\":\"13\",\"created_at\":\"2024-04-11T12:24:01.000000Z\"},{\"id\":653575,\"chapter_number\":\"12\",\"slug\":\"12\",\"created_at\":\"2024-04-11T12:38:29.000000Z\"},{\"id\":653579,\"chapter_number\":\"11\",\"slug\":\"11\",\"created_at\":\"2024-04-11T12:42:37.000000Z\"},{\"id\":653583,\"chapter_number\":\"10\",\"slug\":\"10\",\"created_at\":\"2024-04-11T12:54:38.000000Z\"}],\"count\":4}",
  //     "last_chapter_number": "13",
  //     "last_chapter_slug": "13",
  //     "last_chapter_created_at": "2024-04-11T12:24:01.000000Z",
  //     "second_last_chapter_number": "12",
  //     "second_last_chapter_slug": "12",
  //     "second_last_chapter_created_at": "2024-04-11T12:38:29.000000Z",
  //     "third_last_chapter_number": "11",
  //     "third_last_chapter_slug": "11",
  //     "third_last_chapter_created_at": "2024-04-11T12:42:37.000000Z",
  //     "views_count": 15628,
  //     "bookmarks_count": 170,
  //     "chapters_count": 13,
  //     "comments_count": 0,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 447100,
  //     "title": "The Last Adventurer",
  //     "slug": "the-last-adventurer",
  //     "cover": "manga_447100-7787428752.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":654382,\"chapter_number\":\"10\",\"slug\":\"10\",\"created_at\":\"2024-04-13T17:15:12.000000Z\"},{\"id\":654371,\"chapter_number\":\"9\",\"slug\":\"9\",\"created_at\":\"2024-04-13T15:53:40.000000Z\"}],\"count\":2}",
  //     "last_chapter_number": "10",
  //     "last_chapter_slug": "10",
  //     "last_chapter_created_at": "2024-04-13T17:15:12.000000Z",
  //     "second_last_chapter_number": "9",
  //     "second_last_chapter_slug": "9",
  //     "second_last_chapter_created_at": "2024-04-13T15:53:40.000000Z",
  //     "third_last_chapter_number": "8",
  //     "third_last_chapter_slug": "8",
  //     "third_last_chapter_created_at": "2024-04-06T16:47:06.000000Z",
  //     "views_count": 10250,
  //     "bookmarks_count": 125,
  //     "chapters_count": 10,
  //     "comments_count": 1,
  //     "users_rated_count": 4,
  //     "rating": 9,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 446676,
  //     "title": "Mightiest Melee Magician",
  //     "slug": "mightiest-melee-magician",
  //     "cover": "manga_446676-707674657.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655294,\"chapter_number\":\"24\",\"slug\":\"24\",\"created_at\":\"2024-04-16T03:57:05.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "24",
  //     "last_chapter_slug": "24",
  //     "last_chapter_created_at": "2024-04-16T03:57:05.000000Z",
  //     "second_last_chapter_number": "23",
  //     "second_last_chapter_slug": "23",
  //     "second_last_chapter_created_at": "2024-04-11T08:49:22.000000Z",
  //     "third_last_chapter_number": "22",
  //     "third_last_chapter_slug": "22",
  //     "third_last_chapter_created_at": "2024-04-04T02:17:22.000000Z",
  //     "views_count": 50121,
  //     "bookmarks_count": 252,
  //     "chapters_count": 24,
  //     "comments_count": 1,
  //     "users_rated_count": 2,
  //     "rating": 10,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 447298,
  //     "title": "Executioner",
  //     "slug": "executioner",
  //     "cover": "manga_447298-7055714305.png",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653590,\"chapter_number\":\"7\",\"slug\":\"7\",\"created_at\":\"2024-04-11T13:12:54.000000Z\"},{\"id\":653592,\"chapter_number\":\"6\",\"slug\":\"6\",\"created_at\":\"2024-04-11T13:14:41.000000Z\"},{\"id\":653615,\"chapter_number\":\"5\",\"slug\":\"5\",\"created_at\":\"2024-04-11T13:36:10.000000Z\"}],\"count\":3}",
  //     "last_chapter_number": "7",
  //     "last_chapter_slug": "7",
  //     "last_chapter_created_at": "2024-04-11T13:12:54.000000Z",
  //     "second_last_chapter_number": "6",
  //     "second_last_chapter_slug": "6",
  //     "second_last_chapter_created_at": "2024-04-11T13:14:41.000000Z",
  //     "third_last_chapter_number": "5",
  //     "third_last_chapter_slug": "5",
  //     "third_last_chapter_created_at": "2024-04-11T13:36:10.000000Z",
  //     "views_count": 6039,
  //     "bookmarks_count": 63,
  //     "chapters_count": 7,
  //     "comments_count": 2,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 446864,
  //     "title": "Necromancer Academy and the Genius Summoner",
  //     "slug": "necromancer-academy-and-the-genius-summoner",
  //     "cover": "manga_446864-4285085070.png",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":654629,\"chapter_number\":\"94\",\"slug\":\"94\",\"created_at\":\"2024-04-14T10:53:30.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "94",
  //     "last_chapter_slug": "94",
  //     "last_chapter_created_at": "2024-04-14T10:53:30.000000Z",
  //     "second_last_chapter_number": "93",
  //     "second_last_chapter_slug": "93",
  //     "second_last_chapter_created_at": "2024-04-12T04:21:53.000000Z",
  //     "third_last_chapter_number": "92",
  //     "third_last_chapter_slug": "92",
  //     "third_last_chapter_created_at": "2024-04-12T07:59:53.000000Z",
  //     "views_count": 19964,
  //     "bookmarks_count": 62,
  //     "chapters_count": 98,
  //     "comments_count": 0,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 446166,
  //     "title": "Virus King",
  //     "slug": "virus-king",
  //     "cover": "manga_446166-3518629856.png",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":654331,\"chapter_number\":\"9\",\"slug\":\"9\",\"created_at\":\"2024-04-13T05:50:51.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "9",
  //     "last_chapter_slug": "9",
  //     "last_chapter_created_at": "2024-04-13T05:50:51.000000Z",
  //     "second_last_chapter_number": "8",
  //     "second_last_chapter_slug": "8",
  //     "second_last_chapter_created_at": "2024-04-09T16:47:25.000000Z",
  //     "third_last_chapter_number": "7",
  //     "third_last_chapter_slug": "7",
  //     "third_last_chapter_created_at": "2024-04-05T15:39:26.000000Z",
  //     "views_count": 28556,
  //     "bookmarks_count": 239,
  //     "chapters_count": 9,
  //     "comments_count": 0,
  //     "users_rated_count": 1,
  //     "rating": 9,
  //     "is_new": 0
  //   },
  //   {
  //     "id": 445208,
  //     "title": "A Heroic Tale About Starting With a Personal Relations Cheat(Ability) and Letting Others Do the Job",
  //     "slug": "jinmyaku-cheat-de-hajimeru-hitomakase-eiyuu-tan",
  //     "cover": "manga_445208-7766194074.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653389,\"chapter_number\":\"6\",\"slug\":\"6\",\"created_at\":\"2024-04-10T18:38:06.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "6",
  //     "last_chapter_slug": "6",
  //     "last_chapter_created_at": "2024-04-10T18:38:06.000000Z",
  //     "second_last_chapter_number": "5",
  //     "second_last_chapter_slug": "5",
  //     "second_last_chapter_created_at": "2024-03-01T08:39:02.000000Z",
  //     "third_last_chapter_number": "4",
  //     "third_last_chapter_slug": "4",
  //     "third_last_chapter_created_at": "2024-01-21T07:59:09.000000Z",
  //     "views_count": 9752,
  //     "bookmarks_count": 73,
  //     "chapters_count": 6,
  //     "comments_count": 0,
  //     "users_rated_count": 1,
  //     "rating": 9,
  //     "is_new": 0
  //   },
  //   {
  //     "id": 445017,
  //     "title": "Reincarnation Path of The Underworld King",
  //     "slug": "reincarnation-path-of-the-underworld-king",
  //     "cover": "manga_445017-1772507366.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655292,\"chapter_number\":\"24\",\"slug\":\"24\",\"created_at\":\"2024-04-16T03:55:44.000000Z\"},{\"id\":655098,\"chapter_number\":\"19\",\"slug\":\"19\",\"created_at\":\"2024-04-15T12:48:19.000000Z\"},{\"id\":655097,\"chapter_number\":\"18\",\"slug\":\"18\",\"created_at\":\"2024-04-15T12:47:43.000000Z\"}],\"count\":3}",
  //     "last_chapter_number": "24",
  //     "last_chapter_slug": "24",
  //     "last_chapter_created_at": "2024-04-16T03:55:44.000000Z",
  //     "second_last_chapter_number": "23",
  //     "second_last_chapter_slug": "23",
  //     "second_last_chapter_created_at": "2024-04-14T21:22:06.000000Z",
  //     "third_last_chapter_number": "22",
  //     "third_last_chapter_slug": "22",
  //     "third_last_chapter_created_at": "2024-04-14T21:25:36.000000Z",
  //     "views_count": 13003,
  //     "bookmarks_count": 40,
  //     "chapters_count": 24,
  //     "comments_count": 0,
  //     "users_rated_count": 2,
  //     "rating": 6,
  //     "is_new": 0
  //   },
  //   {
  //     "id": 446869,
  //     "title": "I Really Don’t Want to Learn Forbidden Spells",
  //     "slug": "i-really-don-t-want-to-learn-forbidden-spells",
  //     "cover": "manga_446869-2446824366.jpeg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655537,\"chapter_number\":\"28\",\"slug\":\"28\",\"created_at\":\"2024-04-17T03:48:54.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "28",
  //     "last_chapter_slug": "28",
  //     "last_chapter_created_at": "2024-04-17T03:48:54.000000Z",
  //     "second_last_chapter_number": "27",
  //     "second_last_chapter_slug": "27",
  //     "second_last_chapter_created_at": "2024-04-13T04:28:15.000000Z",
  //     "third_last_chapter_number": "26",
  //     "third_last_chapter_slug": "26",
  //     "third_last_chapter_created_at": "2024-04-10T10:52:11.000000Z",
  //     "views_count": 21736,
  //     "bookmarks_count": 126,
  //     "chapters_count": 30,
  //     "comments_count": 1,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 446832,
  //     "title": "REBORN AS THE HEAVENLY DEMON",
  //     "slug": "reborn-as-the-heavenly-demon",
  //     "cover": "manga_446832-4799415475.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":654782,\"chapter_number\":\"13\",\"slug\":\"13\",\"created_at\":\"2024-04-14T17:18:23.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "13",
  //     "last_chapter_slug": "13",
  //     "last_chapter_created_at": "2024-04-14T17:18:23.000000Z",
  //     "second_last_chapter_number": "12",
  //     "second_last_chapter_slug": "12",
  //     "second_last_chapter_created_at": "2024-04-09T03:55:31.000000Z",
  //     "third_last_chapter_number": "11",
  //     "third_last_chapter_slug": "11",
  //     "third_last_chapter_created_at": "2024-04-02T17:29:19.000000Z",
  //     "views_count": 35728,
  //     "bookmarks_count": 241,
  //     "chapters_count": 13,
  //     "comments_count": 4,
  //     "users_rated_count": 6,
  //     "rating": 10,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 447109,
  //     "title": "Supreme Zerg Lord",
  //     "slug": "supreme-zerg-lord",
  //     "cover": "manga_447109-2315695191.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653572,\"chapter_number\":\"2\",\"slug\":\"2\",\"created_at\":\"2024-04-11T12:25:00.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "2",
  //     "last_chapter_slug": "2",
  //     "last_chapter_created_at": "2024-04-11T12:25:00.000000Z",
  //     "second_last_chapter_number": "1",
  //     "second_last_chapter_slug": "1",
  //     "second_last_chapter_created_at": "2024-03-31T08:45:38.000000Z",
  //     "third_last_chapter_number": "0",
  //     "third_last_chapter_slug": null,
  //     "third_last_chapter_created_at": "2024-04-17T08:55:50.185334Z",
  //     "views_count": 4608,
  //     "bookmarks_count": 46,
  //     "chapters_count": 2,
  //     "comments_count": 0,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 447256,
  //     "title": "Maplestory: The Last Adventurer",
  //     "slug": "maplestory-the-last-adventurer",
  //     "cover": "manga_447256-3347091764.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653574,\"chapter_number\":\"8\",\"slug\":\"8\",\"created_at\":\"2024-04-11T12:37:52.000000Z\"},{\"id\":653578,\"chapter_number\":\"7\",\"slug\":\"7\",\"created_at\":\"2024-04-11T12:41:58.000000Z\"}],\"count\":2}",
  //     "last_chapter_number": "8",
  //     "last_chapter_slug": "8",
  //     "last_chapter_created_at": "2024-04-11T12:37:52.000000Z",
  //     "second_last_chapter_number": "7",
  //     "second_last_chapter_slug": "7",
  //     "second_last_chapter_created_at": "2024-04-11T12:41:58.000000Z",
  //     "third_last_chapter_number": "6",
  //     "third_last_chapter_slug": "6",
  //     "third_last_chapter_created_at": "2024-04-03T03:12:10.000000Z",
  //     "views_count": 2451,
  //     "bookmarks_count": 33,
  //     "chapters_count": 8,
  //     "comments_count": 0,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 444953,
  //     "title": "The Extra’s Academy Survival Guide",
  //     "slug": "the-extra-s-academy-survival-guide",
  //     "cover": "manga_444953-2015848639.png",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":653976,\"chapter_number\":\"21\",\"slug\":\"21\",\"created_at\":\"2024-04-12T10:22:03.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "21",
  //     "last_chapter_slug": "21",
  //     "last_chapter_created_at": "2024-04-12T10:22:03.000000Z",
  //     "second_last_chapter_number": "20",
  //     "second_last_chapter_slug": "20",
  //     "second_last_chapter_created_at": "2024-04-10T02:53:36.000000Z",
  //     "third_last_chapter_number": "19",
  //     "third_last_chapter_slug": "19",
  //     "third_last_chapter_created_at": "2024-04-03T04:09:40.000000Z",
  //     "views_count": 30420,
  //     "bookmarks_count": 132,
  //     "chapters_count": 21,
  //     "comments_count": 0,
  //     "users_rated_count": 3,
  //     "rating": 9,
  //     "is_new": 0
  //   },
  //   {
  //     "id": 447006,
  //     "title": "A Record of a Mortal's Journey to Immortality",
  //     "slug": "a-record-of-a-mortal-s-journey-to-immortality",
  //     "cover": "manga_447006-2614126178.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655100,\"chapter_number\":\"281\",\"slug\":\"281\",\"created_at\":\"2024-04-15T13:12:01.000000Z\"},{\"id\":654725,\"chapter_number\":\"280\",\"slug\":\"280\",\"created_at\":\"2024-04-14T15:11:46.000000Z\"}],\"count\":2}",
  //     "last_chapter_number": "281",
  //     "last_chapter_slug": "281",
  //     "last_chapter_created_at": "2024-04-15T13:12:01.000000Z",
  //     "second_last_chapter_number": "280",
  //     "second_last_chapter_slug": "280",
  //     "second_last_chapter_created_at": "2024-04-14T15:11:46.000000Z",
  //     "third_last_chapter_number": "279",
  //     "third_last_chapter_slug": "279",
  //     "third_last_chapter_created_at": "2024-04-13T19:49:53.000000Z",
  //     "views_count": 42224,
  //     "bookmarks_count": 45,
  //     "chapters_count": 292,
  //     "comments_count": 0,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 445037,
  //     "title": "Genius Corpse-Collecting Warrior",
  //     "slug": "genius-corpse-collecting-warrior",
  //     "cover": "manga_445037-583777447.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655276,\"chapter_number\":\"26\",\"slug\":\"26\",\"created_at\":\"2024-04-16T02:14:16.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "26",
  //     "last_chapter_slug": "26",
  //     "last_chapter_created_at": "2024-04-16T02:14:16.000000Z",
  //     "second_last_chapter_number": "25",
  //     "second_last_chapter_slug": "25",
  //     "second_last_chapter_created_at": "2024-04-10T10:54:31.000000Z",
  //     "third_last_chapter_number": "24",
  //     "third_last_chapter_slug": "24",
  //     "third_last_chapter_created_at": "2024-04-04T00:54:06.000000Z",
  //     "views_count": 13215,
  //     "bookmarks_count": 73,
  //     "chapters_count": 26,
  //     "comments_count": 0,
  //     "users_rated_count": 0,
  //     "rating": 0,
  //     "is_new": 0
  //   },
  //   {
  //     "id": 446387,
  //     "title": "I Got The Weakest Class, Dragon Tamer!?",
  //     "slug": "i-got-the-weakest-class-dragon-tamer",
  //     "cover": "manga_446387-6618051131.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655213,\"chapter_number\":\"13\",\"slug\":\"13\",\"created_at\":\"2024-04-15T17:49:02.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "13",
  //     "last_chapter_slug": "13",
  //     "last_chapter_created_at": "2024-04-15T17:49:02.000000Z",
  //     "second_last_chapter_number": "12",
  //     "second_last_chapter_slug": "12",
  //     "second_last_chapter_created_at": "2024-04-08T06:11:56.000000Z",
  //     "third_last_chapter_number": "11",
  //     "third_last_chapter_slug": "11",
  //     "third_last_chapter_created_at": "2024-04-04T07:12:06.000000Z",
  //     "views_count": 29235,
  //     "bookmarks_count": 272,
  //     "chapters_count": 13,
  //     "comments_count": 1,
  //     "users_rated_count": 4,
  //     "rating": 8,
  //     "is_new": 0
  //   },
  //   {
  //     "id": 446918,
  //     "title": "The Main Characters That Only I Know",
  //     "slug": "the-main-characters-that-only-i-know",
  //     "cover": "manga_446918-6637684979.jpeg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":655492,\"chapter_number\":\"23\",\"slug\":\"23\",\"created_at\":\"2024-04-17T00:13:55.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "23",
  //     "last_chapter_slug": "23",
  //     "last_chapter_created_at": "2024-04-17T00:13:55.000000Z",
  //     "second_last_chapter_number": "22",
  //     "second_last_chapter_slug": "22",
  //     "second_last_chapter_created_at": "2024-04-13T02:16:27.000000Z",
  //     "third_last_chapter_number": "21",
  //     "third_last_chapter_slug": "21",
  //     "third_last_chapter_created_at": "2024-04-07T17:21:28.000000Z",
  //     "views_count": 15824,
  //     "bookmarks_count": 106,
  //     "chapters_count": 23,
  //     "comments_count": 0,
  //     "users_rated_count": 2,
  //     "rating": 10,
  //     "is_new": 1
  //   },
  //   {
  //     "id": 445280,
  //     "title": "Primal Hunter",
  //     "slug": "primal-hunter",
  //     "cover": "manga_445280-4506638579.jpg",
  //     "published": 1,
  //     "new_chapters": "{\"chapters\":[{\"id\":654974,\"chapter_number\":\"20\",\"slug\":\"20\",\"created_at\":\"2024-04-15T03:53:14.000000Z\"}],\"count\":1}",
  //     "last_chapter_number": "20",
  //     "last_chapter_slug": "20",
  //     "last_chapter_created_at": "2024-04-15T03:53:14.000000Z",
  //     "second_last_chapter_number": "19",
  //     "second_last_chapter_slug": "19",
  //     "second_last_chapter_created_at": "2024-04-08T04:43:19.000000Z",
  //     "third_last_chapter_number": "18",
  //     "third_last_chapter_slug": "18",
  //     "third_last_chapter_created_at": "2024-04-08T04:42:22.000000Z",
  //     "views_count": 31395,
  //     "bookmarks_count": 110,
  //     "chapters_count": 20,
  //     "comments_count": 1,
  //     "users_rated_count": 2,
  //     "rating": 10,
  //     "is_new": 0
  //   }
  // ]
  const { width } = Dimensions.get('window');

  return (
  <>
    <EachHeaderSection title={title} showViewAll={true} loading={loading} OnPress={()=>{
      navigation.navigate("ViewAllManga",{showRank, title, data})
    }}/>
    {!loading && <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
      {data.slice(0,6).map((item,i) => <EachMangaCard key={i} id={item.id} image={item.cover} slug={item.slug} name={item.title} rank={showRank ? i + 1 : null}/>)}
    </View>}
    {loading && <SimpleLoading containerStyle={{height:(width / 2.2) * 2}}/>}
  </>
  );
});

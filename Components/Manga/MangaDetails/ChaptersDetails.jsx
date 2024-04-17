import { memo } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import { Dimensions, View } from "react-native";
import { EachMangaChapterCard } from "../EachMangaChapterCard";
import { EachHeaderSection } from "../Home/EachHeaderSection";
import { useNavigation } from "@react-navigation/native";

export const ChaptersDetails = memo(({image}) => {
  const {width} = Dimensions.get("window");
  const data = [
    {
      "id": 317374,
      "chapter_number": "200",
      "slug": "200",
      "title": null,
      "created_at": "2023-05-31T07:12:24.000000Z"
    },
    {
      "id": 315583,
      "chapter_number": "199",
      "slug": "199",
      "title": null,
      "created_at": "2023-05-24T07:11:56.000000Z"
    },
    {
      "id": 313829,
      "chapter_number": "198",
      "slug": "198",
      "title": null,
      "created_at": "2023-05-17T06:33:08.000000Z"
    },
    {
      "id": 311943,
      "chapter_number": "197",
      "slug": "197",
      "title": null,
      "created_at": "2023-05-10T06:47:32.000000Z"
    },
    {
      "id": 310841,
      "chapter_number": "196",
      "slug": "196",
      "title": null,
      "created_at": "2023-05-03T08:40:02.000000Z"
    },
    {
      "id": 309573,
      "chapter_number": "195",
      "slug": "195",
      "title": null,
      "created_at": "2023-04-26T06:43:03.000000Z"
    },
    {
      "id": 308369,
      "chapter_number": "194",
      "slug": "194",
      "title": null,
      "created_at": "2023-04-19T06:52:30.000000Z"
    },
    {
      "id": 306877,
      "chapter_number": "193",
      "slug": "193",
      "title": null,
      "created_at": "2023-04-12T07:12:02.000000Z"
    },
    {
      "id": 305582,
      "chapter_number": "192",
      "slug": "192",
      "title": null,
      "created_at": "2023-04-05T07:40:15.000000Z"
    },
    {
      "id": 303989,
      "chapter_number": "191",
      "slug": "191",
      "title": null,
      "created_at": "2023-03-29T07:12:11.000000Z"
    },
    {
      "id": 302286,
      "chapter_number": "190",
      "slug": "190",
      "title": null,
      "created_at": "2023-03-22T07:23:53.000000Z"
    },
    {
      "id": 299044,
      "chapter_number": "189",
      "slug": "189",
      "title": null,
      "created_at": "2023-03-15T07:12:12.000000Z"
    },
    {
      "id": 299043,
      "chapter_number": "188",
      "slug": "188",
      "title": null,
      "created_at": "2023-03-15T07:11:51.000000Z"
    },
    {
      "id": 290339,
      "chapter_number": "187",
      "slug": "187",
      "title": null,
      "created_at": "2023-03-01T06:47:41.000000Z"
    },
    {
      "id": 286235,
      "chapter_number": "186",
      "slug": "186",
      "title": null,
      "created_at": "2023-02-22T05:42:18.000000Z"
    },
    {
      "id": 282887,
      "chapter_number": "185",
      "slug": "185",
      "title": null,
      "created_at": "2023-02-15T05:53:19.000000Z"
    },
    {
      "id": 281140,
      "chapter_number": "184",
      "slug": "184",
      "title": null,
      "created_at": "2023-02-08T06:22:44.000000Z"
    },
    {
      "id": 277365,
      "chapter_number": "183",
      "slug": "183",
      "title": null,
      "created_at": "2023-02-01T16:25:00.000000Z"
    },
    {
      "id": 269305,
      "chapter_number": "182",
      "slug": "182",
      "title": null,
      "created_at": "2023-01-25T09:33:03.000000Z"
    },
    {
      "id": 263836,
      "chapter_number": "181",
      "slug": "181",
      "title": null,
      "created_at": "2023-01-20T12:01:05.000000Z"
    },
    {
      "id": 263837,
      "chapter_number": "180",
      "slug": "180",
      "title": null,
      "created_at": "2023-01-20T12:10:57.000000Z"
    },
    {
      "id": 494760,
      "chapter_number": "179.2",
      "slug": "179-2",
      "title": null,
      "created_at": "2023-10-14T05:36:41.000000Z"
    },
    {
      "id": 494757,
      "chapter_number": "179.1",
      "slug": "179-1",
      "title": null,
      "created_at": "2023-10-14T05:36:10.000000Z"
    },
    {
      "id": 156689,
      "chapter_number": "179",
      "slug": "179",
      "title": null,
      "created_at": "2021-12-29T04:33:15.000000Z"
    },
    {
      "id": 152806,
      "chapter_number": "178",
      "slug": "178",
      "title": null,
      "created_at": "2021-12-22T04:35:28.000000Z"
    },
    {
      "id": 147861,
      "chapter_number": "177",
      "slug": "177",
      "title": null,
      "created_at": "2021-12-15T05:56:20.000000Z"
    },
    {
      "id": 140384,
      "chapter_number": "176",
      "slug": "176",
      "title": null,
      "created_at": "2021-12-08T05:06:42.000000Z"
    },
    {
      "id": 140385,
      "chapter_number": "175",
      "slug": "175",
      "title": null,
      "created_at": "2021-12-08T05:06:53.000000Z"
    },
    {
      "id": 140386,
      "chapter_number": "174",
      "slug": "174",
      "title": null,
      "created_at": "2021-12-08T05:07:04.000000Z"
    },
    {
      "id": 140387,
      "chapter_number": "173",
      "slug": "173",
      "title": null,
      "created_at": "2021-12-08T05:07:13.000000Z"
    },
    {
      "id": 136935,
      "chapter_number": "172",
      "slug": "172",
      "title": null,
      "created_at": "2021-11-03T11:18:57.000000Z"
    },
    {
      "id": 133156,
      "chapter_number": "171",
      "slug": "171",
      "title": null,
      "created_at": "2021-10-27T10:33:08.000000Z"
    },
    {
      "id": 126364,
      "chapter_number": "170",
      "slug": "170",
      "title": null,
      "created_at": "2021-10-20T11:18:18.000000Z"
    },
    {
      "id": 121410,
      "chapter_number": "169",
      "slug": "169",
      "title": null,
      "created_at": "2021-10-13T12:01:52.000000Z"
    },
    {
      "id": 119862,
      "chapter_number": "168",
      "slug": "168",
      "title": null,
      "created_at": "2021-09-22T11:21:17.000000Z"
    },
    {
      "id": 119315,
      "chapter_number": "167",
      "slug": "167",
      "title": null,
      "created_at": "2021-09-15T11:40:58.000000Z"
    },
    {
      "id": 118017,
      "chapter_number": "165",
      "slug": "165",
      "title": null,
      "created_at": "2021-09-01T11:42:16.000000Z"
    },
    {
      "id": 117423,
      "chapter_number": "164",
      "slug": "164",
      "title": null,
      "created_at": "2021-08-25T11:20:56.000000Z"
    },
    {
      "id": 115992,
      "chapter_number": "163",
      "slug": "163",
      "title": null,
      "created_at": "2021-08-18T12:10:07.000000Z"
    },
    {
      "id": 113100,
      "chapter_number": "162",
      "slug": "162",
      "title": null,
      "created_at": "2021-08-11T12:37:08.000000Z"
    },
    {
      "id": 105326,
      "chapter_number": "161",
      "slug": "161",
      "title": null,
      "created_at": "2021-08-04T16:17:03.000000Z"
    },
    {
      "id": 103642,
      "chapter_number": "160",
      "slug": "160",
      "title": null,
      "created_at": "2021-07-28T14:10:17.000000Z"
    },
    {
      "id": 103087,
      "chapter_number": "159",
      "slug": "159",
      "title": null,
      "created_at": "2021-07-21T13:10:04.000000Z"
    },
    {
      "id": 102621,
      "chapter_number": "158",
      "slug": "158",
      "title": null,
      "created_at": "2021-07-14T13:10:04.000000Z"
    },
    {
      "id": 101939,
      "chapter_number": "157",
      "slug": "157",
      "title": null,
      "created_at": "2021-07-07T13:11:26.000000Z"
    },
    {
      "id": 101329,
      "chapter_number": "156",
      "slug": "156",
      "title": null,
      "created_at": "2021-06-30T12:57:28.000000Z"
    },
    {
      "id": 98648,
      "chapter_number": "155",
      "slug": "155",
      "title": null,
      "created_at": "2021-06-09T13:20:04.000000Z"
    },
    {
      "id": 97899,
      "chapter_number": "154",
      "slug": "154",
      "title": null,
      "created_at": "2021-06-02T13:40:19.000000Z"
    },
    {
      "id": 97334,
      "chapter_number": "153",
      "slug": "153",
      "title": null,
      "created_at": "2021-05-26T13:10:04.000000Z"
    },
    {
      "id": 96976,
      "chapter_number": "152",
      "slug": "152",
      "title": null,
      "created_at": "2021-05-19T13:20:07.000000Z"
    },
    {
      "id": 96598,
      "chapter_number": "151",
      "slug": "151",
      "title": null,
      "created_at": "2021-05-12T06:50:12.000000Z"
    },
    {
      "id": 96193,
      "chapter_number": "150",
      "slug": "150",
      "title": null,
      "created_at": "2021-05-05T06:34:20.000000Z"
    },
    {
      "id": 95062,
      "chapter_number": "149",
      "slug": "149",
      "title": null,
      "created_at": "2021-04-28T06:41:58.000000Z"
    },
    {
      "id": 94687,
      "chapter_number": "148",
      "slug": "148",
      "title": null,
      "created_at": "2021-04-21T06:12:18.000000Z"
    },
    {
      "id": 94159,
      "chapter_number": "147",
      "slug": "147",
      "title": null,
      "created_at": "2021-04-14T06:04:07.000000Z"
    },
    {
      "id": 92825,
      "chapter_number": "146",
      "slug": "146",
      "title": null,
      "created_at": "2021-03-31T05:40:06.000000Z"
    },
    {
      "id": 91917,
      "chapter_number": "145",
      "slug": "145",
      "title": null,
      "created_at": "2021-03-24T07:22:04.000000Z"
    },
    {
      "id": 90822,
      "chapter_number": "144",
      "slug": "144",
      "title": null,
      "created_at": "2021-03-17T07:11:32.000000Z"
    },
    {
      "id": 88720,
      "chapter_number": "143",
      "slug": "143",
      "title": null,
      "created_at": "2021-03-10T05:50:55.000000Z"
    },
    {
      "id": 86703,
      "chapter_number": "142",
      "slug": "142",
      "title": null,
      "created_at": "2021-03-03T06:11:20.000000Z"
    },
    {
      "id": 85624,
      "chapter_number": "141",
      "slug": "141",
      "title": null,
      "created_at": "2021-02-24T07:15:14.000000Z"
    },
    {
      "id": 85105,
      "chapter_number": "140",
      "slug": "140",
      "title": null,
      "created_at": "2021-02-17T07:11:07.000000Z"
    },
    {
      "id": 84080,
      "chapter_number": "139",
      "slug": "139",
      "title": null,
      "created_at": "2021-02-10T06:32:15.000000Z"
    },
    {
      "id": 83268,
      "chapter_number": "138",
      "slug": "138",
      "title": null,
      "created_at": "2021-02-03T06:55:08.000000Z"
    },
    {
      "id": 82247,
      "chapter_number": "137",
      "slug": "137",
      "title": null,
      "created_at": "2021-01-27T07:00:59.000000Z"
    },
    {
      "id": 79816,
      "chapter_number": "136",
      "slug": "136",
      "title": null,
      "created_at": "2021-01-20T06:20:16.000000Z"
    },
    {
      "id": 78377,
      "chapter_number": "135",
      "slug": "135",
      "title": null,
      "created_at": "2021-01-13T07:00:43.000000Z"
    },
    {
      "id": 77493,
      "chapter_number": "134",
      "slug": "134",
      "title": null,
      "created_at": "2021-01-06T06:50:16.000000Z"
    },
    {
      "id": 76270,
      "chapter_number": "133",
      "slug": "133",
      "title": null,
      "created_at": "2020-12-30T07:00:26.000000Z"
    },
    {
      "id": 74007,
      "chapter_number": "132",
      "slug": "132",
      "title": null,
      "created_at": "2020-12-23T08:40:06.000000Z"
    },
    {
      "id": 68285,
      "chapter_number": "131",
      "slug": "131",
      "title": null,
      "created_at": "2020-12-16T10:15:15.000000Z"
    },
    {
      "id": 57457,
      "chapter_number": "130",
      "slug": "130",
      "title": null,
      "created_at": "2020-12-14T12:56:20.000000Z"
    },
    {
      "id": 57467,
      "chapter_number": "129",
      "slug": "129",
      "title": null,
      "created_at": "2020-12-14T12:56:24.000000Z"
    },
    {
      "id": 57474,
      "chapter_number": "128",
      "slug": "128",
      "title": null,
      "created_at": "2020-12-14T12:56:28.000000Z"
    },
    {
      "id": 57487,
      "chapter_number": "127",
      "slug": "127",
      "title": null,
      "created_at": "2020-12-14T12:56:34.000000Z"
    },
    {
      "id": 57498,
      "chapter_number": "126",
      "slug": "126",
      "title": null,
      "created_at": "2020-12-14T12:56:40.000000Z"
    },
    {
      "id": 57503,
      "chapter_number": "125",
      "slug": "125",
      "title": null,
      "created_at": "2020-12-14T12:56:44.000000Z"
    },
    {
      "id": 57513,
      "chapter_number": "124",
      "slug": "124",
      "title": null,
      "created_at": "2020-12-14T12:56:49.000000Z"
    },
    {
      "id": 57523,
      "chapter_number": "123",
      "slug": "123",
      "title": null,
      "created_at": "2020-12-14T12:56:53.000000Z"
    },
    {
      "id": 57529,
      "chapter_number": "122",
      "slug": "122",
      "title": null,
      "created_at": "2020-12-14T12:56:56.000000Z"
    },
    {
      "id": 57546,
      "chapter_number": "121",
      "slug": "121",
      "title": null,
      "created_at": "2020-12-14T12:57:04.000000Z"
    },
    {
      "id": 57556,
      "chapter_number": "120",
      "slug": "120",
      "title": null,
      "created_at": "2020-12-14T12:57:12.000000Z"
    },
    {
      "id": 57564,
      "chapter_number": "119",
      "slug": "119",
      "title": null,
      "created_at": "2020-12-14T12:57:17.000000Z"
    },
    {
      "id": 57570,
      "chapter_number": "118",
      "slug": "118",
      "title": null,
      "created_at": "2020-12-14T12:57:22.000000Z"
    },
    {
      "id": 57578,
      "chapter_number": "117",
      "slug": "117",
      "title": null,
      "created_at": "2020-12-14T12:57:26.000000Z"
    },
    {
      "id": 57587,
      "chapter_number": "116",
      "slug": "116",
      "title": null,
      "created_at": "2020-12-14T12:57:30.000000Z"
    },
    {
      "id": 57595,
      "chapter_number": "115",
      "slug": "115",
      "title": null,
      "created_at": "2020-12-14T12:57:35.000000Z"
    },
    {
      "id": 57601,
      "chapter_number": "114",
      "slug": "114",
      "title": null,
      "created_at": "2020-12-14T12:57:39.000000Z"
    },
    {
      "id": 57608,
      "chapter_number": "113",
      "slug": "113",
      "title": null,
      "created_at": "2020-12-14T12:57:44.000000Z"
    },
    {
      "id": 57616,
      "chapter_number": "112",
      "slug": "112",
      "title": null,
      "created_at": "2020-12-14T12:57:50.000000Z"
    },
    {
      "id": 57631,
      "chapter_number": "111",
      "slug": "111",
      "title": null,
      "created_at": "2020-12-14T12:57:56.000000Z"
    },
    {
      "id": 147862,
      "chapter_number": "110.5",
      "slug": "110.5",
      "title": null,
      "created_at": "2021-12-15T05:57:27.000000Z"
    },
    {
      "id": 57655,
      "chapter_number": "110",
      "slug": "110",
      "title": null,
      "created_at": "2020-12-14T12:58:09.000000Z"
    },
    {
      "id": 57676,
      "chapter_number": "109",
      "slug": "109",
      "title": null,
      "created_at": "2020-12-14T12:58:20.000000Z"
    },
    {
      "id": 57708,
      "chapter_number": "108",
      "slug": "108",
      "title": null,
      "created_at": "2020-12-14T12:58:34.000000Z"
    },
    {
      "id": 57729,
      "chapter_number": "107",
      "slug": "107",
      "title": null,
      "created_at": "2020-12-14T12:58:47.000000Z"
    },
    {
      "id": 57754,
      "chapter_number": "106",
      "slug": "106",
      "title": null,
      "created_at": "2020-12-14T12:59:01.000000Z"
    },
    {
      "id": 57780,
      "chapter_number": "105",
      "slug": "105",
      "title": null,
      "created_at": "2020-12-14T12:59:17.000000Z"
    },
    {
      "id": 57804,
      "chapter_number": "104",
      "slug": "104",
      "title": null,
      "created_at": "2020-12-14T12:59:31.000000Z"
    },
    {
      "id": 57832,
      "chapter_number": "103",
      "slug": "103",
      "title": null,
      "created_at": "2020-12-14T12:59:50.000000Z"
    },
    {
      "id": 57855,
      "chapter_number": "102",
      "slug": "102",
      "title": null,
      "created_at": "2020-12-14T13:00:05.000000Z"
    },
    {
      "id": 57878,
      "chapter_number": "101",
      "slug": "101",
      "title": null,
      "created_at": "2020-12-14T13:00:18.000000Z"
    },
    {
      "id": 57906,
      "chapter_number": "100",
      "slug": "100",
      "title": null,
      "created_at": "2020-12-14T13:00:36.000000Z"
    },
    {
      "id": 57943,
      "chapter_number": "99",
      "slug": "99",
      "title": null,
      "created_at": "2020-12-14T13:00:53.000000Z"
    },
    {
      "id": 57968,
      "chapter_number": "98",
      "slug": "98",
      "title": null,
      "created_at": "2020-12-14T13:01:07.000000Z"
    },
    {
      "id": 57993,
      "chapter_number": "97",
      "slug": "97",
      "title": null,
      "created_at": "2020-12-14T13:01:20.000000Z"
    },
    {
      "id": 58021,
      "chapter_number": "96",
      "slug": "96",
      "title": null,
      "created_at": "2020-12-14T13:01:35.000000Z"
    },
    {
      "id": 58057,
      "chapter_number": "95",
      "slug": "95",
      "title": null,
      "created_at": "2020-12-14T13:01:52.000000Z"
    },
    {
      "id": 58090,
      "chapter_number": "94",
      "slug": "94",
      "title": null,
      "created_at": "2020-12-14T13:02:11.000000Z"
    },
    {
      "id": 58108,
      "chapter_number": "93",
      "slug": "93",
      "title": null,
      "created_at": "2020-12-14T13:02:22.000000Z"
    },
    {
      "id": 58132,
      "chapter_number": "92",
      "slug": "92",
      "title": null,
      "created_at": "2020-12-14T13:02:34.000000Z"
    },
    {
      "id": 58154,
      "chapter_number": "91",
      "slug": "91",
      "title": null,
      "created_at": "2020-12-14T13:02:43.000000Z"
    },
    {
      "id": 58177,
      "chapter_number": "90",
      "slug": "90",
      "title": null,
      "created_at": "2020-12-14T13:02:54.000000Z"
    },
    {
      "id": 58201,
      "chapter_number": "89",
      "slug": "89",
      "title": null,
      "created_at": "2020-12-14T13:03:07.000000Z"
    },
    {
      "id": 58224,
      "chapter_number": "88",
      "slug": "88",
      "title": null,
      "created_at": "2020-12-14T13:03:20.000000Z"
    },
    {
      "id": 58248,
      "chapter_number": "87",
      "slug": "87",
      "title": null,
      "created_at": "2020-12-14T13:03:32.000000Z"
    },
    {
      "id": 58269,
      "chapter_number": "86",
      "slug": "86",
      "title": null,
      "created_at": "2020-12-14T13:03:42.000000Z"
    },
    {
      "id": 58295,
      "chapter_number": "85",
      "slug": "85",
      "title": null,
      "created_at": "2020-12-14T13:03:54.000000Z"
    },
    {
      "id": 58312,
      "chapter_number": "84",
      "slug": "84",
      "title": null,
      "created_at": "2020-12-14T13:04:05.000000Z"
    },
    {
      "id": 58338,
      "chapter_number": "83",
      "slug": "83",
      "title": null,
      "created_at": "2020-12-14T13:04:19.000000Z"
    },
    {
      "id": 58368,
      "chapter_number": "82",
      "slug": "82",
      "title": null,
      "created_at": "2020-12-14T13:04:37.000000Z"
    },
    {
      "id": 58403,
      "chapter_number": "81",
      "slug": "81",
      "title": null,
      "created_at": "2020-12-14T13:04:58.000000Z"
    },
    {
      "id": 58431,
      "chapter_number": "80",
      "slug": "80",
      "title": null,
      "created_at": "2020-12-14T13:05:16.000000Z"
    },
    {
      "id": 58461,
      "chapter_number": "79",
      "slug": "79",
      "title": null,
      "created_at": "2020-12-14T13:05:33.000000Z"
    },
    {
      "id": 58484,
      "chapter_number": "78",
      "slug": "78",
      "title": null,
      "created_at": "2020-12-14T13:05:45.000000Z"
    },
    {
      "id": 58505,
      "chapter_number": "77",
      "slug": "77",
      "title": null,
      "created_at": "2020-12-14T13:05:57.000000Z"
    },
    {
      "id": 58532,
      "chapter_number": "76",
      "slug": "76",
      "title": null,
      "created_at": "2020-12-14T13:06:10.000000Z"
    },
    {
      "id": 58553,
      "chapter_number": "75",
      "slug": "75",
      "title": null,
      "created_at": "2020-12-14T13:06:22.000000Z"
    },
    {
      "id": 58574,
      "chapter_number": "74",
      "slug": "74",
      "title": null,
      "created_at": "2020-12-14T13:06:32.000000Z"
    },
    {
      "id": 58596,
      "chapter_number": "73",
      "slug": "73",
      "title": null,
      "created_at": "2020-12-14T13:06:43.000000Z"
    },
    {
      "id": 58629,
      "chapter_number": "72",
      "slug": "72",
      "title": null,
      "created_at": "2020-12-14T13:07:02.000000Z"
    },
    {
      "id": 58663,
      "chapter_number": "71",
      "slug": "71",
      "title": null,
      "created_at": "2020-12-14T13:07:18.000000Z"
    },
    {
      "id": 58694,
      "chapter_number": "70",
      "slug": "70",
      "title": null,
      "created_at": "2020-12-14T13:07:34.000000Z"
    },
    {
      "id": 58735,
      "chapter_number": "69",
      "slug": "69",
      "title": null,
      "created_at": "2020-12-14T13:07:58.000000Z"
    },
    {
      "id": 58776,
      "chapter_number": "68",
      "slug": "68",
      "title": null,
      "created_at": "2020-12-14T13:08:18.000000Z"
    },
    {
      "id": 58807,
      "chapter_number": "67",
      "slug": "67",
      "title": null,
      "created_at": "2020-12-14T13:08:31.000000Z"
    },
    {
      "id": 58842,
      "chapter_number": "66",
      "slug": "66",
      "title": null,
      "created_at": "2020-12-14T13:08:46.000000Z"
    },
    {
      "id": 58878,
      "chapter_number": "65",
      "slug": "65",
      "title": null,
      "created_at": "2020-12-14T13:09:02.000000Z"
    },
    {
      "id": 58905,
      "chapter_number": "64",
      "slug": "64",
      "title": null,
      "created_at": "2020-12-14T13:09:15.000000Z"
    },
    {
      "id": 58920,
      "chapter_number": "63",
      "slug": "63",
      "title": null,
      "created_at": "2020-12-14T13:09:26.000000Z"
    },
    {
      "id": 58944,
      "chapter_number": "62",
      "slug": "62",
      "title": null,
      "created_at": "2020-12-14T13:09:36.000000Z"
    },
    {
      "id": 58965,
      "chapter_number": "61",
      "slug": "61",
      "title": null,
      "created_at": "2020-12-14T13:09:48.000000Z"
    },
    {
      "id": 58988,
      "chapter_number": "60",
      "slug": "60",
      "title": null,
      "created_at": "2020-12-14T13:10:01.000000Z"
    },
    {
      "id": 59012,
      "chapter_number": "59",
      "slug": "59",
      "title": null,
      "created_at": "2020-12-14T13:10:13.000000Z"
    },
    {
      "id": 59052,
      "chapter_number": "58",
      "slug": "58",
      "title": null,
      "created_at": "2020-12-14T13:10:30.000000Z"
    },
    {
      "id": 59085,
      "chapter_number": "57",
      "slug": "57",
      "title": null,
      "created_at": "2020-12-14T13:10:43.000000Z"
    },
    {
      "id": 59101,
      "chapter_number": "56",
      "slug": "56",
      "title": null,
      "created_at": "2020-12-14T13:10:51.000000Z"
    },
    {
      "id": 59113,
      "chapter_number": "55",
      "slug": "55",
      "title": null,
      "created_at": "2020-12-14T13:10:57.000000Z"
    },
    {
      "id": 59127,
      "chapter_number": "54",
      "slug": "54",
      "title": null,
      "created_at": "2020-12-14T13:11:04.000000Z"
    },
    {
      "id": 59143,
      "chapter_number": "53",
      "slug": "53",
      "title": null,
      "created_at": "2020-12-14T13:11:13.000000Z"
    },
    {
      "id": 59157,
      "chapter_number": "52",
      "slug": "52",
      "title": null,
      "created_at": "2020-12-14T13:11:22.000000Z"
    },
    {
      "id": 59172,
      "chapter_number": "51",
      "slug": "51",
      "title": null,
      "created_at": "2020-12-14T13:11:32.000000Z"
    },
    {
      "id": 59184,
      "chapter_number": "50",
      "slug": "50",
      "title": null,
      "created_at": "2020-12-14T13:11:42.000000Z"
    },
    {
      "id": 59194,
      "chapter_number": "49",
      "slug": "49",
      "title": null,
      "created_at": "2020-12-14T13:11:49.000000Z"
    },
    {
      "id": 59205,
      "chapter_number": "48",
      "slug": "48",
      "title": null,
      "created_at": "2020-12-14T13:11:55.000000Z"
    },
    {
      "id": 59212,
      "chapter_number": "47",
      "slug": "47",
      "title": null,
      "created_at": "2020-12-14T13:12:01.000000Z"
    },
    {
      "id": 59222,
      "chapter_number": "46",
      "slug": "46",
      "title": null,
      "created_at": "2020-12-14T13:12:06.000000Z"
    },
    {
      "id": 59241,
      "chapter_number": "45",
      "slug": "45",
      "title": null,
      "created_at": "2020-12-14T13:12:17.000000Z"
    },
    {
      "id": 59250,
      "chapter_number": "44",
      "slug": "44",
      "title": null,
      "created_at": "2020-12-14T13:12:24.000000Z"
    },
    {
      "id": 59261,
      "chapter_number": "43",
      "slug": "43",
      "title": null,
      "created_at": "2020-12-14T13:12:31.000000Z"
    },
    {
      "id": 59270,
      "chapter_number": "42",
      "slug": "42",
      "title": null,
      "created_at": "2020-12-14T13:12:38.000000Z"
    },
    {
      "id": 59281,
      "chapter_number": "41",
      "slug": "41",
      "title": null,
      "created_at": "2020-12-14T13:12:46.000000Z"
    },
    {
      "id": 59291,
      "chapter_number": "40",
      "slug": "40",
      "title": null,
      "created_at": "2020-12-14T13:12:53.000000Z"
    },
    {
      "id": 59304,
      "chapter_number": "39",
      "slug": "39",
      "title": null,
      "created_at": "2020-12-14T13:13:01.000000Z"
    },
    {
      "id": 59315,
      "chapter_number": "38",
      "slug": "38",
      "title": null,
      "created_at": "2020-12-14T13:13:10.000000Z"
    },
    {
      "id": 59326,
      "chapter_number": "37",
      "slug": "37",
      "title": null,
      "created_at": "2020-12-14T13:13:17.000000Z"
    },
    {
      "id": 59336,
      "chapter_number": "36",
      "slug": "36",
      "title": null,
      "created_at": "2020-12-14T13:13:25.000000Z"
    },
    {
      "id": 59347,
      "chapter_number": "35",
      "slug": "35",
      "title": null,
      "created_at": "2020-12-14T13:13:33.000000Z"
    },
    {
      "id": 59361,
      "chapter_number": "34",
      "slug": "34",
      "title": null,
      "created_at": "2020-12-14T13:13:43.000000Z"
    },
    {
      "id": 59372,
      "chapter_number": "33",
      "slug": "33",
      "title": null,
      "created_at": "2020-12-14T13:13:51.000000Z"
    },
    {
      "id": 59381,
      "chapter_number": "32",
      "slug": "32",
      "title": null,
      "created_at": "2020-12-14T13:13:58.000000Z"
    },
    {
      "id": 59392,
      "chapter_number": "31",
      "slug": "31",
      "title": null,
      "created_at": "2020-12-14T13:14:06.000000Z"
    },
    {
      "id": 59404,
      "chapter_number": "30",
      "slug": "30",
      "title": null,
      "created_at": "2020-12-14T13:14:15.000000Z"
    },
    {
      "id": 59415,
      "chapter_number": "29",
      "slug": "29",
      "title": null,
      "created_at": "2020-12-14T13:14:23.000000Z"
    },
    {
      "id": 59428,
      "chapter_number": "28",
      "slug": "28",
      "title": null,
      "created_at": "2020-12-14T13:14:31.000000Z"
    },
    {
      "id": 59437,
      "chapter_number": "27",
      "slug": "27",
      "title": null,
      "created_at": "2020-12-14T13:14:40.000000Z"
    },
    {
      "id": 59450,
      "chapter_number": "26",
      "slug": "26",
      "title": null,
      "created_at": "2020-12-14T13:14:47.000000Z"
    },
    {
      "id": 59459,
      "chapter_number": "25",
      "slug": "25",
      "title": null,
      "created_at": "2020-12-14T13:14:54.000000Z"
    },
    {
      "id": 59470,
      "chapter_number": "24",
      "slug": "24",
      "title": null,
      "created_at": "2020-12-14T13:15:02.000000Z"
    },
    {
      "id": 59484,
      "chapter_number": "23",
      "slug": "23",
      "title": null,
      "created_at": "2020-12-14T13:15:10.000000Z"
    },
    {
      "id": 59494,
      "chapter_number": "22",
      "slug": "22",
      "title": null,
      "created_at": "2020-12-14T13:15:19.000000Z"
    },
    {
      "id": 59502,
      "chapter_number": "21",
      "slug": "21",
      "title": null,
      "created_at": "2020-12-14T13:15:27.000000Z"
    },
    {
      "id": 59510,
      "chapter_number": "20",
      "slug": "20",
      "title": null,
      "created_at": "2020-12-14T13:15:34.000000Z"
    },
    {
      "id": 59516,
      "chapter_number": "19",
      "slug": "19",
      "title": null,
      "created_at": "2020-12-14T13:15:42.000000Z"
    },
    {
      "id": 59525,
      "chapter_number": "18",
      "slug": "18",
      "title": null,
      "created_at": "2020-12-14T13:15:51.000000Z"
    },
    {
      "id": 59534,
      "chapter_number": "17",
      "slug": "17",
      "title": null,
      "created_at": "2020-12-14T13:15:59.000000Z"
    },
    {
      "id": 59544,
      "chapter_number": "16",
      "slug": "16",
      "title": null,
      "created_at": "2020-12-14T13:16:09.000000Z"
    },
    {
      "id": 59553,
      "chapter_number": "15",
      "slug": "15",
      "title": null,
      "created_at": "2020-12-14T13:16:17.000000Z"
    },
    {
      "id": 59559,
      "chapter_number": "14",
      "slug": "14",
      "title": null,
      "created_at": "2020-12-14T13:16:24.000000Z"
    },
    {
      "id": 59566,
      "chapter_number": "13",
      "slug": "13",
      "title": null,
      "created_at": "2020-12-14T13:16:33.000000Z"
    },
    {
      "id": 59574,
      "chapter_number": "12",
      "slug": "12",
      "title": null,
      "created_at": "2020-12-14T13:16:41.000000Z"
    },
    {
      "id": 59581,
      "chapter_number": "11",
      "slug": "11",
      "title": null,
      "created_at": "2020-12-14T13:16:49.000000Z"
    },
    {
      "id": 59588,
      "chapter_number": "10",
      "slug": "10",
      "title": null,
      "created_at": "2020-12-14T13:16:58.000000Z"
    },
    {
      "id": 59595,
      "chapter_number": "9",
      "slug": "9",
      "title": null,
      "created_at": "2020-12-14T13:17:05.000000Z"
    },
    {
      "id": 59603,
      "chapter_number": "8",
      "slug": "8",
      "title": null,
      "created_at": "2020-12-14T13:17:16.000000Z"
    },
    {
      "id": 59609,
      "chapter_number": "7",
      "slug": "7",
      "title": null,
      "created_at": "2020-12-14T13:17:25.000000Z"
    },
    {
      "id": 59619,
      "chapter_number": "6",
      "slug": "6",
      "title": null,
      "created_at": "2020-12-14T13:17:34.000000Z"
    },
    {
      "id": 59622,
      "chapter_number": "5",
      "slug": "5",
      "title": null,
      "created_at": "2020-12-14T13:17:40.000000Z"
    },
    {
      "id": 59629,
      "chapter_number": "4",
      "slug": "4",
      "title": null,
      "created_at": "2020-12-14T13:17:47.000000Z"
    },
    {
      "id": 59636,
      "chapter_number": "3",
      "slug": "3",
      "title": null,
      "created_at": "2020-12-14T13:17:54.000000Z"
    },
    {
      "id": 59643,
      "chapter_number": "2",
      "slug": "2",
      "title": null,
      "created_at": "2020-12-14T13:17:59.000000Z"
    },
    {
      "id": 59646,
      "chapter_number": "1",
      "slug": "1",
      "title": null,
      "created_at": "2020-12-14T13:18:05.000000Z"
    }
  ]
  const navigation = useNavigation()
  return (
    <PaddingConatiner>
        <EachHeaderSection title={"Chapters"} showViewAll={true} OnPress={()=>{
          navigation.navigate("ViewAllChapters",{data, image})
        }}/>
        <View style={{paddingHorizontal:10}}>
          <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start", gap:10}}>
            {data.slice(0,9).map((item,i) => <EachMangaChapterCard  key={i} id={item.id} image={image} slug={item.slug} chapter_number={item.chapter_number} created_at={item.created_at}/>)}
          </View>
        </View>
    </PaddingConatiner>
  );
});

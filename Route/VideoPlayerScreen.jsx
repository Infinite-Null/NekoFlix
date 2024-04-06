import { Dimensions} from "react-native";
import { Player } from "../Components/VideoplayerScreen/Player";
export const VideoPlayerScreen = ({props, navigation}) => {
  const {width, height} = Dimensions.get("window")
  return (
  <Player navigation={navigation} url={"https://www117.vipanicdn.net/streamhls/ef5b6eb7b6e88c9241044cf487333026/ep.1.1709212900.720.m3u8"}/>
  );
};


import { MainWrapper } from "../../Layout/MainWrapper";
import { LibraryRouteHeading } from "../../Component/Library/LibraryTopHeader";
import { EachLibraryCard } from "../../Component/Library/EachLibraryCard";
import { Dimensions, ScrollView, View } from "react-native";


export const Library = () => {
  const width = Dimensions.get("window").width
  return (
    <MainWrapper>
          <LibraryRouteHeading text={"Library"}/>
      <ScrollView>
        <View style={{flexWrap:'wrap', flexDirection:"row", width:width, justifyContent:"space-evenly"}}>
          <EachLibraryCard text={"Liked Songs"} image={require("../../Images/LikedSong.png")} navigate={"LikedSongs"}/>
          <EachLibraryCard text={"Liked Playlists"} image={require("../../Images/LikedPlaylist.png")} navigate={"LikedPlaylists"}/>
          <EachLibraryCard text={"About Project"} image={require("../../Images/AboutProject.png")} navigate={"AboutProject"}/>
          <View style={{width: width * 0.45}}/>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

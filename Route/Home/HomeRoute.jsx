
import { Home } from "./Home";
import { Playlist } from "../Playlist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchPage } from "../SearchPage";
import { Album } from "../Album";
import { LikedSongPage } from "../Library/LikedSongPage";
import { LikedPlaylistPage } from "../Library/LikedPlaylistPage";
import { SettingsPage } from "./SettingsPage";
import { ChangeName } from "./ChangeName";
import { SelectLanguages } from "./SelectLanguages";
const Stack = createNativeStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
      <Stack.Screen  name="HomePage" component={Home} />
      <Stack.Screen  name="Playlist" component={Playlist} />
      <Stack.Screen name={"Album"} component={Album}/>
      <Stack.Screen  name="Search" component={SearchPage} />
      <Stack.Screen name={"LikedSongs"} component={LikedSongPage}/>
      <Stack.Screen name={"LikedPlaylists"} component={LikedPlaylistPage}/>
      <Stack.Screen name={"Settings"} component={SettingsPage}/>
      <Stack.Screen name={"ChangeName"} component={ChangeName}/>
      <Stack.Screen name={"SelectLanguages"} component={SelectLanguages}/>
    </Stack.Navigator>
  );
};

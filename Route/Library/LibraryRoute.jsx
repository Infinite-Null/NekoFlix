
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Library } from "./Library";
import { SettingsPage } from "./SettingsPage";
import { SavedAnime } from "./SavedAnime";
import { AboutPage } from "./AboutPage";

const Stack = createNativeStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, animation:'fade_from_bottom'}}>
      <Stack.Screen  name="LibraryPage" component={Library} />
      <Stack.Screen  name="SettingsPage" component={SettingsPage} />
      <Stack.Screen  name="SavedAnime" component={SavedAnime} />
      <Stack.Screen  name="AboutPage" component={AboutPage} />
    </Stack.Navigator>
  );
};


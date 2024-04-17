import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Manga } from "./Manga";
import { ViewAllEachSection } from "./ViewAllEachSection";
import { MangaDetails } from "./MangaDetails";
import { MangaChaptersViewAll } from "./MangaChaptersViewAll";

const Stack = createNativeStackNavigator();
export const MangaRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'ios'}}>
      <Stack.Screen  name="Manga" component={Manga} />
      <Stack.Screen  name="ViewAllManga" component={ViewAllEachSection} />
      <Stack.Screen  name="MangaDetails" component={MangaDetails} />
      <Stack.Screen  name="ViewAllChapters" component={MangaChaptersViewAll} />
    </Stack.Navigator>
  );
};


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Library } from "./Library";
import { SavedAnime } from "./SavedAnime";
import { AboutPage } from "./AboutPage";
import { AnimeDetailPage } from "../AnimeDetailPage";
import EachCharactersDetails from "../EachCharactersDetailsPage";

const Stack = createNativeStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, animation:'ios'}}>
      <Stack.Screen  name="LibraryPage" component={Library} />
      <Stack.Screen  name="SavedAnime" component={SavedAnime} />
      <Stack.Screen  name="AboutPage" component={AboutPage} />
      <Stack.Screen  name="AnimeDetail" component={AnimeDetailPage} />
      <Stack.Screen name={"EachCharactersDetails"} component={EachCharactersDetails}/>
    </Stack.Navigator>
  );
};


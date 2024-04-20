import { Home } from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimeDetailPage } from "./AnimeDetailPage";
import EachCharactersDetails from "./EachCharactersDetailsPage";
import { ViewAllSectionsAnime } from "./ViewAllSections";
import { Discover } from "./Discover";

const Stack = createNativeStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'ios'}}>
      <Stack.Screen  name="HomePage" component={Home} />
      <Stack.Screen  name="AnimeDetail" component={AnimeDetailPage} />
      <Stack.Screen name={"EachCharactersDetails"} component={EachCharactersDetails}/>
      <Stack.Screen name={"ViewAllAnimeSection"} component={ViewAllSectionsAnime}/>
      <Stack.Screen  name="DiscoverPage" component={Discover} />
    </Stack.Navigator>
  );
};

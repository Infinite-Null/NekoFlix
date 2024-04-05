import { Home } from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimeDetailPage } from "../AnimeDetailPage";
import EachCharactersDetails from "../EachCharactersDetailsPage";

const Stack = createNativeStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
      <Stack.Screen  name="HomePage" component={Home} />
      <Stack.Screen  name="AnimeDetail" component={AnimeDetailPage} />
      <Stack.Screen name={"EachCharactersDetails"} component={EachCharactersDetails}/>
    </Stack.Navigator>
  );
};

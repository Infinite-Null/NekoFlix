
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Discover } from "./Discover";
import { AnimeDetailPage } from "../AnimeDetailPage";
import { VideoPlayerScreen } from "../VideoPlayerScreen";

const Stack = createNativeStackNavigator();

export const DiscoverRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="DiscoverPage" component={Discover} />
      <Stack.Screen  name="AnimeDetail" component={AnimeDetailPage} />
    </Stack.Navigator>
  );
};

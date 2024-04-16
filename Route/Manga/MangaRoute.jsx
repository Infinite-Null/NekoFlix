import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Manga } from "./Manga";

const Stack = createNativeStackNavigator();
export const MangaRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'ios'}}>
      <Stack.Screen  name="Manga" component={Manga} />
    </Stack.Navigator>
  );
};

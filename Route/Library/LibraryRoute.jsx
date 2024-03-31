
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Library } from "./Library";

const Stack = createNativeStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, animation:'fade_from_bottom'}}>
      <Stack.Screen  name="LibraryPage" component={Library} />
    </Stack.Navigator>
  );
};


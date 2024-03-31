import { Home } from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
      <Stack.Screen  name="HomePage" component={Home} />
    </Stack.Navigator>
  );
};

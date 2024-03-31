
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Discover } from "./Discover";

const Stack = createNativeStackNavigator();

export const DiscoverRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="DiscoverPage" component={Discover} />
    </Stack.Navigator>
  );
};

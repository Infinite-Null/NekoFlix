
import { createStackNavigator } from '@react-navigation/stack';
import { Discover } from "./Discover";

const Stack = createStackNavigator();

export const DiscoverRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="DiscoverPage" component={Discover} />
    </Stack.Navigator>
  );
};

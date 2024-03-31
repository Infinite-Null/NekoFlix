import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoute } from "./Route/RootRoute";
function App()  {
  const Stack = createNativeStackNavigator()
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#e35252',
      text: '#fbf4f4',
      white : "white",
      disabled: 'rgb(131,131,131)',
      background:'black',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="MainRoute" component={RootRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default  App

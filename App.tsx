import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoute } from "./Route/RootRoute";
import { GestureHandlerRootView } from "react-native-gesture-handler";
function App()  {
  const Stack = createNativeStackNavigator()
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#c3242b',
      text: '#fbf4f4',
      white : "white",
      disabled: 'rgb(131,131,131)',
      background:'black',
    },
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="MainRoute" component={RootRoute} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default  App

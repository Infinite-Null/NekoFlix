import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function App()  {
  const Stack = createNativeStackNavigator()
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#8EBBFF',
      text: '#F4F5FC',
      textSecondary: '#CCCCCC',
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
};
export default  App

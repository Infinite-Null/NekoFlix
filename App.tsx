import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoute } from "./Route/RootRoute";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { VideoPlayerScreen } from "./Route/VideoPlayerScreen";
import { InitialScreen } from "./Route/InitialRoute";
import { ContextState } from "./GlobalState/ContextState";
import CodePush from "react-native-code-push";
import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { RootRouteWithMangaHome } from "./Route/RootRouteWithMangaHome";
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };
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
  useEffect(()=>{
    // @ts-ignore
    CodePush.notifyAppReady()
    CodePush.checkForUpdate().then(update => {
      if (update) {
        ToastAndroid.showWithGravity(
          `App Update Available and app will be updated automatically`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        CodePush.sync(
          { installMode: CodePush.InstallMode.IMMEDIATE },
        );
      }
    });
  },[])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   <ContextState>
     <NavigationContainer theme={MyTheme}>
       <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen  name="InitialRoute" component={InitialScreen} />
         <Stack.Screen  name="MainRoute" component={RootRoute} />
         <Stack.Screen  name="MainRouteWithManga" component={RootRouteWithMangaHome} />
         <Stack.Screen  name="VideoPlayer" component={VideoPlayerScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   </ContextState>
    </GestureHandlerRootView>
  );
}
export default  CodePush(codePushOptions)(App)

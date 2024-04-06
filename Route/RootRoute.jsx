import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute } from "./Home/HomeRoute";
import { DiscoverRoute } from "./Discover/DiscoverRoute";
import { LibraryRoute } from "./Library/LibraryRoute";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getFocusedRouteNameFromRoute, useTheme } from "@react-navigation/native";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
const Tab = createBottomTabNavigator();
export const RootRoute = () => {
  const theme = useTheme()
  const width = Dimensions.get("window").width
  const style = StyleSheet.create({
    text:{
      color:theme.colors.primary,
      fontSize:width * 0.02,
      textAlign:"center",
    },
    tabIconContainer:{
      alignItems:"center",
      justifyContent:"center",
      minWidth:100,
    },
  })
  return (
    <>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false,tabBarLabelStyle:{
          fontWeight:"bold",
        },tabBarInactiveTintColor:"rgba(106,106,106,0.85)",tabBarActiveTintColor:theme.colors.primary,headerShown:false, tabBarStyle: {
          backgroundColor:theme.colors.background,
          borderColor:"rgba(28,27,27,0)"}}}>
        <Tab.Screen  options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            if (routeName === 'VideoPlayerScreen') {
              return { display: "none"}
            } else {
              return {backgroundColor: theme.colors.background, borderTopWidth:0}
            }
          }
          )(route),
          tabBarIcon: ({ color, size, focused }) => (
            <View style={style.tabIconContainer}>
              <MaterialIcons name="houseboat" color={color} size={size - 6} />
              {focused && <Text style={style.text}>Home</Text>}
            </View>
          ),
        })} name="Home" component={HomeRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <View style={style.tabIconContainer}>
             <AntDesign name="search1" color={color} size={size - 6} />
             {focused && <Text style={style.text}>Discover</Text>}
           </View>
          ),
        }} name="Discover" component={DiscoverRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <View style={style.tabIconContainer}>
              <MaterialCommunityIcons name="music-box-multiple-outline" color={color} size={size - 6} />
              {focused && <Text style={style.text}>Library</Text>}
            </View>
          ),
        }}  name="Library" component={LibraryRoute} />
      </Tab.Navigator>
    </>
  );
};

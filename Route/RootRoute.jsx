import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute } from "./Home/HomeRoute";
import { DiscoverRoute } from "./Discover/DiscoverRoute";
import { LibraryRoute } from "./Library/LibraryRoute";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
export const RootRoute = () => {
  const theme = useTheme()
  const width = Dimensions.get("window").width
  const style = StyleSheet.create({
    text:{
      color:theme.colors.primary,
      fontFamily:"Helvetica",
      fontSize:width * 0.025,
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
        },tabBarInactiveTintColor:"rgb(114,114,114)",tabBarActiveTintColor:theme.colors.primary,headerShown:false, tabBarStyle: {
          backgroundColor:theme.colors.background,
          borderColor:"rgba(28,27,27,0)"}}}>
        <Tab.Screen  options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <View style={style.tabIconContainer}>
              <MaterialIcons name="houseboat" color={color} size={size - 6} />
              {focused && <Text style={style.text}>Home</Text>}
            </View>
          ),
        }} name="Home" component={HomeRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <View style={style.tabIconContainer}>
             <Entypo name="compass" color={color} size={size - 6} />
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

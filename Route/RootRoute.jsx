import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute } from "./Home/HomeRoute";
import { DiscoverRoute } from "./Discover/DiscoverRoute";
import { LibraryRoute } from "./Library/LibraryRoute";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
export const RootRoute = () => {
  const theme = useTheme()
  return (
    <>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false,tabBarLabelStyle:{
          fontWeight:"bold",
        },tabBarInactiveTintColor:theme.colors.textSecondary,tabBarActiveTintColor:theme.colors.primary,headerShown:false, tabBarStyle: {
          backgroundColor:theme.colors.background,
          borderColor:"rgba(28,27,27,0)"}}}>
        <Tab.Screen  options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons name="home" color={color} size={size - 4} />
          ),
        }} name="Home" component={HomeRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="compass" color={color} size={size - 4} />
          ),
        }} name="Discover" component={DiscoverRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="music-box-multiple-outline" color={color} size={size - 4} />
          ),
        }}  name="Library" component={LibraryRoute} />
      </Tab.Navigator>
    </>
  );
};

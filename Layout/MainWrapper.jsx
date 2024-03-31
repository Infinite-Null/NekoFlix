import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { memo } from "react";
import { StatusBar } from "react-native";

export const MainWrapper = memo(function MainWrapper({children}) {
  const theme = useTheme()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme.colors.background}}>
      <StatusBar backgroundColor={theme.colors.background} animated={true} networkActivityIndicatorVisible={false}/>
      {children}
    </SafeAreaView>
  );
})

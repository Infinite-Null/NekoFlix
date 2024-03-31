import { StyleSheet, View } from "react-native";

export const Spacer = () => {
  const stylesheet = StyleSheet.create({
   spacerContainer:{
     height:10,
   },
  })
  return (
    <View style={stylesheet.spacerContainer}/>
  );
};

import { Dimensions, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";


export const PlainText = ({text,style, numberOfLine}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width;
  const stylesheet = StyleSheet.create({
    text:{
      fontWeight:"600",
      color:theme.colors.text,
      fontSize:width * 0.035,
      ...style,
    },
  })
  return (
    <Text numberOfLines={numberOfLine ? numberOfLine : 2}  style={stylesheet.text}>{text}</Text>
  );
};

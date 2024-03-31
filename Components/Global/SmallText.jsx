import { StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const SmallText = ({text, color, style, maxLine, selectable}) => {
  const theme = useTheme()
  const stylesheet = StyleSheet.create({
    text:{
      fontWeight:"600",
      color:theme.colors.text,
      fontSize:10,
      ...style,
    },
  })
  return (
    <Text selectable={selectable} numberOfLines={maxLine ? maxLine : 2} style={stylesheet.text}>{text}</Text>
  );
};

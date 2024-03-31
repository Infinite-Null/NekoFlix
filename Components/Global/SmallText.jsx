import { Dimensions, StyleSheet, Text } from "react-native";
export const SmallText = ({text, color, style, maxLine, selectable}) => {
  const width = Dimensions.get("window").width
  const stylesheet = StyleSheet.create({
    text:{
      fontWeight:"200",
      color:"rgb(222,222,222)",
      fontSize:width * 0.023,
      ...style,
    },
  })
  return (
    <Text selectable={selectable} numberOfLines={maxLine ? maxLine : 2} style={stylesheet.text}>{text}</Text>
  );
};

import { Dimensions, StyleSheet, Text } from "react-native";


export const PlainText = ({text,style, numberOfLine}) => {
  const width = Dimensions.get('window').width;
  const stylesheet = StyleSheet.create({
    text:{
      fontWeight:"200",
      color:"rgb(218,218,218)",
      fontSize:width * 0.035,
      ...style,
    },
  })
  return (
    <Text numberOfLines={numberOfLine ? numberOfLine : 2}  style={stylesheet.text}>{text}</Text>
  );
};

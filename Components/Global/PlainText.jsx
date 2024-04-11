import { Dimensions, StyleSheet, Text } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { GetFontSizeValue } from "../../LocalStorage/AppSettings";


export const PlainText = ({text,style, numberOfLine}) => {
  const width = Dimensions.get('window').width;
  const [FontSize, setFontSize] = useState("Medium");
  const initialSetup = useCallback(async ()=>{
    const data = await GetFontSizeValue()
    setFontSize(data)
  },[])
  useEffect(()=>{
    initialSetup()
  },[])
  function getStyle() {
    if (FontSize === "Small"){
      return {
        fontWeight:"200",
        color:"rgb(218,218,218)",
        fontSize:width * 0.025,
        ...style,
      }
    } else if (FontSize === "Medium"){
      return {
        fontWeight:"200",
        color:"rgb(218,218,218)",
        fontSize:width * 0.032,
        ...style,
      }
    } else {
      return {
        fontWeight:"200",
        color:"rgb(218,218,218)",
        fontSize:width * 0.036,
        ...style,
      }
    }
  }
  return (
    <Text numberOfLines={numberOfLine ? numberOfLine : 2}  style={getStyle()}>{text}</Text>
  );
};

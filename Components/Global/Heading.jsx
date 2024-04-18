import { Dimensions, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { memo, useCallback, useEffect, useState } from "react";
import { GetFontSizeValue } from "../../LocalStorage/AppSettings";

export const Heading = memo(({text, style}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width
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
        fontWeight: "600",
        color: theme.colors.text,
        fontSize: width * 0.040,
        ...style,
      }
    } else if (FontSize === "Medium"){
      return {
        fontWeight:"600",
        color:theme.colors.text,
        fontSize:width * 0.055,
        ...style,
      }
    } else {
      return {
        fontWeight:"600",
        color:theme.colors.text,
        fontSize:width * 0.065,
        ...style,
      }
    }
  }

  return (<Text numberOfLines={2} style={getStyle()}>{text}</Text>
  );
});

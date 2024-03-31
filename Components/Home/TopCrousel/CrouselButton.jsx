import { Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SmallText } from "../../Global/SmallText";
import AntDesign from "react-native-vector-icons/AntDesign";

export const CrouselButton = () => {
  const theme = useTheme()
  return (
    <Pressable  style={{
      backgroundColor: theme.colors.primary,
      maxWidth:100,
      alignItems:"center",
      justifyContent:"space-evenly",
      borderRadius:5,
      padding:10,
      marginVertical:10,
      flexDirection:"row",
      elevation:10,
    }}>
      <SmallText text={"Watch Now"} style={{
        fontWeight:"bold",
      }}/>
     <AntDesign name={"play"}/>
    </Pressable>
  );
};

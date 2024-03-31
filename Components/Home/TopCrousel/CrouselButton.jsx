import { Pressable } from "react-native";
import { SmallText } from "../../Global/SmallText";
import AntDesign from "react-native-vector-icons/AntDesign";

export const CrouselButton = ({text, onPress, color}) => {
  return (
    <Pressable onPress={onPress}  style={{
      backgroundColor: color,
      flex:1,
      alignItems:"center",
      justifyContent:"space-evenly",
      borderRadius:5,
      padding:10,
      marginVertical:10,
      flexDirection:"row",
      elevation:10,
    }}>
      <SmallText text={text} style={{
        fontWeight:"bold",
      }}/>
     <AntDesign name={"play"}/>
    </Pressable>
  );
};

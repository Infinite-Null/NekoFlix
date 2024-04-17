import { Pressable } from "react-native";
import { PlainText } from "../Global/PlainText";

export const EachButton = ({Containerstyle, Onpress, title, TextStyle, icon}) => {

  return (
    <Pressable style={{
      flex:1,
      backgroundColor:"rgb(251,251,251)",
      padding:10,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:5,
      flexDirection:"row",
      gap:10,
      ...Containerstyle,
    }}>
      {icon}
      <PlainText text={title} style={{
        color:"rgb(0,0,0)",
        fontWeight:"bold",
        ...TextStyle,
      }}/>
    </Pressable>
  );
};

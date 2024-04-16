import { View } from "react-native";

export const PaddingConatiner = ({children, style}) => {
  return (
    <View style={{
      paddingHorizontal:10,
      ...style,
    }}>
      {children}
    </View>
  );
};

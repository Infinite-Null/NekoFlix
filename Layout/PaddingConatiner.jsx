import { View } from "react-native";

export const PaddingConatiner = ({children}) => {
  return (
    <View style={{
      paddingHorizontal:10,
    }}>
      {children}
    </View>
  );
};

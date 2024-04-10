import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlainText } from "../Global/PlainText";
import { SpaceBetween } from "../../Layout/SpaceBetween";

export const EachMenuCard = ({name, navigate, icon}) => {
  const navigation = useNavigation()
  const style = StyleSheet.create({
    container: {
      paddingVertical: 20,
      paddingHorizontal: 15,
      marginBottom:10,
      backgroundColor: 'rgb(21,20,20)',
      borderRadius: 10,
      elevation: 5,
    },
  })
  return (
    <Pressable onPress={() => navigation.navigate(navigate)} style={style.container} >
      <SpaceBetween>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap:10,
        }}>
          {icon}
          <PlainText text={name}/>
        </View>
        <PlainText text={"→"}/>
      </SpaceBetween>
    </Pressable>
  );
};

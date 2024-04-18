import { memo } from "react";
import { Dimensions, Modal, Pressable, View } from "react-native";
import { Heading } from "../../Global/Heading";

export const ModalOption = memo(({ ModalVisible, Ascending, updateAscending, updateModalVisible }) => {
  const { width , } = Dimensions.get('window');
  return (
    <Modal visible={ModalVisible} transparent={true} animationType={"fade"}>
      <View style={{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.74)",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <Pressable style={{
          marginVertical:5,
        }} onPress={()=>{
          updateAscending(true)
          updateModalVisible(false)
        }}><Heading text={Ascending ? "▫️Ascending" : "Ascending"} style={{fontSize:Ascending ? width * 0.075 : width * 0.055}}/></Pressable>
        <Pressable style={{
          marginVertical:5,
        }} onPress={()=>{
          updateAscending(false)
          updateModalVisible(false)
        }}><Heading text={!Ascending ? "▫️Descending" : "Descending"}  style={{fontSize:Ascending ? width * 0.055 : width * 0.075}}/></Pressable>
      </View>
    </Modal>
  );
});

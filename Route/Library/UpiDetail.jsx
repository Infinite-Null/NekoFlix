import { MainWrapper } from "../../Layout/MainWrapper";
import { PlainText } from "../../Components/Global/PlainText";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import FastImage from "react-native-fast-image";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';
import { Spacer } from "../../Components/Global/Spacer";
import Feather from "react-native-vector-icons/Feather";

export const UpiDetail = () => {
  return (
    <MainWrapper>
      <PaddingConatiner>
        <Heading text={"UPI Details"} style={{textAlign:"center"}}/>
        <Spacer/>
       <View style={{
         alignItems:"center",
         justifyContent:"center",
         padding:10,
       }}>
         <FastImage source={require("../../assets/AppImages/UpiQr.png")} style={{
           height: 200,
           width: 200,
           borderRadius: 10,
         }}/>
         <Spacer/>
         <Text style={{color:"white"}}>
            Scan the QR code to donate
         </Text>
        <View style={{flexDirection:"row"}}>
          <Text style={{color:"white", fontWeight:"bold"}}>UPI : </Text>
          <Text style={{color:"white", fontWeight:"bold"}} selectable={true}>ankit.kum.sha9933@oksbi</Text>
        </View>
         <Spacer/>
         <Pressable onPress={()=>{
            Clipboard.setString("ankit.kum.sha9933@oksbi")
           ToastAndroid.showWithGravity(
             `UPI Id Copied`,
             ToastAndroid.SHORT,
             ToastAndroid.CENTER,
           );
         }} style={{flexDirection:"row", alignItems:"center", gap:10, backgroundColor:"rgb(40,38,38)", padding:10, borderRadius:10}}>
            <PlainText text={"Copy UPI"} style={{color:"white"}}/>
           <Feather name={"copy"} color={"white"}/>
         </Pressable>
       </View>
      </PaddingConatiner>
    </MainWrapper>
  );
};

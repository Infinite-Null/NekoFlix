import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { EachMenuCard } from "../../Components/Library/EachMenuCard";
import { Spacer } from "../../Components/Global/Spacer";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Linking, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { EachDonateButton } from "./AboutPage";
import { PlainText } from "../../Components/Global/PlainText";


export const Library = () => {
  const navigation = useNavigation();
  const Menus = [
    {
      name: "Saved Anime",
      navigation: "SavedAnime",
      icon:<FontAwesome name={"bookmark"} color={"white"}/>,
    },
    {
      name: "About Project",
      navigation: "AboutPage",
      icon: <Fontisto name={"info"} color={"white"}/>,
    },
  ];
  return (
    <MainWrapper>
      <PaddingConatiner >
        <Heading text={"Library"}/>
        <Spacer/>
        {Menus.map((menu, index) => {
          return (
           <EachMenuCard key={index} name={menu.name} navigate={menu.navigation} icon={menu?.icon}/>
          );
        })}
      </PaddingConatiner>
      <View style={{flex:1, justifyContent:"flex-end",
        alignItems:"flex-start", padding:10}} >
        <PlainText text={"Enjoying the app?"} nospace={true}/>
        <PlainText text={"Donate me 😁"}/>
        <Spacer/>
        <View style={{
          flexDirection:"row",
          height:50,
          gap:10,
        }}>
          <EachDonateButton image={require("../../assets/AppImages/unnamed.png")} title={"Buy Me A Coffee"} icon={<Feather name={"coffee"}/>} color={"#FFDD00"}
                            onPress={()=>{
                              Linking.openURL("https://www.buymeacoffee.com/ankitkumarshah").catch(err => console.error("Couldn't load page", err));
                            }}
          />
          <EachDonateButton onPress={()=>{
            navigation.navigate("UpiDetails")
          }} image={require("../../assets/AppImages/Upi.png")} title={"Donate Using UPI"} icon={<Feather name={"coffee"}/>} color={"#FFFFFF"}/>
        </View></View>
    </MainWrapper>
  );
};

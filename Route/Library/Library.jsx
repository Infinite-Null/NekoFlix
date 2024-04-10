import { MainWrapper } from "../../Layout/MainWrapper";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { EachMenuCard } from "../../Components/Library/EachMenuCard";
import { Spacer } from "../../Components/Global/Spacer";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";


export const Library = () => {
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
      <PaddingConatiner>
        <Heading text={"Library"}/>
        <Spacer/>
        {Menus.map((menu, index) => {
          return (
           <EachMenuCard key={index} name={menu.name} navigate={menu.navigation} icon={menu?.icon}/>
          );
        })}
      </PaddingConatiner>
    </MainWrapper>
  );
};

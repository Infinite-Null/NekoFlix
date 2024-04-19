import { memo, useEffect, useState } from "react";
import { EachButton } from "../EachButton";
import { useTheme } from "@react-navigation/native";
import { addToSavedManga, isSavedManga, removeSavedManga } from "../../../LocalStorage/SavedManga";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const SaveMangaButton = memo(({image, name, id, slug}) => {
  const theme = useTheme()
  const [saved, setSaved] = useState(false);
  const getSavedState = async () => {
      const value = await isSavedManga(id);
      setSaved(value);
  }
  const saveManga = async () => {
    const value = {id, name, image, slug}
    await addToSavedManga(value);
    setSaved(true);
  }

  const removeManga = async () => {
    await removeSavedManga(id);
    setSaved(false);
  }
  useEffect(() => {
    getSavedState();
  }, []);
  return (
    <EachButton Onpress={()=>{
      if (saved){
        removeManga()
      } else {
        saveManga()
      }
    }} title={saved ? "Saved" : "Save"}
                Containerstyle={{backgroundColor:theme.colors.primary}}
                TextStyle={{color:"white"}}
                icon={<FontAwesome name={saved ? "bookmark" : "bookmark-o"} color={"white"} size={20}/>}
    />
  );
});

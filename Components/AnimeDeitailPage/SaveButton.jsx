import { Pressable, StyleSheet } from "react-native";
import { SmallText } from "../Global/SmallText";
import { memo, useCallback, useEffect, useState } from "react";
import { addToSavedAnime, isSavedAnime, removeSavedAnime } from "../../LocalStorage/SavedAnime";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export const SaveButton = memo(({id, data}) => {
  const [isSaved, setIsSaved] = useState(false);
  const saveAnime = useCallback(
    async () => {
      const issave = await isSavedAnime(id);
      setIsSaved(issave)
    }, [],);

  useEffect(()=>{
   saveAnime()
  },[])
  return (
    <Pressable onPress={async ()=>{
      if (isSaved) {
        setIsSaved(false)
        await removeSavedAnime(id)
      } else {
        setIsSaved(true)
        await addToSavedAnime(data)
      }
     }}  style={{
      backgroundColor: isSaved ? "rgb(164,41,41)" : "rgb(30,30,30)",
      width:70,
      alignItems:"center",
      justifyContent:"space-between",
      borderRadius:5,
      padding:10,
      margin:10,
      flexDirection:"row",
      elevation:10,
    }}>
      <SmallText text={isSaved ? "Saved" : "Save"} style={{
        fontWeight:"bold",
      }}/>
      <FontAwesome name={isSaved?"bookmark":"bookmark-o"} color={'white'}/>
    </Pressable>
  );
});

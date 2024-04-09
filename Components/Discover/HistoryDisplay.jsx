import { memo, useCallback, useEffect, useState } from "react";
import { clearHistory, getHistory, removeHistoryItem } from "../../Utils/SearchHistory";
import { EachHistoryCard } from "./EachHistoryCard";
import { View } from "react-native";
export const HistoryDisplay = memo(() => {
  const [history, setHistory] = useState([]);
  const updateHistory =  useCallback((removedData, data) => {
    setHistory(removedData);
    removeHistoryItem(data)
  }, []);


  const clearHistoryData =  useCallback(() => {
    setHistory([]);
    clearHistory()
  }, []);


  const initialHistorySet = useCallback(async () => {
    const data = await getHistory();
    updateHistory(data);
  }, []);


  useEffect(()=>{
    initialHistorySet();
  },[])

  return (
    <>
      {history.length > 0 &&  <View style={{flexWrap:"wrap", flexDirection:"row", gap:10, padding:10}}>
        {[...history, "Clear All"].map((item,index)=><EachHistoryCard text={item} key={index} onClearAllPress={()=>{
          clearHistoryData()
        }} onPress={(text)=>{
          console.log(text);
        }} onCrossPress={(text)=>{
          updateHistory(history.filter((item)=>{
            return item !== text
          }), text)
        }}/>)}
      </View>}
    </>
  );
});

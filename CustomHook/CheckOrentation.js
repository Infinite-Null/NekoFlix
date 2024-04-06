import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function useOrientation(){
  const [orientation, setOrientation] = useState("PORTRAIT");

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width < height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
      }
    })
    return ()=>{
     listener.remove()
    }
  }, []);

  return orientation;
}

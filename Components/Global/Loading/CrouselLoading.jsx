import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { Dimensions } from "react-native";
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
export const CrouselLoading = () => {
  const width = Dimensions.get("window").width
  return (
    <ShimmerPlaceHolder duration={1700}  location={[0,0.5,1]}  shimmerColors={['#202020','rgba(11,11,11,0.2)','rgba(0,0,0,0.35)']} height={(width / 1.2) - 10} width={width} style={{overflow: 'hidden', borderRadius:5, marginBottom:10}}/>
  );
};

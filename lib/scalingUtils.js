import { Dimensions } from 'react-native';
import Config from 'react-native-config';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = Config.BASE_WIDTH | 375;
const guidelineBaseHeight = Config.BASE_HEIGHT | 667;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};

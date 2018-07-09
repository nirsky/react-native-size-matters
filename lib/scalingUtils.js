import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const [w, h] = width > height ? [height, width] : [width, height];

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => w / guidelineBaseWidth * size;
const verticalScale = size => h / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};
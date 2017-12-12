import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

const scale = size => widthRatio * size;
const verticalScale = size => heightRatio * size;
const moderateScaleNormal = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
const moderateScaleExtraSmall = (size, factor = 0.5) => width / moderateScaleNormal(size, factor) * width;

const moderateScale = widthRatio < 1 ? moderateScaleExtraSmall : moderateScaleNormal;
export {scale, verticalScale, moderateScale};
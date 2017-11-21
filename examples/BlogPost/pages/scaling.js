import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const scale = size => width / 350 * size;
const verticalScale = size => height / 680 * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};

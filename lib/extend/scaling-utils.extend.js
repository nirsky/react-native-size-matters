import { Dimensions } from 'react-native';
import { SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT, SIZE_MATTERS_DISABLED_DEVICES } from 'react-native-dotenv';
import DeviceInfo from './device-info';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
let moderateFactorDefault = 0.5;

//Default guideline sizes are based on standard ~5" screen mobile device
let guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 350;
let guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 680;

const disabledDevices = SIZE_MATTERS_DISABLED_DEVICES ? SIZE_MATTERS_DISABLED_DEVICES.split('|') : [];
const disabledMap = {
    'PHONE': DeviceInfo.isPhone,
    'PHONE_PORTRAIT': DeviceInfo.isPhonePortrait,
    'PHONE_LANDSCAPE': DeviceInfo.isPhoneLandscape,
    'TABLET': DeviceInfo.isTablet,
    'TABLET_PORTRAIT': DeviceInfo.isTabletPortrait,
    'TABLET_LANDSCAPE': DeviceInfo.isTabletLandscape,
    'PORTRAIT': DeviceInfo.isPortrait,
    'LANDSCAPE': DeviceInfo.isLandscape,
};
const isDisabled = disabledDevices.some((disabledDevice) => disabledMap[disabledDevice]);

if (isDisabled) {
    guidelineBaseWidth = shortDimension;
    guidelineBaseHeight = longDimension;
    moderateFactorDefault = 0;
}

export const scale = size => shortDimension / guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseHeight * size;
export const moderateScale = (size, factor = moderateFactorDefault) => size + ( scale(size) - size ) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;

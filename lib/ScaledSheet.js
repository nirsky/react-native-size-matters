import { StyleSheet } from 'react-native';
import deepMap from './deep-map';

const validScaleSheetRegex = /^(\-?\d+(\.\d{1,2})?)@(ms(\d+(\.\d{1,2})?)?|s|vs)$/;
const scaleRegex = /^(\-?\d+(\.\d{1,2})?)@s$/;
const verticalScaleRegex = /^(\-?\d+(\.\d{1,2})?)@vs$/;
const moderateScaleRegex = /^(\-?\d+(\.\d{1,2})?)@ms(\d+(\.\d{1,2})?)?$/;

const scaleByAnnotation = (scale, verticalScale, moderateScale) => (value) => {
    if (!validScaleSheetRegex.test(value)) {
        return value;
    }
    const size = parseFloat(value.split('@')[0]);

    if (scaleRegex.test(value)) {
        return scale(size);
    }

    if (verticalScaleRegex.test(value)) {
        return verticalScale(size);
    }

    if (moderateScaleRegex.test(value)) {
        const scaleFactor = value.split('ms')[1];
        if (scaleFactor) {
            return moderateScale(size, parseFloat(scaleFactor));
        }
        return moderateScale(size);
    }
};

const scaledSheetCreator = (scale, verticalScale, moderateScale) => {
    const scaleFunc = scaleByAnnotation(scale, verticalScale, moderateScale);
    return {
        create: styleSheet => StyleSheet.create(deepMap(styleSheet, scaleFunc))
    }
}

export default scaledSheetCreator;
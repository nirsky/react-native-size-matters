import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from './scalingUtils';
import deepMap from './deepMap';

const validScaleSheetRegex = /^(\-?\d+(\.\d{1,2})?)@(ms(\d+(\.\d{1,2})?)?|s|vs)$/;
const scaleRegex = /^(\-?\d+(\.\d{1,2})?)@s$/;
const verticalScaleRegex = /^(\-?\d+(\.\d{1,2})?)@vs$/;
const moderateScaleRegex = /^(\-?\d+(\.\d{1,2})?)@ms(\d+(\.\d{1,2})?)?$/;

const scaleByAnnotation = (value) => {
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

const ScaledSheet = {
    create: styleSheet => StyleSheet.create(deepMap(styleSheet, scaleByAnnotation))
};

export default ScaledSheet;
import scaledSheetCreator from './lib/ScaledSheet';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from './lib/extend/scaling-utils.extend';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale, moderateVerticalScale);
export * from './lib/extend/scaling-utils.extend';

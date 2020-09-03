import scaledSheetCreator from './lib/ScaledSheet';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from './lib/scaling-utils';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale, moderateVerticalScale);
export * from './lib/scaling-utils';
import scaledSheetCreator from './ScaledSheet';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from './scaling-utils';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale, moderateVerticalScale);
export * from './scaling-utils';
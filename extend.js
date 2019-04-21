import scaledSheetCreator from './lib/ScaledSheet';
import { moderateScale, scale, verticalScale } from './lib/extend/scaling-utils.extend';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale);
export * from './lib/extend/scaling-utils.extend';

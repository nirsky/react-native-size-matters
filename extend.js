import scaledSheetCreator from './lib/ScaledSheet';
import { scale, verticalScale, moderateScale } from './lib/extend/scaling-utils.extend';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale);
export * from './lib/extend/scaling-utils.extend';

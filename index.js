import scaledSheetCreator from './lib/ScaledSheet';
import { moderateScale, scale, verticalScale } from './lib/scaling-utils';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale);
export * from './lib/scaling-utils';
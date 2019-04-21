jest.mock('react-native');
jest.mock('react-native-dotenv');
import { scale, verticalScale, moderateScale } from '../extend';

describe('scaling-utils when guideline sizes are set using react-native-dotenv', () => {
    test('scale returns the expected result based on mocked Dimensions and mocked guideline sizes', () => {
        expect(Math.floor(scale(2.5))).toBe(3);
        expect(Math.floor(scale(100))).toBe(133);
        expect(Math.floor(scale(200))).toBe(266);
    });

    test('verticalScale returns the expected result based on mocked Dimensions and mocked guideline sizes', () => {
        expect(Math.floor(verticalScale(5))).toBe(5);
        expect(Math.floor(verticalScale(100))).toBe(100);
        expect(Math.floor(verticalScale(200))).toBe(200);
    });

    test('moderateScale returns the expected result based on mocked Dimensions and mocked guideline sizes', () => {
        expect(Math.floor(moderateScale(100))).toBe(116);
        expect(Math.floor(moderateScale(100, 0.1))).toBe(103);
        expect(Math.floor(moderateScale(100, 0.3))).toBe(110);
        expect(Math.floor(moderateScale(100, 0.6))).toBe(119);
        expect(Math.floor(moderateScale(100, 0.9))).toBe(129);
        expect(Math.floor(moderateScale(100, 2))).toBe(166);
    });
})
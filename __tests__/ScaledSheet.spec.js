jest.mock('react-native');
import { ScaledSheet, scale, verticalScale, moderateScale } from '..';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

describe('ScaledSheet', () => {
    test('Scale works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@s` }
        expect(ScaledSheet.create(input).test).toBe(scale(number));
    });

    test('verticalScale works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@vs` }
        expect(ScaledSheet.create(input).test).toBe(verticalScale(number));
    });

    test('moderateScale with default factor works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@ms` }
        expect(ScaledSheet.create(input).test).toBe(moderateScale(number));
    });

    test('moderateScale with custom factor works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@ms0.7` }
        expect(ScaledSheet.create(input).test).toBe(moderateScale(number, 0.7));
    });

    test('Scale works with a negative value', () => {
        const number = getRandomInt(-100, -1);
        const input = { test: `${number}@s` }
        expect(ScaledSheet.create(input).test).toBe(scale(number));
    });

    test('moderateScale works with a negative value', () => {
        const number = getRandomInt(-100, -1);
        const input = { test: `${number}@ms0.3` }
        expect(ScaledSheet.create(input).test).toBe(moderateScale(number, 0.3));
    });

    test('Scale works on a deeply nested object', () => {
        const number = getRandomInt();
        const input = { test: { test: { test: `${number}@s` } } }
        expect(ScaledSheet.create(input).test.test.test).toBe(scale(number));
    });

    test('No special annotation should leave the number intact', () => {
        const number = getRandomInt();
        const input = { test: number }
        expect(ScaledSheet.create(input).test).toBe(number);
    });

    test('ScaledSheet should map a complete StyleSheet with special annotations', () => {
        const input = {
            container: {
                width: '30@s',
                height: '50@vs',
                margin: {
                    width: 12,
                    height: '12@s',
                    paddingBottom: -1
                }
            },
            row: {
                padding: '10@ms0.3',
                height: '34@ms',
                marginRight: '0.5@ms0.9',
                marginLeft: '-0.5@ms0.9',
                marginTop: '-10@s',
            }
        };

        const expectedOutput = {
            container: {
                width: scale(30),
                height: verticalScale(50),
                margin: {
                    width: 12,
                    height: scale(12),
                    paddingBottom: -1
                }
            },
            row: {
                padding: moderateScale(10, 0.3),
                height: moderateScale(34),
                marginRight: moderateScale(0.5, 0.9),
                marginLeft: moderateScale(-0.5, 0.9),
                marginTop: scale(-10),
            }
        };

        expect(JSON.stringify(ScaledSheet.create(input))).toBe(JSON.stringify(expectedOutput));
    });
})

jest.mock('react-native');
import { scale, verticalScale, moderateScale } from '../lib/scalingUtils';
import ScaledSheet from '../lib/ScaledSheet';

const input = {
    container: {
        width: '30@s',
        height: '50@vs',
        margin: {
            width: 12,
            height: '12@s'
        }
    },
    row: {
        padding: '10@ms0.3',
        height: '34@ms',
        margin: '0.5@ms0.9'
    }
};

const expectedOutput = {
    container: {
        width: scale(30),
        height: verticalScale(50),
        margin: {
            width: 12,
            height: scale(12)
        }
    },
    row: {
        padding: moderateScale(10, 0.3),
        height: moderateScale(34),
        margin: moderateScale(0.5, 0.9)
    }
};

test('ScaledSheet should map the special annotations as expected', () => {
    expect(JSON.stringify(ScaledSheet.create(input))).toBe(JSON.stringify(expectedOutput));
});
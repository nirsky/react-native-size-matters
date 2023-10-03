import * as RN from 'react-native';

declare module 'react-native-size-matters' {
    export function scale(size: number): number;
    export function verticalScale(size: number): number;
    export function moderateScale(size: number, factor?: number): number;
    export function moderateVerticalScale(size: number, factor?: number): number;
    export function s(size: number): number;
    export function vs(size: number): number;
    export function ms(size: number, factor?: number): number;
    export function mvs(size: number, factor?: number): number;

    type Scale = `${number}@s${'r' | ''}`;
    type VerticalScale = `${number}@vs${'r' | ''}`;
    type ModerateScale = `${number}@ms${number | ''}${'r' | ''}`;
    type ModerateVerticalScale = `${number}@mvs${number | ''}${'r' | ''}`;
    type Size = Scale | VerticalScale | ModerateScale | ModerateVerticalScale;
    type WithSize<T> = { [P in keyof T]: number extends T[P] ? Size | T[P] : T[P] };
    type ViewStyle = WithSize<RN.ViewStyle>;
    type TextStyle = WithSize<RN.TextStyle>;
    type ImageStyle = WithSize<RN.ImageStyle>;
    type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

    export namespace ScaledSheet {
        export function create<T extends NamedStyles<T> | NamedStyles<any>>(
            stylesObject: T,
        ): {
            [P in keyof T]: RN.RegisteredStyle<{
                [S in keyof T[P]]: T[P][S] extends Size ? number : T[P][S];
            }>;
        };
    }
}
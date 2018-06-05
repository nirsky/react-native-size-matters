import * as ReactNative from "react-native";

declare module "react-native-size-matters" {

    export function scale(size: number): number;
    export function verticalScale(size: number): number;
    export function moderateScale(size: number, factor?: number): number;

    type NamedStyles<T> = { [P in keyof T]: ReactNative.ViewStyle | ReactNative.TextStyle | ReactNative.ImageStyle };

    export namespace ScaledSheet {
        export function create<T extends NamedStyles<T>>(stylesObject: T): { [P in keyof T]: ReactNative.RegisteredStyle<T[P]> };
    }
}
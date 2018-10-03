import * as ReactNative from "react-native";

declare module "react-native-size-matters" {

    interface StringifiedStyles {
        fontSize?: string | number;
        letterSpacing?: string | number;
        lineHeight?: string | number;
        textShadowRadius?: string | number;
        textShadowOffset?: { width: number | string; height: number | string; };
        shadowOffset?: { width: number | string; height: number | string; };
        borderBottomLeftRadius?: string | number;
        borderBottomRightRadius?: string | number;
        borderTopLeftRadius?: string | number;
        borderTopRightRadius?: string | number;
        borderBottomWidth?: string | number;
        borderTopWidth?: string | number;
        borderRightWidth?: string | number;
        borderLeftWidth?: string | number;
        borderRadius?: string | number;
        shadowRadius?: string | number;
        borderWidth?: string | number;
        aspectRatio?: string | number;
        rotation?: string | number;
        scaleX?: string | number;
        scaleY?: string | number;
        translateX?: string | number;
        translateY?: string | number;
    }

    export function scale(size: number): number;
    export function verticalScale(size: number): number;
    export function moderateScale(size: number, factor?: number): number;

    type NamedStyles<T> = { [P in keyof T]: ReactNative.ViewStyle | ReactNative.TextStyle | ReactNative.ImageStyle | StringifiedStyles };

    export namespace ScaledSheet {
        export function create<T extends NamedStyles<T>>(stylesObject: T): { [P in keyof T]: ReactNative.RegisteredStyle<T[P]> };
    }
}
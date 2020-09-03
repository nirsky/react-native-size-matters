import * as RN from "react-native";

declare module "react-native-size-matters" {

    interface StringifiedStyles {
        fontSize?: string | number;
        letterSpacing?: string | number;
        lineHeight?: string | number;
        textShadowRadius?: string | number;
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
    export function moderateVerticalScale(size: number, factor?: number): number;
    export function s(size: number): number;
    export function vs(size: number): number;
    export function ms(size: number, factor?: number): number;
    export function mvs(size: number, factor?: number): number;

    type NamedStyles<T> = { [P in keyof T]: RN.ViewStyle | RN.TextStyle | RN.ImageStyle | StringifiedStyles };

    export namespace ScaledSheet {
        export function create<T extends NamedStyles<T> | NamedStyles<any>>(stylesObject: T): {
            [P in keyof T]: RN.RegisteredStyle<T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>>
        };
    }
}
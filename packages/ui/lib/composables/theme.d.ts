import type { Slots } from 'vue';
export interface ThemeParams {
    props: any;
    colors?: any;
    slots?: Slots;
    data?: any;
    css?: any;
}
export declare function useTheme(namespace: string, defaultTheme: any, props: any, data?: any): {
    classes: import("vue").ComputedRef<any>;
    classPrefix: import("vue").ComputedRef<any>;
    styles: import("vue").ComputedRef<{}>;
};

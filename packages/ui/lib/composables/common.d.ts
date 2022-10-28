import type { PropType } from 'vue';
export declare type Size = 'xs' | 'sm' | 'md' | 'lg' | undefined;
export declare const useCommon: () => {
    props: () => {
        size: {
            type: PropType<Size>;
            default: string;
            validator: (value: string) => boolean;
        };
    };
    validators: Readonly<{
        size: string[];
    }>;
};

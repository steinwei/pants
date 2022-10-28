import type { App } from 'vue';
interface InjectOptionFieldsType {
    color?: string;
    theme?: string;
    icon?: string;
    components?: any;
}
export declare function install(app: App, options: InjectOptionFieldsType): void;
export {};

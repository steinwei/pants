declare module "vue" {
    export interface GlobalComponent {
        PButton: typeof import("@pants/ui")['PButton']
        PModal: typeof import("@pants/ui")['PModal']
        [key: string]: any
    }
}

export {}

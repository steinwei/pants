declare module "*.vue" {
    export interface GlobalComponent {
        PButton: typeof import("@pants/ui").PButton
        PModal: typeof imporot("@pants/ui").PModal
        [key: string]: any
    }
}

export {}

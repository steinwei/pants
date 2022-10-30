import type { ThemeParams } from "../../composables";

export default {
    classes: {
        wrapper({ props }: ThemeParams) {
            const classes = ['flex flex-col', '']
            return classes
        },
        header({ props }: ThemeParams) {
            const classes = ['flex justify-center align-middle']
            return classes
        },
        content() { 
            const classes = ['']
            return classes
        },
        footer() { 
            const classes = ['']
            return classes
        },
    },
    styles({ }) {
        const sheet = {}
        return sheet
    }
}
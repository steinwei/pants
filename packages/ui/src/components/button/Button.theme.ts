import type { ThemeParams } from '../../composables/theme'

export default {
    classes: {
        wrapper({props}: ThemeParams) {
            const classes = ['relative transition duration-150 focus:outline-none inline-flex justify-center font-medium whitespace-nowrap overflow-hidden align-middle']

            classes.push(props?.rounded ? 'rounded-full' : 'rounded-md')

            return classes
        },
    },
    styles() {
        const sheet = {
            'background-color': 'blue'
        }

        return sheet
    },

}

import type { ThemeParams } from '../../composables/theme'

export default {
    classes: {
        wrapper({props, slots}: ThemeParams) {
            const classes = [`relative transition duration-150 focus:outline-none inline-flex
            justify-center font-medium whitespace-nowrap overflow-hidden align-middle border`]

            const { rounded = false, disabled = false, loading = false, size = 'sm', light = true, dark = false } = props

            classes.push(rounded ? 'rounded-full' : 'rounded-md')

            if (disabled) classes.push('cursor-not-allowed')
            else if (loading) classes.push('cursor-default')
            else classes.push('cursor-pointer')

            if (size == 'xs') classes.push(slots?.default ? 'py-1 text-xs' : 'leading-none')
            else if (size == 'sm') classes.push(slots?.default ? 'py-2 text-sm' : 'leading-none')
            else if (size == 'md') classes.push(slots?.default ? 'py-3 text-md' : 'leading-none')
            else if (size == 'lg') classes.push(slots?.default ? 'py-4 text-lg' : 'leading-none')
            
            if (light) classes.push()
            else if(dark) classes.push()

            return classes
        },
    },
    styles({}) {
        const sheet = {
            'background-color': 'blue'
        }

        return sheet
    },

}

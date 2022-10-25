import { colors } from '@unocss/preset-mini'

export default {
    classes: {
        wrapper({props, slots, data}) {
            const classes = ['relative transition duration-150 focus:outline-none inline-flex justify-center font-medium whitespace-nowrap overflow-hidden align-middle']

            classes.push(props.rounded ? 'rounded-full' : 'rounded-md')

            classes.push('shadow-sm')

            const sizeSelector = {
                'xs': 'px-2',
                'sm': 'py-2 text-sm',
                'md': 'py-2',
                'lg': 'py-4 text-lg'
            }

            classes.push(sizeSelector[props.size])

            const cursorIndicator = ['default', 'loading', 'disabled']
            const cursorSelector = {
                [cursorIndicator[2]]: 'cursor-not-allowed',
                [cursorIndicator[1]]: 'cursor-default',
                [cursorIndicator[0]]: 'cursor-pointer',
            }

            const cursorClass = cursorSelector[cursorIndicator[props.loading ? 1 : props.disabled ? 2 : 0]]

            classes.push(cursorClass)

            const typeIndicator = ['default', 'primary', 'disabled']
            const typeSelector = {
                'primary': colors.emerald,
                'disabled': colors.gray,
                'default': colors.white,
            }

            const typeClass = typeSelector[typeIndicator[props.disabled ? 2 : props.type == 'primary' ? 1 : 0]]

            classes.push(typeClass)

            // const isLight = props.light
            // const isDark = props.dark

            // if(isLight) {
            //     classes.push('bg-white')
            // } else if(isDark) {
            //     classes.push('bg-black')
            // }

            return classes
        },
    },
    styles({props, colors, css, data}) {
        const sheet = {
            'background-color': 'blue'
        }

        return sheet
    },

}

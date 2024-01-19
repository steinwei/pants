import type { ThemeParams } from '../../composables/theme'

export default {
  classes: {
    wrapper({ props, slots }: ThemeParams) {
      const classes = [
        'font-medium whitespace-nowrap align-middle',
        'flex justify-center overflow-hidden relative border',
        'transition duration-150 focus:outline-none',
      ]

      const { rounded = false,
        disabled = false, loading = false, size = 'sm' } = props

      classes.push(rounded ? 'rounded-full' : 'rounded-md')

      if (disabled) classes.push('cursor-not-allowed')
      else if (loading) classes.push('cursor-default')
      else classes.push('cursor-pointer')

      if (size == 'xs') classes.push(slots?.default ? 'py-1 text-xs' : 'leading-none')
      else if (size == 'sm') classes.push(slots?.default ? 'py-2 text-sm' : 'leading-none')
      else if (size == 'md') classes.push(slots?.default ? 'py-3 text-md' : 'leading-none')
      else if (size == 'lg') classes.push(slots?.default ? 'py-4 text-lg' : 'leading-none')


      return classes
    },
  },
  styles({ props, colors, css }: ThemeParams) {
    const styles = []
    const { light, dark, color: customColor } = props

    const color = customColor ? colors.makeColor(customColor) : colors.makeColor('gray')

    // if (light) 
    styles.push(css.vars({
      bg: color[100],
      text: color[800],
      border: color[300],
      hover: { bg: !props.loading ? color[100] : '' },
      active: { bg: !props.loading ? color[200] : '' },
    }))
    // else if (dark) 
    //     styles.push(css.vars({

    //     }))

    return styles
  },

}

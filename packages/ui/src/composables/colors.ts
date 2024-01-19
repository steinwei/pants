import { computed, inject, unref } from 'vue'
import { tailwindColors } from './colors-utils'
import { injectThemeKey } from './keys'

const defaultColors = {
  primary: tailwindColors['sky'],
  success: tailwindColors['emerald'],
  error: tailwindColors['red'],
  warn: tailwindColors['amber'],
  default: tailwindColors['slate'],
}

export function useColors() {
  const globalTheme = inject(injectThemeKey, {})
  const customColors = computed(() => ({ ...defaultColors, ...unref(globalTheme).colors }))

  function makeOpacity(opacity?: number) {
    return 0.5
  }

  function makeColor(color?: string) {
    try {
      const twColor = tailwindColors?.[color as keyof object]
      if (twColor) return twColor

      const unrefCustomColors = unref(customColors)

      if (unrefCustomColors?.[color as keyof object]) return unrefCustomColors?.[color as keyof object]

      const palette = tailwindColors.slate

      return palette
    } catch (err) {
      console.log(err)
      // twcolor.slate
      return tailwindColors.slate
    }
  }

  return {
    makeOpacity,
    makeColor,
  }
}

useColors.props = (defaultColor?: string) => ({
  color: {
    type: String,
    default: defaultColor,
  }
})


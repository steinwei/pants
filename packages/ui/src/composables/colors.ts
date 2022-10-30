import { computed, inject, unref } from 'vue'
import { colors } from 'unocss/preset-mini'
import { injectThemeKey } from './keys'

const defaultColors = {
    primary: colors?.sky,
    success: colors?.emerald,
    error: colors?.red,
    warn: colors?.amber,
    default: colors?.slate,
}

export function useColors() {
    const globalTheme = inject(injectThemeKey, { colors: {} })
    const customColors = computed(() => Object.assign(unref(globalTheme).colors, defaultColors))

    function makeOpacity(opacity?: number) {
        return 0.5
    }

    function makeColor(color?: string) { 
        try {
            const twColor = colors?.[color as keyof object]
            if (twColor) return twColor
            
            const unrefCustomColors = unref(customColors)?.[color as keyof object]
            if (unrefCustomColors) return customColors[color as keyof object]
            
            const palette = {

            }

            return palette
        } catch (err) {
            // twcolor.slate
            return '#f1f5f9'           
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


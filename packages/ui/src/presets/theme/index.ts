import { Preset } from '@unocss/core'
import fs from 'fs'

// match all /p-(.*)+/g as class-selector to get styles
const shortcuts = [
    [],
    [],
    {
        'p-btn': '',
        'p-modal': '',
    }
]

export function ThemePreset(): Preset {
    return {
        name: '@pants/preset-theme',
        theme: {},
        safelist: [],
        shortcuts: {},
        rules: [],
        variants: [],
    }
}

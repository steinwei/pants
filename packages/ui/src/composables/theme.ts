import { computed, unref, inject } from 'vue'
import type { Slots } from 'vue'
import { injectThemeKey } from './keys'

export interface ThemeParams {
    props: any
    colors?: any
    slots?: Slots
    data?: any
    css?: any
}

export function useTheme(namespace: string, defaultTheme: any, props: any, data?: any) {
    const theme = inject(injectThemeKey, {} as any)
    console.log(theme)
    const classPrefix = computed(() => unref(theme).classPrefix ?? 'p-')
    const className = computed(() => `${classPrefix.value}${namespace}`)


    const classes = computed(() => getClasses(defaultTheme.classes, unref(props)))

    const styles = computed(() => getStyles(defaultTheme.styles, unref(props)))

    return {
        classes,
        classPrefix,
        styles,
    }
}

function isFunction(fn: any): boolean {
    return typeof fn == 'function'
}

function getClasses(theme: any, params?: any) {
    let ret = undefined
    const base = [String, Boolean, Number]
    const isBase = base.some(item => theme instanceof item)
    if(isBase) {
        return theme
    }

    ret = {} as any
    for(const proper in theme) {
        if(isFunction(theme[proper])) {
            ret[proper] = theme[proper](params)
        } else {
            ret[proper] = getClasses(ret[proper])
        }
    }
    return ret
}

function getStyles(theme: any, params?: any) {
    return {}
}



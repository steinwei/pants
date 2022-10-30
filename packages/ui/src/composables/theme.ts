import { computed, unref, inject, useSlots } from 'vue'
import type { Slots } from 'vue'
import { injectThemeKey } from './keys'
import { useColors } from './colors'
import { useCss } from './css'

export interface ThemeParams {
    props: any
    colors?: any
    slots?: Slots
    data?: any
    css?: any
}

export function useTheme(namespace: string, defaultTheme: any, props: any, data?: any) {
    const theme = inject(injectThemeKey, {} as any)

    const classPrefix = computed(() => unref(theme).classPrefix ?? 'p-')
    const className = computed(() => `${classPrefix.value}${namespace}`)

    const slots = useSlots()
    const colors = useColors()
    const css = useCss(namespace)

    const classes = computed(() => getClasses(defaultTheme.classes, {
        props: unref(props),
        slots,
        colors,
    }))

    const styles = computed(() => getStyles(defaultTheme.styles, {
        props: unref(props),
        slots,
        colors,
        css,
    }))

    return {
        colors,
        classes,
        classPrefix,
        styles,
    }
}

function isFunction(fn: any): boolean {
    return typeof fn == 'function'
}

function getClasses(source: any, params?: any) {
    let ret = undefined
    const base = [String, Boolean, Number]
    const isBase = base.some(item => source instanceof item)
    if(isBase) {
        return source
    }

    if (isFunction(source)) {
        return source(params)
    }

    ret = {} as any
    for (const proper in source) {
        if(isFunction(source[proper])) {
            ret[proper] = source[proper](params)
        } else {
            ret[proper] = getClasses(ret[proper])
        }
    }
    return ret
}

function getStyles(source: any, params?: any) {
    const base = [String, Boolean, Number]
    const isBase = base.some(item => source instanceof item)
    if (isBase) return source
    
    if (isFunction(source)) {
       return source(params)
    }
    
    let ret = {} as any
    for (const proper in source) {
        if (isFunction(source[proper])) {
            ret[proper] = source[proper](params)
        } else {
            ret[proper] = source
        }
    }
    return ret
}



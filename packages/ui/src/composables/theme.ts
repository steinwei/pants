import { computed, unref } from 'vue'
import { injectThemeKey } from './keys'
import { useCss } from './css'

export function useTheme(namespace: string, defaultTheme: any, props: any, data?: any) {
    const theme = inject(injectThemeKey, {})
    console.log(theme)
    const classPrefix = computed(() => unref(theme).classPrefix ?? 'p-')
    const className = computed(() => `${classPrefix.value}${namespace}`)

    const css = useCss(namespace)

    const classes = computed(() => getClasses(defaultTheme.classes, unref(props)))

    const styles = computed(() => getStyles(defaultTheme.styles, unref(props)))

    return {
        classes,
        classPrefix,
        styles,
        css,
    }
}

function isFunction(fn: any): boolean {
    return typeof fn == 'function'
}

function getClasses(theme: any, params: any) {
    let ret = undefined
    const base = [String, Boolean, Number, undefined, null]
    const isBase = base.some(item => theme instanceof item)
    if(isBase) {
        return theme
    }

    ret = {}
    for(const proper in theme) {
        if(isFunction(theme[proper])) {
            ret[proper] = theme[proper](params)
        } else {
            ret[proper] = getClasses(ret[proper])
        }
    }
    return ret
}

function getStyles(theme: any, params: any) {
    return {}
}



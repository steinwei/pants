export function useCss(namespace?: string) {
    const selector = (s: string | undefined) => `${s?`-${s}`:''}`
    const makeCssName = (name?: string, theme?: string, modifier?: string) => `--p${selector(namespace)}${selector(theme)}-${name}${selector(modifier)}`

    const vars = (obj?: any, theme?: string, modifier?: string) => {
        let styles = {} as Record<string, string>

        for (const key in obj) {
            const style = obj[key]
            if (typeof style == 'string') {
                styles[makeCssName(key, theme, modifier)] = style    
            } else {
                styles = { ...styles, ...vars(style, theme, modifier)}
            }
        }

        return styles
    }

    return {
        makeCssName,
        vars,
    }
}
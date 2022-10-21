import * as components from './components'
import { COLORS_KEY, THEME_KEY, ICON_KEY } from './utils/constants'
import { type App } from 'vue'

interface InjectOptionFieldsType {
    color?: string
    theme?: string
    icon?: string
    component?: any
}

export function install(app: App, options: InjectOptionFieldsType) {
    if(options.component) {
        app.component(component, component)
    }
    app.provide(COLORS_KEY, options.color || undefined)
    app.provide(THEME_KEY, options.theme || undefined)
    app.provide(ICON_KEY, options.icon || undefined)
}

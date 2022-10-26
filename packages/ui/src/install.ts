import * as components from './components'
import { type App } from 'vue'
import { injectColorKey, injectThemeKey, injectIconKey } from './composables/keys'

interface InjectOptionFieldsType {
    color?: string
    theme?: string
    icon?: string
    component?: any
}

export function install(app: App, options: InjectOptionFieldsType) {
    Object.keys(components).forEach(key => {
        const component = components[key]
        const name = component.name.startWith('P') ? component.name : 'P' + component.name
        app.component(name, component)
    })
    app.provide(injectColorKey, options.color || undefined)
    app.provide(injectThemeKey, options.theme || undefined)
    app.provide(injectIconKey, options.icon || undefined)
}

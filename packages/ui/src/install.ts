import * as components from './components'
import type { App } from 'vue'
import { injectColorKey, injectThemeKey, injectIconKey } from './composables/keys'

interface InjectOptionFieldsType {
  color?: string
  theme?: string
  icon?: string
  components?: any
}

export function install(app: App, options: InjectOptionFieldsType) {
  Object.keys(components).map(key => components[key as keyof object]).forEach((component: any) => {
    const name = component.name.startsWith('P') ? component.name : 'P' + component.name
    app.component(name, component)
  })
  app.provide(injectColorKey, options.color || undefined)
  app.provide(injectThemeKey, options.theme || undefined)
  app.provide(injectIconKey, options.icon || undefined)
}

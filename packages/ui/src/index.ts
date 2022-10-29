export * from './composables'
export * from './components'
export { default as version } from './version'
export { default as color } from './exports/color-utils'

import { install } from './install'

export default {
    install
}
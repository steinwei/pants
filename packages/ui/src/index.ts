export * from './components'
export { default as version } from './version'
export * from './composables'

import { install } from './install'

function create() {
    return {
        install
    }
}

export default create()
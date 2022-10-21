export function useTheme(namespace: string) {
    // TODO: temporary not figure out how to write...
    const classes = {
        makeClasses(namespace)
    }
    return {
        classes
    }
}

function makeClasses(namespace: string) {
    return `${namespace}-`
}

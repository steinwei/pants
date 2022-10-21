export type Scene = 'light' | 'dark'

export function modalTheme(scene: Scene) {
    if(scene == 'light') {
        return {
            colors: {},
            classes: {},
        }
    }

    return {
        colors: {},
    }
}

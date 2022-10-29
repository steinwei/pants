import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DefaultLayout from "../layouts/default.vue";
import SimpleLayout from "../layouts/simple.vue";

const pages = import.meta.globEager('@/pages/components/*/index.vue')

const ComponentPages = Object.keys(pages).map((path: string) => {
    const match = path.match(/src\/pages\/components\/(.*)\/index\.vue$/)

    if (!match) return null
  
    const name = match[1].toLowerCase()

    console.log(name, pages, path)

    return {
      path: name,
      component: (pages[path] as any).default,
    }
}) as RouteRecordRaw[]

export const routes: RouteRecordRaw[] = [{
    path: '/',
    component: DefaultLayout,
    children: [
        {
            path: 'component',
            component: SimpleLayout,
            children: ComponentPages,
        }
    ]
}]

export default createRouter({
    history: createWebHistory('/ui/'),
    routes,
})
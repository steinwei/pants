<script setup lang="ts">
import Cookie from '../components/cookie/Cookie.vue'
import Toolbar from '../components/toolbar/Toolbar.vue'
import Menu from "../components/menu/Menu.vue"
</script>

<template>
    <div>
        <Toolbar />
        <div class="flex">
            <Menu />
            <div class="flex-1">
                <router-view />
            </div>
        </div>
        <Cookie />
    </div>
</template>
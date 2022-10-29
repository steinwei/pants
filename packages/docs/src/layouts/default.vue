<script setup lang="ts">
import Cookie from '../components/cookie/Cookie.vue'
import ToolBar from '../components/toolbar/Toolbar.vue'
import Menu from "../components/menu/Menu.vue"
</script>

<template>
    <div>
        <ToolBar />
        <div class="flex flex-1">
            <Menu />
            <div class="flex-1">
                <div>this is router-view.</div>
                <router-view />
            </div>
        </div>
        <Cookie />
    </div>
</template>
<script>
export default {
    name: 'Cookie',
    data() { 
        return {
            show: false
        }
    },
    created() {
        try {
            if(!window.localStorage.getItem('cookie-gotit')) this.show = true
        } catch (err) {
            this.show = true
        }
    },
    methods: {
        gotit() {
            try {
                window.localStorage.setItem('cookie-gotit', 'true')
            } catch (err) {
                console.log(err)
            }

            this.show = false
        },
    }
}
</script>

<template>
    <p v-show="show" fixed bottom-0 left-0 w-full bg-white z-40 p-4 bg-blue>
        We use cookies for analysis.
        <p-button @click="gotit">
            Got It
        </p-button>
    </p>
</template>
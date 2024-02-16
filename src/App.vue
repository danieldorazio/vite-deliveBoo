<script >
import AppFooter from './components/AppFooter.vue';
import AppHeader from "./components/AppHeader.vue";


export default {
    data () {
        return {
            
        }
    },
    components: { AppHeader, AppFooter },
}

</script>

<template>
    <AppHeader />
    

    <router-view></router-view>

    <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as*;
</style>

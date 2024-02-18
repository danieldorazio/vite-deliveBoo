<script >
import AppFooter from './components/AppFooter.vue';
import AppHeader from "./components/AppHeader.vue";


export default {
    data() {
        return {

        }
    },
    components: { AppHeader, AppFooter },
}

</script>

<template>
    <div class="wrapper">
        <AppHeader />


        <router-view></router-view>

        <AppFooter />
    </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as*;

.wrapper {
    height: 100vh;
    width: 100%;
}
</style>

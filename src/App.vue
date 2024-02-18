<script >
import AppHeader from "./components/AppHeader.vue";


export default {
    data() {
        return {

        }
    },
    components: { AppHeader },
}

</script>

<template>
    <div class="wrapper">
        <AppHeader />


        <router-view></router-view>

    </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as*;

.wrapper {
    height: 100vh;
    width: 100%;
}
</style>

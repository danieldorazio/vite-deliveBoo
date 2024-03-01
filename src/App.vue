<script >
import axios from 'axios';
import { store } from './store';
import AppFooter from "./components/partials/AppFooter.vue";
import AppHeader from "./components/partials/AppHeader.vue";


export default {
    components: { AppHeader, AppFooter },
    data() {
        return {
            store,
            categories: [],
        }
    },
    created() {
        axios.get(`${this.store.baseUrl}/api/categories`)
            .then((resp) => {
                this.categories = resp.data.result
                console.log(this.categories);
            });
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', '[]')
        }    
    },
}

</script>

<template>
    <div class="wrapper">
        <!-- <AppHeader :categories="categories" /> -->
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

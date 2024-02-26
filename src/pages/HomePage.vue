<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from '../components/partials/AppCard.vue';
import AppFooter from '../components/partials/AppFooter.vue';
import AppJumbotron from '../components/partials/AppJumbotron.vue';

export default {
    components: { AppJumbotron, AppCard, AppFooter },

    data() {
        return {
            store,
            categories: [],
            loading: false,
        }
    },
    created() {
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/categories`)
            .then((resp) => {
                this.categories = resp.data.result
                console.log(this.categories);
            })
            .finally(() => {
                this.loading = false;
            });
    },
}
</script>


<template>
    <div class="my_main">
        <AppJumbotron />
        <div class="container p-0">
            <div v-if="loading">
                <h3>Loading...</h3>
            </div>
            <div v-else> 
                <h1>Home page</h1>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3" v-for="category in categories"
                    :key="category.name">
                    <AppCard :category="category" />
                </div>
            </div>
        </div>
        <AppFooter/>
</div>
   
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

.my_main {
    height: $height-main;
    overflow-y: scroll;
    background-color: aliceblue;
}

.my_main::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
}

.my_main::-webkit-scrollbar-track {
    border-radius: 10px;
    border: 1px solid #cacaca;
    background-color: #f1f1f1;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}

.my_main::-webkit-scrollbar-thumb {
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(.5, #FAA343), color-stop(1, #F8E16C));
    border-radius: 10px;
}
</style>
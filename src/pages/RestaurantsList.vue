<script>
import AppHeader from '../components/partials/AppHeader.vue';
import RestaurantCard from '../components/partials/RestaurantCard.vue';
import AppFooter from '../components/partials/AppFooter.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    components: { AppHeader, RestaurantCard, AppFooter },

    data() {
        return {
            store,
            restaurants: [],
            loading: false,
        }
    },
    created() {
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/restaurants/${this.$route.params.slug}`)
            .then((resp) => {
                this.restaurants =resp.data.result
                console.log(this.restaurants);
            })
            .finally(() => {
                this.loading = false;
            });
    },
}
</script>


<template>
    <div class="my_main">
        <h1>Pier ti odio </h1>
        <div class="container mb-5">
            <div>
                Bottoni categoria
                SearchBar
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                    <div v-for=" restaurant in restaurants" :key="restaurant.id">
                        <RestaurantCard :restaurant="restaurant"/>
                    </div>
                    
                </div>
            </div>
        </div>
        <AppFooter />
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
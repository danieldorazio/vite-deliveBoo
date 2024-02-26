<script>
import axios from 'axios';
import { store } from '../store';
import AppFooter from '../components/partials/AppFooter.vue';
import AppCardMeals from '../components/partials/AppCardMeals.vue'

export default {
    data() {
        return {
            store,
            restaurant: {},
            meals: [],
        };
    },
    created() {
        // CHIAMATA DATI RISTORNATE
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/restaurant/show/${this.$route.params.id}`)
            .then((resp) => {
                this.restaurant = resp.data.result
                console.log(this.restaurant);
            })
            .finally(() => {
                this.loading = false;
            });
        // CHIAMATA DATI PIATTO RISTORANTE
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/meals/${this.$route.params.id}`)
            .then((resp) => {
                this.meals = resp.data.result
                console.log(this.meals);
            })
            .finally(() => {
                this.loading = false;
            });
    },
    components: { AppFooter , AppCardMeals}
}

</script>

<template>
    <div class="my_main">
        <div class="back">
            <div class="d-flex justify-content-between">
                <img src="" alt="Logo ristorante">
                <!-- , params: {slug: restaurant.slug} 
                <router-link :to="{name: 'restaurants'}" class="btn btn-info">Restaurants</router-link> -->
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        Shortcut menu
                    </div>
                    <div class="col-6">
                        {{ restaurant.restaurant_name }}
                    </div>
                    <div class="col-3">
                        Visione carrello
                    </div>
                </div>
            </div>
            <br>
            <!-- <div class="container" v-for="meal in meals" :key="meal.id">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        {{ meal.name }}
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
                <br>
            </div> -->
            <AppCardMeals />
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

.row {
    height: 100%;
}

.back {
    background-color: #FAA343;
}

.container {
    background-color: beige;
    height: 300px;
}

.col-6 {
    background-color: antiquewhite;
}

.col-3 {
    background-color: lightgray;
}

</style>
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
        axios.get(`${this.store.baseUrl}/api/restaurants`, {
            params: { category_slug: this.store.category_slug, }
        })
            .then((resp) => {
                this.restaurants = resp.data.result;

            })
            .finally(() => {
                this.loading = false;
            });

    },

}
</script>


<template>
    <div class="my_main">
        <div class="container mb-5">
            <div>
                <h2>You have selected the following categories: </h2>
                <h4 v-for="category in this.store.category_slug" :key="category">
                    <strong>- {{ category }}</strong>
                </h4>
            </div>

            <!-- <div>
                Category buttons
                SearchBar
            </div> -->

            <div class="rest-list row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3" v-if="restaurants">
                <div v-for=" restaurant in restaurants" :key="restaurant.id">
                    <RestaurantCard :restaurant="restaurant" />
                </div>
            </div>
            <div v-else class="no-res">
               <p>No restaurant available</p>
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
.rest-list {
    @media (min-width: 1024px) {
            
        }

        @media (max-width: 760px) {
            // margin-left: 0%;
        }

        @media (max-width: 320px) {
            margin-left: 50%;
    }
}

</style>
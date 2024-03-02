<script>
import {store} from '../../store';
export default {
    props: {
        restaurant: Object,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
    }
}
</script>


<template>
    <div class="mt-5 me-3 my-card" style="width: 18rem;">
        <router-link :to="{ name: 'show-restaurant', params: { id: restaurant.id } }"
            class="text-decoration-none text-black rounded text-center">
            <div class="img-up ">
                <img :src="`${store.baseUrl}/storage/${restaurant.image}`" alt="" class="card-img-top ">
            </div>

            <div class="mt-3">
                <h3 class="text-white my-title">
                {{ restaurant.restaurant_name }}
            </h3>
            </div>
            <div class="d-flex justify-content-center">
                <p class="badge rounded-pill text-bg-warning me-2">{{ restaurant.time_open }}</p>
                <span class="text-white">-</span> 
                <p class="badge rounded-pill text-bg-warning ms-2">{{ restaurant.time_close }}</p> 
            </div>
            <!-- <div class="mt-2">
                <p class="text-light fs-6">Address: {{ restaurant.street }}</p>
            </div> -->
        </router-link>


    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;
.my-card {
    border: 10px double #ffcc33;
    border-radius: 20px;
    padding: 5px;
}
.img-up {

    background: linear-gradient(90deg, #F8E16C 0%, #FAA343 100%);

    img {
        max-width: 100%;
        height: 250px;
    }
}
.my-title{
font-family: 'Poppins', sans-serif;
line-height: 1.2;
font-weight: bold;
}
</style>
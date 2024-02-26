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
        // getImagePath(path) {
        //     return new URL(`../../assets/img/${path}`, import.meta.url).href;
        // },
    }
}
</script>


<template>
    <div class="card mt-5 me-3 " style="width: 18rem;">
        <!-- <router-link :to="{name: 'restaurants'}" class="nav-link"> -->
        <!-- <div class="img-up text-center">
            <img :src="getImagePath(rest.imagePath)" alt="">
        </div> -->
        <!-- </router-link> -->

        <!-- <div class="card-body text-center">
            <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
            <img :src=" getImagePath('rice.png')" alt="">
              <p class="card-text">{{ rest.description }}</p> 
            <p class="card-text"> {{ restaurant.street }} </p>
            <p class="card-text"> {{ restaurant.time_open }} </p>
            <p class="card-text"> {{ restaurant.time_close }} </p>
        </div> -->


        <!-- <router-link :to="{ name: 'show-restaurant' }" class="text-decoration-none text-black img-up rounded">
         
        </router-link> -->
        <router-link :to="{ name: 'show-restaurant', params: { id: restaurant.id } }"
            class="text-decoration-none text-black rounded text-center">
            <div class="img-up ">
                <img :src="`${store.baseUrl}/storage/${restaurant.image}`" alt="" class="card-img-top ">
            </div>

            <div class="card-body my-bg-div text-white ">

                <div class="  ">
                    <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                </div>

                <p class="card-text mt-3 ">{{ restaurant.street }}</p>
            </div>
        </router-link>


    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;
.img-up {

    background: linear-gradient(90deg, #F8E16C 0%, #FAA343 100%);

    img {
        max-width: 100%;
        height: 250px;

    }

}
.my-bg-div {
    background-color: $color-footer ;
    
}
</style>
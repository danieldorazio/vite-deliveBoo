<script>
export default {
    props: {
        restaurant: Object,
    },
    data(){
        return{
    
        }
    },
    methods:{
        getImagePath(path){
            return new URL(`../../assets/img/${path}`, import.meta.url).href;
        },
    }
}
</script>


<template>
    <div class="card mt-5 me-3" style="width: 18rem;">
        <!-- <router-link :to="{name: 'restaurants'}" class="nav-link"> -->
        <!-- <div class="img-up text-center">
            <img :src="getImagePath(rest.imagePath)" alt="">
        </div> -->
        <!-- </router-link> -->
        
        <div class="card-body text-center">
            <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
            <img :src=" getImagePath('rice.png')" alt="">
             <!-- <p class="card-text">{{ rest.description }}</p> -->
            <p class="card-text"> {{ restaurant.street }} </p>
            <p class="card-text"> {{ restaurant.time_open }} </p>
            <p class="card-text"> {{ restaurant.time_close }} </p>
        </div>
        <div>
            <!-- , params: {slug: restaurant.slug} -->
            <p>page clicked restaurant</p>
            <router-link :to="{name: 'show-restaurant'}" class="btn btn-success">Prova</router-link>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.img-up{
    height: 120px;
    background: linear-gradient(90deg, #F8E16C 0%, #FAA343 100%);

    img{
        height: 100%;
    }
}
</style>
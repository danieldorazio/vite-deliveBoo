<script>
export default {
    data(){
        return{
            restaurant: [
                {
                    imagePath: "burger1.png",
                    name: "Hamburger",
                    description: "I migliori hamburger del mondo."

                },
                {
                    imagePath: "burritos1.png",
                    name: "Burrito",
                    description: "I migliori burrito del mondo."
                },
                {
                    imagePath: "pizza-slice1.png",
                    name: "Pizza",
                    description: "La miglior pizza del mondo."
                },
                {
                    imagePath: "spaghetti1.png",
                    name: "Spaghetti",
                    description: "I migliori spaghetti del mondo."
                },
                {
                    imagePath: "sawara1.png",
                    name: "Sushi",
                    description: "Che schifo il sushi"
                },
                {
                    imagePath: "taco.png",
                    name: "Cooking",
                    description: "Non so cosa sia"
                },
                {
                    imagePath: "dessert1.png",
                    name: "Dessert",
                    description: "Troppo buono"
                },
                {
                    imagePath: "rice.png",
                    name: "Poke",
                    description: "blew"
                },
            ]
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
    <div class="card mt-5 me-3" style="width: 18rem;" v-for="rest in restaurant" :key="rest.name">
        <!-- <router-link :to="{name: 'restaurants'}" class="nav-link"> -->
        <div class="img-up text-center">
            <img :src="getImagePath(rest.imagePath)" alt="">
        </div>
        <!-- </router-link> -->
        
        <div class="card-body text-center">
            <h5 class="card-title">{{ rest.name }}</h5>
            <p class="card-text">{{ rest.description }}</p>
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
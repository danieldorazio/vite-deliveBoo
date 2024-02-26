<script>
import { store } from '../../store';
export default {
    props: {
        category: Object, 
    },

    data(){
        return{
            store,
        }
    },
    created() {
        console.log(this.category);
    }
    // methods:{
    //     getImagePath(path){
    //         return new URL(`../../assets/img/${path}`, import.meta.url).href;
    //     },
    // }
}
</script>


<template>
    <div class="card mt-5 me-3" style="width: 18rem;">
        <router-link :to="{name: 'restaurants'}" class="nav-link">
        <div class="img-up text-center">
            <img :src="`${store.baseUrl}/storage/${category.image_category}`" alt="">
        </div> 
        </router-link>
        
        <div class="card-body text-center">
            <h5 class="card-title">{{ category.name }}</h5>
            <!-- <p class="card-text">{{ cat.description }}</p> -->
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
<script>
import { store } from '../../store';
export default {
    props: {
        categories: Array, 
    },

    data(){
        return{
            store,
        }
    },
    created() {
        console.log(this.categories);
    }
    // methods:{
    //     getImagePath(path){
    //         return new URL(`../../assets/img/${path}`, import.meta.url).href;
    //     },
    // }
}
</script>


<template>
    <div class="btn btn-info">
        <!--  -->
        <router-link :to="{name: 'restaurants', params: {slug: categories[0].slug}}" class="nav-link">
            Ricerca
        </router-link>
    </div>
</template>



<style lang="scss" scoped>
</style>
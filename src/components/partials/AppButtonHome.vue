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
    <div class="my-btn-color">
        <!--  -->
        <router-link :to="{name: 'restaurants', params: {slug: categories[0].slug}}" class="nav-link">
            <h4>Search</h4>
        </router-link>
    </div>
</template>



<style lang="scss" scoped>

.my-btn-color{
    padding: 1rem 2rem;
    border-radius: 50px;
    border: 7px double #ffcc33;
    color: #fff;
    transition: 1000ms;
    &:hover {
        transition: 1000ms;
        border: 7px double #ffcc33;
        background-color: #ffcc33;
    }
}
</style>
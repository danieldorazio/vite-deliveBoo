<script>
import { store } from '../../store';
export default {
    props: {
        category: Object, 
    },
    data(){
        return{
            store,
            flag: false,
            
        }
    },
    created() {
       
    }
   
}
</script>


<template>
    <div class="mt-5 me-3" style="width: 18rem;" @click="this.flag = !this.flag" :class="this.flag ? 'my-color-border' :' my-border'">
        <div class="text-center">
            <img :src="`${store.baseUrl}/storage/${category.image_category}`" alt="" class="img-my">
        </div> 
        
        <div class=" text-center mt-3">
            <h3 class="card-title text-white my-title" v-if="!this.flag">
                {{ category.name }}
            </h3>
            <h3 class="card-title my-color-selected  my-title" v-else>
                {{ category.name }}
            </h3>
        </div>
        <div class=" text-center mt-3">
            <p class="text-light fs-5" v-if="!this.flag">
                Click on a category to select it
            </p>
            <p class=" my-color-selected fs-5" v-else>
                Selected
            </p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.img-my{
    height: 200px;
    width: 100%;
    aspect-ratio: 1;
}

.my-border{
    border: 10px solid transparent ;
}

.my-color-border{
    border: 10px double #ffcc33 ;
    border-radius: 20px;
    //border: ridge; effetto ottico 3d
}

.my-color-selected{
    color:  #ffcc33;
}

.my-title{
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: bolder;
}
</style>
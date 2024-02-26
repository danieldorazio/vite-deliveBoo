<script>
import { store } from "../../store";
export default {
    props: {
        meal: Object,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        // getImagePath(path) {
        //     return new URL(`../../assets/img/${path}`, import.meta.url).href;
        // },
    },
};
</script>

<template>
    <div class="container-meals position-relative d-flex justify-content-center align-itmes-center flex-wrap gap-5">
        <div class="my-card-meals">
            <div class="row">
                <div class="col-3">
                    card meals
                    <div class="img-bx">
                        <img :src="`${store.baseUrl}/storage/${meal.image}`" alt="" class="card-img-top ">
                    </div>
                </div>
                <div class="col-6">
                    <p>
                        <strong>Name meal: </strong> {{ meal.name }}
                    </p>
                    <p>
                        <strong>Description meal: </strong> {{ meal.description }}
                    </p>
                    <p>
                        <strong>Price meal: </strong> {{ meal.price }}
                    </p>
                </div>
                <div class="col-3">+ 0 - quantitá</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

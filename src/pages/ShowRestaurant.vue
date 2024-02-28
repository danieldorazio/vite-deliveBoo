<script>
import axios from 'axios';
import { store } from '../store';
import AppFooter from '../components/partials/AppFooter.vue';
import AppCardMeals from '../components/partials/AppCardMeals.vue'
import AppCart from '../components/partials/AppCart.vue'

export default {
    data() {
        return {
            store,
            restaurant: {},
            meals: [],
        };
    },
    created() {
        // CHIAMATA DATI RISTORNATE
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/restaurant/show/${this.$route.params.id}`)
            .then((resp) => {
                this.restaurant = resp.data.result
                console.log(this.restaurant);
            })
            .finally(() => {
                this.loading = false;
            });
        // CHIAMATA DATI PIATTO RISTORANTE
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/meals/${this.$route.params.id}`)
            .then((resp) => {
                this.meals = resp.data.result
                console.log(this.meals);
            })
            .finally(() => {
                this.loading = false;
            });
    },
    components: { AppFooter, AppCardMeals, AppCart },
    methods: {
    }
}
</script>

<template>
    <div class="my_main">

        <div class="back">

            <AppCart :meals="meals"/>

            <!-- DA TOGLIERE DISPLAY NONE -->
            <!-- <div class="offcanvas offcanvas-end d-none" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Your cart</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="item  d-flex justify-content-around p-3" v-for="item in store.cart">
                        <img :src="`${store.baseUrl}/storage/${item.image}`" alt="" class="my-cart-img">
                        <div>
                            <p>{{ item.name }}</p>
                            <p>{{ item.quantity }}</p>
                            <p>{{ item.price }} €</p>
                        </div>

                    </div>
                    <div v-if="store.cart.length > 0"> <button @click="emptyCart()" class="btn btn-danger">Empty cart</button> </div>
                    <div v-if="store.cart.length > 0" class="subtotal">Total price: <span>€ {{ getTotal() }}</span></div>
                    <div v-if="store.cart.length === 0">

                        <p>The cart is empty</p>
                    </div>
                </div>
            </div> -->
            <div class="d-flex justify-content-center bg-white mb-3">
                <!-- <div class="w-25 ">
                    <img :src="`${store.baseUrl}/storage/${restaurant.image}`" alt="" class="card-img-top ">
                </div> -->
                <!-- , params: {slug: restaurant.slug} 
                <router-link :to="{name: 'restaurants'}" class="btn btn-info">Restaurants</router-link> -->
            </div>
            <div class="container ">
                <div class="row">
                    <div class="col-3">
                        <img :src="`${store.baseUrl}/storage/${restaurant.image}`" alt="" class="card-img-top ">
                    </div>
                    <div class="col-6 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <p class="fs-5">Name: <strong>{{ restaurant.restaurant_name }}</strong></p>
                        </div>
                        <div>
                            <p class="fs-5"> Street: <strong>{{ restaurant.street }}</strong></p>
                        </div>
                        <div>
                            <p class="fs-5"> Open Time: <strong>{{ restaurant.time_open }}</strong></p>
                        </div>
                        <div>
                            <p class="fs-5"> Close Time: <strong>{{ restaurant.time_close }}</strong></p>
                        </div>
                    </div>

                </div>

            </div>
            <br>
            <div class="container">
                <div class="d-flex justify-content-evenly flex-wrap gap-3">
                    <div class="col-4 mt-5 mb-5" v-for="meal in meals" :key="meal.id">
                        <AppCardMeals :meal="meal" />
                        <div class="mt-5 d-flex flex-column text-center">
                            
                            <div class="mt-3">
                                <!-- <button  class="btn btn-info" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"></button> -->
                             
                            </div>
                            <!-- <div class="mt-3">
                                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight" class="btn btn-danger" @click="removeFromCart(meal.id), getTotal()">Remove from cart</button>
                            </div> -->
                        </div>

                    </div>
                </div>

            </div>

        </div>


        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;



.my-cart-img {
    width: 150px;
    height: 150px;
    aspect-ratio: 1;
}

.my_main {
    height: $height-main;
    overflow-y: scroll;
    background-color: aliceblue;
    position: relative;
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

.row {
    height: 100%;
}

.back {
    background-color: #FAA343;
}


.col-6 {
    background-color: white;
}

.col-3 {
    background-color: white;
}
</style>
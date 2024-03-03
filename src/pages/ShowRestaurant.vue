<script>
import axios from 'axios';
import { store } from '../store';
import AppFooter from '../components/partials/AppFooter.vue';
import AppCartAddRemBtn from '../components/partials/AppCartAddRemBtn.vue';
import AppCardMeals from '../components/partials/AppCardMeals.vue'
import AppHeader from '../components/partials/AppHeader.vue';

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
    components: { AppFooter, AppCardMeals, AppCartAddRemBtn, AppHeader },
    methods: {
        removeFromCart(mealId) {
            let temp = this.store.cart.filter(elem => elem.id != mealId);
            this.store.cart = temp;
            this.quantity = 1;
            localStorage.setItem('cart', JSON.stringify(temp));
        },
        getTotal() {
            let sum = this.store.cart.reduce(function (accumulator, obj) {
                return parseFloat(accumulator) + parseFloat(obj.price * obj.quantity);
            }, 0);
            this.store.totalPrice = localStorage.setItem('totalPrice', JSON.stringify(sum))
            return sum;
        },
        emptyCart() {
            this.store.cart = [];
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
        },
        addToCart(mealId) {
            // controlla se il ristorante è stato cambiato, se vero cancella il carrello precedente
            for (const storemeal of this.store.cart) {
                if (storemeal.restaurant_id != this.meal.restaurant_id) {
                    if (confirm('Are you sure')) {
                        this.store.cart = [];
                        if (this.store.cart.length == 0) {
                            this.store.cart.push(this.meal);
                        }
                        else {
                            let res = this.store.cart.find(element => element.id == mealId);
                            if (res === undefined) {
                                this.store.cart.push(this.meal);
                            }
                        }
                        this.meal.quantity = 1;
                        localStorage.setItem('cart', JSON.stringify(this.store.cart));
                        return;
                    }
                    else {
                        return;
                    }
                }
            }
            if (this.store.cart.length == 0) {
                this.store.cart.push(this.meal);
            }
            else {
                let res = this.store.cart.find(element => element.id == mealId);
                if (res === undefined) {
                    this.store.cart.push(this.meal);
                }
            }
            this.meal.quantity = 1;
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
        },
    }
}
</script>

<template>
    <div class="my_main">
        <AppHeader/>
        <div class="back d-flex justify-content-evenly">
            <div class="dstr p-4">
                <br>
                <div class="container ">
                    <div class="row">
                        <div class="col-3 ">
                            <img :src="`${store.baseUrl}/storage/${restaurant.image}`" alt="" class="card-img-top rounded-circle">
                        </div>
                        <div class="col-6 d-flex flex-column justify-content-center align-items-center rounded ms-5 text-white my_bg_gray">
                            <div>
                                <p class="fs-5 text-uppercase fw-bolder">{{ restaurant.restaurant_name }}</p>
                            </div>
                            <div>
                                <p class="fs-5"> Address: <strong>{{ restaurant.street }}</strong></p>
                            </div>
                            <div>
                                <p class="fs-5 badge rounded-pill text-bg-warning me-2"><strong>{{ restaurant.time_open }}</strong></p>
                                <p class="fs-5 badge rounded-pill text-bg-warning ms-2"><strong>{{ restaurant.time_close }}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="container">
                    <div class="d-flex flex-wrap gap-3">
                        <div class="col-4 mt-5 mb-5" v-for="meal in meals" :key="meal.id">
                            <AppCardMeals :meal="meal" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="destra">
                <div class="container my-sticky">
                    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-3">
                        <div class="col">
                            <div class="rounded-top my-cart-br p-3 my_bg_gray text-white">
                                <h5 class="card-title">Your Cart</h5>
                                <div class="card-body p-3" id="ciao">
                                    <div class="item d-flex mb-3" v-for="item in store.cart"
                                        :key="item.id">
                                        <img :src="`${store.baseUrl}/storage/${item.image}`" alt="" class="my-cart-img me-3">
                                        <div class="d-flex flex-column text-center align-items-center">
                                            <p>{{ item.name }}</p>
                                            <AppCartAddRemBtn :item="item" />
                                            <div class="d-flex justify-content-center align-items-center mt-3 text-center">
                                                <p class="mb-0 me-3 btn btn-warning">{{ item.price * item.quantity }} €</p>
                                                <button class="btn btn-danger"
                                                    @click="removeFromCart(item.id), getTotal()"><i class="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div v-if="store.cart.length === 0">
                                        <p class="text-danger">The cart is empty</p>
                                    </div>
                                </div>
                            </div>
                            <div class="my_cart_footer rounded-bottom p-3 my_bg_gray text-white" v-if="store.cart.length > 0">
                                <div v-if="store.cart.length > 0">
                                    <strong>Totale:</strong> 
                                    <span>{{ getTotal()}} € </span>
                                </div>
                                <div v-if="store.cart.length > 0" class="subtotal mt-3">
                                    <button class="btn btn-danger me-3" @click="emptyCart()">Empty cart</button>
                                    <router-link  :to="{ name: 'checkout'}" class="btn btn-info">Go To Payment</router-link>
                                </div>
                            </div>
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
    background-image: url('../assets/img/bg-pattern.jpg');
    background-repeat: repeat;
    padding: 90px;
}


.col-6 {
    background-color: rgb(255, 255, 255);
}

.col-3 {
    background-color: black;
}

.my-sticky {
    position: sticky;
    top: 2%;
    padding: 5px;

    @media (max-width: 768px) {
        position: relative;
    }
}

.destra {
    position: relative;
    right: 10%;
}

.my-cart-br {
    max-height: 700px;
    width: 400px;
    overflow-y: scroll;
}
.my_bg_gray {
    background-color: rgb(40, 40, 40);
}
.my_cart_footer {
    width: 400px;
}
</style>
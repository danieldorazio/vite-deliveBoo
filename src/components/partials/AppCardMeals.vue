<script>
import { store } from "../../store";
import AppCartAddRemBtn from "./AppCartAddRemBtn.vue";
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
            return sum;
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
    },
    mounted() {
        console.log(this.meal.id);
        for (const meal of this.store.cart) {
            if (meal.id == this.meal.id) {
                this.quantity = parseFloat(meal.quantity);
            }
        }
    },
    components: { AppCartAddRemBtn }
};
</script>

<template>
    <div class="container-meals position-relative d-flex justify-content-center align-items-center flex-wrap">
        <div class="my-card-meals position-relative">
            <div class="img-bx">
                <img :src="`${store.baseUrl}/storage/${meal.image}`" alt="" class="card-img-top" />
            </div>
            <div class="content-meal">
                <p><strong>Description meal: </strong> {{ meal.description }}</p>
                <p><strong>Price meal: </strong> {{ meal.price }} €</p>
            </div>
            <h4>{{ meal.name }}</h4>
        </div>
    </div>
    <div class="text-center mt-5">
            <div>
                <button v-if="!this.store.cart.find(element => element.id == this.meal.id)" @click="addToCart(this.meal.id), getTotal()" class="btn btn-primary" type="button"
                     data-bs-target="#ciao" >Add
                    to cart</button>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.container-meals {
    .my-card-meals {
        width: 320px;
        height: 250px;
        background-color: #ffff;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        transition: 0.5s;

        h4 {
            position: absolute;
            bottom: 8px;
            color: black;
            transition: 0.5;
            font-weight: 600;
        }

        .content-meal {
            position: relative;
            padding: 40px;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-50px);
            transition: 0.5s;
        }

        &:hover {
            height: 350px;

            h4 {
                padding: 5px 25px;
                background: linear-gradient(90deg, #f8e16c 0%, #faa343 100%);
                bottom: -25px;
                border-radius: 15px;
                box-shadow: 0 0 0 10px $color-footer;
            }

            .content-meal {
                opacity: 1;
                visibility: visible;
                transform: translateY(40px);
            }

            .img-bx {
                inset: -50px 60px 250px 60px;
                box-shadow: 0 0 0 10px #faa343;

                &::before {
                    opacity: 1;
                    transform: translateY(50px);
                }

                &::after {
                    opacity: 1;
                    transform: translateY(50px);
                }
            }
        }

        .img-bx {
            position: absolute;
            inset: 20px 20px 50px 20px;
            background: #f00;
            border-radius: 15px;
            transition: 0.5s;

            &::before {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                background: transparent;
                left: -30px;
                border-top-right-radius: 20px;
                transform: translateY(-100px);
                opacity: 0;
                box-shadow: 5px -5px 0 4px #faa343;
                pointer-events: none;
                transition: 0.5s;
            }

            &::after {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                background: transparent;
                right: -30px;
                border-top-left-radius: 20px;
                transform: translateY(-100px);
                opacity: 0;
                box-shadow: -5px -5px 0 4px #faa343;
                pointer-events: none;
                transition: 0.5s;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 15px;
            }
        }
    }
}
</style>

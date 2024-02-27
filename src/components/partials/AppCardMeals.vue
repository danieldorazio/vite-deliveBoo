<script>
import { store } from "../../store";
export default {
    props: {
        meal: Object,
    },
    data() {
        return {
            store,
            quantity: 1
        };
    },
    methods: {
        addRemoveQty(number) {
            if (number == 1) {
                if (this.quantity < 10) {
                    this.quantity++
                    this.meal.quantity = this.quantity
                }
            }
            if (number == -1) {
                if (this.quantity > 1) {
                    this.quantity--
                    this.meal.quantity = this.quantity
                }
            }

        },
        updateQuantity(mealId, quantity) {
            for (const meal of this.store.cart) {
                if (meal.id == mealId) {
                    meal.quantity = quantity
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.store.cart))
        },

    },
    mounted() {
        console.log(this.meal.id);
        for (const meal of this.store.cart) {
                if (meal.id == this.meal.id) {
                    this.quantity = parseFloat(meal.quantity)
                }
            }
    }
};
</script>

<template>
    <div class="container-meals position-relative d-flex justify-content-center align-items-center flex-wrap gap-5">
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
        <div v-if="this.store.cart.find(element => element.id == meal.id)">
            <button @click="addRemoveQty(-1), updateQuantity(meal.id, this.quantity)">-</button>
            <input type="number" v-model="quantity" disabled>
            <button @click="addRemoveQty(1), updateQuantity(meal.id, this.quantity)">+</button>
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

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
                    if (confirm('If you add to your cart a meal from a different restaurant, your previous cart will be emptied. Do you wish to proceed?')) {
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
    <!-- AppCardMeals -->
    <div class="wrapper">
        <div class="card">
            <div class="poster"> <img :src="`${store.baseUrl}/storage/${meal.image}`" alt="" class="card-img-top" />
            </div>
            <div class="details">
                <h1>{{ meal.name }}</h1>
                <h2> {{ meal.price }} €</h2>
                <p class="desc">
                    <strong>Description meal: </strong>
                    {{ meal.description }}
                </p>
                <div class="text-center mt-5">
            <div v-if="!this.store.cart.find(element => element.id == this.meal.id)">
                <button @click="addToCart(this.meal.id), getTotal()" class="my_btn my_color_btn_payment" type="button"
                    data-bs-target="#ciao">Add to cart</button>
            </div>
            <button v-else class="my_btn my_color_btn_added">
                Added to cart
            </button>
        </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f5f5f5;
}

.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
}

.card {
    position: relative;
    width: 325px;
    height: 350px;
    background: #000;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.poster {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.poster::before {
    content: '';
    position: absolute;
    bottom: -45%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .3s;
}

.card:hover .poster::before {
    bottom: 0;
}

.poster img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s;
}

.card:hover .poster img {
    transform: scale(1.1);
}

.details {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: auto;
    padding: 1.5em 1.5em 2em;
    background: #000a;
    backdrop-filter: blur(16px) saturate(120%);
    transition: .3s;
    color: #fff;
    z-index: 2;
}

.card:hover .details {
    bottom: 0;
}

.details h1,
.details h2 {
    font-weight: 700;
}

.details h1 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.details h2 {
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 10px;
    opacity: .6;
}

.details .rating {
    position: relative;
    margin-bottom: 15px;
    display: flex;
    gap: .25em;
}

.details .rating i {
    color: #e3c414;
}

.details .rating span {
    margin-left: 0.25em;
}

.details .tags {
    display: flex;
    gap: .375em;
    margin-bottom: .875em;
    font-size: .85em;
}

.details .tags span {
    padding: .35rem .65rem;
    color: #fff;
    border: 1.5px solid rgba(255 255 255 / 0.4);
    border-radius: 4px;
    border-radius: 50px;
}

.details .desc {
    color: #fff;
    opacity: .8;
    line-height: 1.5;
    margin-bottom: 1em;
}

.details .cast h3 {
    margin-bottom: .5em;
}

.details .cast ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    width: 100%;
}

.details .cast ul li {
    list-style: none;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
    border: 1.5px solid #fff;
}

.details .cast ul li img {
    width: 100%;
    height: 100%;
}



/**************************************************************************** */
.my_btn_gray {
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    color: white;
    padding: 8px 16px;
    background-color: #b8b8b8;
    transition: 1000ms;
    border: none;
    font-weight: bold;
}

.my_bg_gray {
    background-color: rgba(40, 40, 40, 0.5);
}

.my_btn {
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: black;
    padding: 10px 30px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition: 1000ms;
    transform: translateY(0);
    cursor: pointer;
}

.my_color_btn_payment {
    background: linear-gradient(90deg, #f8e16c 0%, #faa343 100%);
}

.my_color_btn_added {
    background: linear-gradient(90deg, #b8b8b8 0%, #4c4c4c 100%);
}
</style>

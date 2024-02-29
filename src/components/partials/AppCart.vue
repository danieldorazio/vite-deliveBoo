<script>
import { store } from '../../store'
import AppCartAddRemBtn from './AppCartAddRemBtn.vue';
export default {
    props: {
        meals: Array,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
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
        removeFromCart(mealId) {
            let temp = this.store.cart.filter(elem => elem.id != mealId);
            this.store.cart = temp;
            this.quantity = 1;
            localStorage.setItem('cart', JSON.stringify(temp));
        },
        // updateQuantity(mealId, quantity) {
        //     for (const meal of this.store.cart) {
        //         if (meal.id == mealId) {
        //             meal.quantity = quantity
        //         }
        //     }
        //     localStorage.setItem('cart', JSON.stringify(this.store.cart))
        // },
        // addRemoveQty(number, itemQuantity) {
        //     if (number == 1) {
        //         if (this.quantity < 10) {
        //             this.quantity++
        //             itemQuantity = this.quantity
        //         }
        //     }
        //     if (number == -1) {
        //         if (this.quantity > 1) {
        //             this.quantity--
        //             itemQuantity = this.quantity
        //         }
        //     }
        // },
    },
    components: { AppCartAddRemBtn }
}

</script>

<template>
    <!-- <div class=" my-sticky-btn">
        <button class="btn btn-danger " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"> <i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    

     <div class="offcanvas offcanvas-end d-flex" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
            <div v-if="store.cart.length > 0" class="subtotal">Totale: <span>€ {{ getTotal() }}</span></div>
            <div v-if="store.cart.length === 0">

                <p>The cart is empty</p>
            </div>
        </div>
    </div>  -->
    
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div v-if="store.cart.length > 0" class="subtotal btn btn-info"> 
                
                <router-link  :to="{ name: 'checkout'}" >checkout</router-link>

            </div>
        <div class="item  d-flex justify-content-around p-3" v-for="item in store.cart" :key="item.id">
            <img :src="`${store.baseUrl}/storage/${item.image}`" alt="" class="my-cart-img">
            <div>
                <p>{{ item.name }}</p>
                <AppCartAddRemBtn :item="item"/>
                <p>{{ item.price * item.quantity }} €</p>
                <button class="btn btn-danger" @click="removeFromCart(item.id), getTotal()">Remove from
                    cart</button>
                </div>
                
            </div>
            <div v-if="store.cart.length > 0" class="subtotal">Totale: <span>€ {{ getTotal() }}</span>
                <button class="btn btn-danger ms-2" @click="emptyCart()">Empty cart</button>
            </div>
            <div v-if="store.cart.length === 0">
                
                <p>The cart is empty</p>
            </div>
        </div>
    </div>
    
    <!-- <div class="bg-white my-w my-sticky-btn">
        <a href="" class="btn btn-info">Vai al pagamento</a>
        <div class="item  d-flex justify-content-around p-3" v-for="item in store.cart">
            
            
            <div class="d-flex">
                <p class="me-1"><span class="circle">{{ item.quantity }} </span></p>
                <p>{{ item.name }}</p>
                
            </div>
            <div>
                <p>{{ item.price }} €</p>
            </div>
            
        </div>
        <div v-if="store.cart.length > 0" class="subtotal">Totale: <span>€ {{ getTotal() }}</span></div>
        <div v-if="store.cart.length === 0">
            
            <p>The cart is empty</p>
        </div>
    </div> -->
    
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling">Enable body scrolling</button>
</template>

<style lang="scss" scoped>
.my-sticky-btn {
    position: -webkit-sticky;
    position: sticky;
    top: 25%;
    left: 75%;
    padding: 5px;


}

.my-w {
    width: 300px;
    min-height: 200px;
    margin-top: -100px;

}

.my-cart-img {
    width: 150px;
    height: 150px;
    aspect-ratio: 1;

}



.circle {
    background-color: gray;

}
</style>
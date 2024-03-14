<script>
import { store } from '../../store'
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            store,
            quantity: 1
        }
    },
    methods: {
        updateQuantity(number,mealId, quantity) {
            console.log(mealId,'meal id');
            console.log(quantity,'quantyt');
            for (const meal of this.store.cart) {
                if(number == 1){
                    if (meal.quantity < 99) {
                        if (meal.id == mealId) {
                        meal.quantity = meal.quantity + 1;
                    }
                }
                }
                if(number == -1){
                    if (meal.quantity > 1) {
                        if (meal.id == mealId) {
                            meal.quantity = meal.quantity -1;
                        }
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.store.cart))
        },
        addRemoveQty(number, itemQuantity) {
            console.log(itemQuantity,'itemquantity');
            if (number == 1) {
                if (this.quantity < 99) {
                    this.quantity++
                    itemQuantity = this.quantity
                    console.log(this.quantity, 'thisqantity');
                }
            }
            if (number == -1) {
                if (this.quantity > 1) {
                    this.quantity--
                    itemQuantity = this.quantity
                }
            }
        },

    }
}
</script>

<template>
    <div class="d-flex">
        <button @click="addRemoveQty(-1, item.quantity), updateQuantity(-1,item.id, this.quantity)" class="my_btn">
           <span class="hello">-</span> 
        </button>
            <input class="my_input text-center" type="number" v-model="this.item.quantity" disabled>
        <button @click="addRemoveQty(1, item.quantity), updateQuantity(1,item.id, this.quantity)" class="my_btn ">
            <span>+</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.my_input{
    max-width: 40px;
    background-color: #000;
    color: white;
    border: 1px solid black;

}
.my_btn {
    text-decoration: none;
    display: inline;
    color: #000;
    background-color: #ffcc33;
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    border: 1px solid black;
    .hello {
        transform: translate(-200px);
    }
}
</style>
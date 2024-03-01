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
                    if (meal.quantity < 10) {
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
                if (this.quantity < 10) {
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
    <div>
        <button @click="addRemoveQty(-1, item.quantity), updateQuantity(-1,item.id, this.quantity)" class="btn btn-success">-</button>
        <input type="number" v-model="this.item.quantity" disabled>
        <button @click="addRemoveQty(1, item.quantity), updateQuantity(1,item.id, this.quantity)">+</button>
    </div>
</template>

<style lang="scss" scoped></style>
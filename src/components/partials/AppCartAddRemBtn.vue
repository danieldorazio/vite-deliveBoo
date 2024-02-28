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
        updateQuantity(mealId, quantity) {
            for (const meal of this.store.cart) {
                if (meal.id == mealId) {
                    meal.quantity = quantity
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.store.cart))
        },
        addRemoveQty(number, itemQuantity) {
            if (number == 1) {
                if (this.quantity < 10) {
                    this.quantity++
                    itemQuantity = this.quantity
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
        <button @click="addRemoveQty(-1, item.quantity), updateQuantity(item.id, this.quantity)">-</button>
        <input type="number" v-model="this.quantity" disabled>
        <button @click="addRemoveQty(1, item.quantity), updateQuantity(item.id, this.quantity)">+</button>
    </div>
</template>

<style lang="scss" scoped></style>
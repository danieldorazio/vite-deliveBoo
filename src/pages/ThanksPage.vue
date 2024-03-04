<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="my_main">
        <div class="back text-white d-flex justify-content-center align-items-center">
            <div class="text-center">
                <h1>THANK YOU FOR USING <span>DELIVEBOO</span></h1>
                <p class="fs-5">Your order has been placed and will arrive at the time you indicated. Please take a moment to review your experience using <span>DeliveBoo.</span></p>
                <p>By clicking the button below, you will be redirected to the home page.</p>
                <router-link :to="{ name: 'home' }" @click="this.store.category_slug = []">
                    <button class="my_btn">
                        Home
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.my_main {
    height: 100vh;
    background-color: aliceblue;
    position: relative;

    span{
        color: #ffcc33;
    }
}

.back {
    height: 100vh;
    background-image: url('../assets/img/bg-pattern.jpg');
    background-repeat: repeat;
    padding: 90px;
}
.my_btn {
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    color: #000;
    padding: 8px 16px;
    background-color: #ffcc33;
    transition: 1000ms;
    border: none;
    font-weight: bold;
    border-radius: 10px;
}
</style>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="my_main">
        <div class="back text-white d-flex justify-content-center align-items-center">
            <div class="text-center">
                <h1>THANK YU BRV HAI KOMPRAT LA PASTA? FOZZA NAPOLI</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nihil corrupti delectus a. Ab a laboriosam, neque error explicabo totam illo itaque et blanditiis, quia exercitationem sapiente ad mollitia minus.</p>
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
}
</style>
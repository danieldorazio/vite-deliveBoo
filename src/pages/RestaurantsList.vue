<script>
import AppHeader from '../components/partials/AppHeader.vue';
import RestaurantCard from '../components/partials/RestaurantCard.vue';
import AppFooter from '../components/partials/AppFooter.vue';

export default {

    components: { AppHeader, RestaurantCard, AppFooter },
}
</script>


<template>
    <div class="my_main">
        <h1>Pier ti odio </h1>
        <div class="container">
            <div>
                Bottoni categoria
                SearchBar
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                    <RestaurantCard />
                </div>
            </div>
        </div>
    </div>
    <AppFooter />
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

.my_main {
    height: $height-main;
    overflow-y: scroll;
    background-color: aliceblue;
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
</style>
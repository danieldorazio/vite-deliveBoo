<script>
import axios from 'axios';
import AppFooter from '../components/partials/AppFooter.vue';

export default{
    data() {
        return {};
    },
    created() {
    },
    components: { AppFooter }
}

</script>

<template>
    <div class="my_main">
        <div class="back">
            <img src="" alt="Logo ristorante">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        Shortcut menu
                    </div>
                    <div class="col-6">
                        Info ristorante
                    </div>
                    <div class="col-3">
                        Visione carrello
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        dettagli meals
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        dettagli meals
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        dettagli meals
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        dettagli meals
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        dettagli meals
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
            </div>
            <br>
            <div class="container ">
                <div class="row">
                    <div class="col-3">
                        card meals
                    </div>
                    <div class="col-6">
                        dettagli meals
                    </div>
                    <div class="col-3">
                        + - quantitá
                    </div>
                </div>
            </div>
            <br>
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

.row{
    height: 100%;
}
.back{
    background-color: green;
}

.container{
    background-color: beige;
    height: 300px;
}

.col-6{
    background-color: antiquewhite;
}

.col-3{
    background-color: lightgray;
}
</style>
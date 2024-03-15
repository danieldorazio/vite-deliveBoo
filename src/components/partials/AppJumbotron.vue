<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import AppHeader from './AppHeader.vue';
import 'swiper/scss';

import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default {
    components: {
        AppHeader, Swiper, SwiperSlide,
    },
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty('--progress', 1 - progress);
            progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };
        return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
        };
    },
}
</script>

<template>
    <div class=" my_jumbotron position-relative">
        <AppHeader />

        <!-- <div class="my_slogan translate-middle text-center">
            <h1>DeliveBoo</h1>
            <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
        </div> -->


        <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }" :pagination="{
            clickable: true,
        }" :navigation="true" :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">

            <swiper-slide class="position-relative">
                <img src="../../assets/img/bg-header1.png" alt="">
                <div class="my_slogan-left">
                    <h1>DeliveBoo</h1>
                    <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
                </div>
            </swiper-slide>

            <swiper-slide>
                <img src="../../assets/img/bg-header4.jpg" alt="">
                <div class="my_slogan-rigth">
                    <h1>DeliveBoo</h1>
                    <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
                </div>
            </swiper-slide>

            <swiper-slide>
                <img src="../../assets/img/bg-header2.jpg" alt="">
                <div class="my_slogan-left">
                    <h1>DeliveBoo</h1>
                    <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
                </div>
            </swiper-slide>

            <swiper-slide>
                <img src="../../assets/img/bg-header5.jpg" alt="">
                <div class="my_slogan-rigth">
                    <h1>DeliveBoo</h1>
                    <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
                </div>
            </swiper-slide>

            <swiper-slide>
                <img src="../../assets/img/bg-header3.jpg" alt="">
                <div class="my_slogan-left">
                    <h1>DeliveBoo</h1>
                    <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
                </div>
            </swiper-slide>

            <template #container-end>
                <div class="autoplay-progress">
                    <svg viewBox="0 0 48 48" ref="progressCircle">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref="progressContent"></span>
                </div>
            </template>
        </swiper>


    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #ffcc33;
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: #ffcc33;
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}


.my_jumbotron {
    height: calc($height-main - 175px);
    // background-image: url('../../assets/img/bg-header.png');
    // background-position: bottom;
    // background-repeat: no-repeat;
    // background-size: cover;

    .my_slogan-left {
        background-color: rgba(0, 0, 0, 0.334);
        color: white;
        position: absolute;
        top: 50%;
        left: 10%;
        width: 30%;
    }

    .my_slogan-rigth {
        background-color: rgba(0, 0, 0, 0.334);
        color: white;
        position: absolute;
        top: 50%;
        right: 10%;
        width: 30%;
    }
}
</style>
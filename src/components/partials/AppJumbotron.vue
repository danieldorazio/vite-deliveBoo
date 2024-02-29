<script>
export default {

}
</script>

<template>
    <div class=" my_jumbotron position-relative">
        <div class="my_slogan position-absolute top-50 end-50 translate-middle text-center">
            <h1>DeliveBoo</h1>
            <p class="fs-5">Celebrate every bite of happiness delivered right to your doorstep</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;

.my_jumbotron {
    height: calc($height-main - 175px);
    background-image: url(../../assets/img/jumbotron.jpg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size:cover;
.my_slogan {
    background-color: rgba(0, 0, 0, 0.334);
    color: white;
}
}
</style>
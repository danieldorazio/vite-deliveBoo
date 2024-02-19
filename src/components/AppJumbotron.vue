<script>
export default {

}
</script>

<template>
    <div class=" my_jumbotron position-relative">
        <div class="my_slogan position-absolute top-50 end-50 translate-middle text-center">
            <h1>Fluid jumbotron</h1>
            <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

.my_jumbotron {
    height: calc($height-main - 15px);
    background-image: url(../assets/img/jumbotron.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
.my_slogan {
    background-color: rgba(0, 0, 0, 0.334);
    color: white;
}
}
</style>
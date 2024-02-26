<script>
import { store } from '../../store';
export default {
  props: {
    categories: Array,
  },

  data() {
    return {
      store,
    }
  }

}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- LOGO DA MODIFICARE -->
      <router-link :to="{ name: 'home' }" class="nav-link text-black">
        <img class="my_logo" src="../../assets/img/logo.png" alt="">
      </router-link>
      <!-- HAMBURGHER BUTTON -->
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- DROPDOWN DELLE CATEGORIE -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Categorie
            </a>
            <ul class="dropdown-menu my_dropdown" aria-labelledby="navbarDropdown">
              <li class="text-center" v-for="category in categories" :key="category.id">
                <router-link :to="{ name: 'restaurants', params: {slug: category.slug}}" class="text-decoration-none text-black">
                  <img class="dropdown-item" :src="`${store.baseUrl}/storage/${category.image_header}`" alt="">
                  <div>{{category.name }}</div>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="text-white my_btn ">
          <a href="http://127.0.0.1:8000/" class="text-decoration-none text-black">Lavora con noi</a>
        </div>
      </div>
    </div>
  </nav>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;

nav {
  height: $height-nav;
  //background-image: url(../../assets/img/navbar-wood.jpg);
  background-color: $color-footer;
  background-position: center;
  background-size: cover;

  .container-fluid {
    .my_logo {
      height: $height-nav;
    }

    .dropdown-menu.show {
      display: flex;
      flex-wrap: wrap;
      width: 300px;

      li {
        width: calc(100% / 3);
      }
    }
  }

  .my_btn {
    font-weight: 0;
    font-size: 14px;
    color: black;
    background: linear-gradient(90deg, #F8E16C 0%, #FAA343 100%);
    padding: 10px 30px;
    border: 2px solid #F8E16C;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition: 1000ms;
    transform: translateY(0);
    cursor: pointer;

    &:hover {
      transition: 1000ms;
      padding: 10px 50px;
      transform: translateY(-0px);
      background: linear-gradient(90deg, #F8E16C 0%, #FAA343 100%);
      border: solid 2px #F8E16C;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {
      array: ["ciao", "casa", "mia" ],
    }
  }

}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
<!-- LOGO CHE CI PORTA ALLA HOME-->
<a href="#"><img class="w-25" src="../assets/img/food-logo-template-design-95c24a79e8088a9d763b0ae77658e055_screen.png" alt="logo Deliveboo"></a>
  
<!-- HAMBURGHER BUTTON -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
<!-- LISTA CATEGORIE SECONDA IMG -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="category in array" :key="category"><a class="dropdown-item" href="#">{{ category }}</a></li>
            </ul>
          </li>
        </ul>

        <button>registrati</button>
        <button>accedi</button>
  
      </div>
    </div>
  </nav>
</template>



<style></style>
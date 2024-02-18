<script>
export default {
  data() {
    return {
      array: ["ciao", "casa", "mia"],
    }
  }

}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- LOGO DA MODIFICARE -->
      <img class="my_logo" src="../assets/img/food-logo-template-design-95c24a79e8088a9d763b0ae77658e055_screen.png"
        alt="">
      <!-- HAMBURGHER BUTTON -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>

          <!-- DROPDOWN DELLE CATEGORIE -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Categorie
            </a>
            <ul class="dropdown-menu my_dropdown" aria-labelledby="navbarDropdown">
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/burger.png" alt=""><span>Burgers</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/burrito.png" alt="">
                  <span>Messicano</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/cooking.png" alt="">
                  <span>Greco</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/dumpling.png" alt="">
                  <span>Cinese</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/pizza.png" alt="">
                  <span>Pizza</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/poke-bowl.png" alt="">
                  <span>Poke</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/spaghetti.png" alt="">
                  <span>Italiano</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/sushi.png" alt="">
                  <span>Giapponese</span>
                </router-link></li>
              <li class="text-center"><router-link :to="{ name: 'home' }"><img class="dropdown-item"
                    src="../assets/img/dessert.png" alt="">
                  <span>Dolci</span>
                </router-link></li>
            </ul>
          </li>
        </ul>
        <router-link :to="{ name: 'home' }"><button class="my_btn">Accedi</button></router-link>
      </div>
    </div>
  </nav>
</template>



<style lang="scss" scoped>
.container-fluid {
  .my_logo {
    width: 100px;
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
  color: #fff;
  background: linear-gradient(90deg, #75BBFD 0%, #FAA343 100%);
  padding: 10px 30px;
  border: 2px solid #75BBFD;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  cursor: pointer;

  &:hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background: linear-gradient(90deg, #75BBFD 0%, #FAA343 100%);
    color: #75BBFD;
    border: solid 2px #75BBFD;
  }
}

</style>


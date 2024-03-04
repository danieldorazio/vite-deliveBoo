<script>
export default {
    data() {
        return {
            contact_links: [
                "About us",
                "Restaurants",
                "Other",
                "Boossroom",
                "Programming",
                "Design",
                "Work with us",
                "Become our partner",
                "TEAM 5"
            ],
            legal_links: [
                "Terms & Conditions",
                "Privacy Policy",
                "Cookies",
                "Requests from Public Authorities",
            ],
            help_links: ["Contacts", "FAQ",],
        };
    },
};
</script>

<template>
    <footer class="fake-h">
        <hr class="my-color-hr">
         <div class="container">
          <!--  <div class="row d-flex justify-content-between row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                <div class="col">
                    <div class="card-1 rounded">
                        <h3 class="text-center">Contact us</h3>
                        <ul class="row">
                            <li v-for="link in contact_links" class="col-4">
                                <p>{{ link }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-1 rounded">
                        <h3 class="text-center">Legal Disclaimers</h3>
                        <ul class="row">
                            <li v-for="link in legal_links" class="">
                                <p>{{ link }}</p>
                            </li>
                        </ul>
                         <h3 class="text-center">Help</h3> 
                         <ul>
                            <li v-for="link in help_links">
                                <p>{{ link }}</p>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-1 rounded">
                    <h3 class="text-center">About us</h3>
                    <ul class="row row-colums">
                        <li v-for="link in help_links" class="col-4">
                            <p>{{ link }}</p>
                        </li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div> -->
        
        <div class="title-center ">
            <div class="d-flex justify-content-center">
                <img src="../../assets/img/bg-title.png" alt="" class="me-3">
                <h1 class="text-center text-white me-5">CONTACTS</h1>
            </div>
        </div>
        <div class="resp row d-flex justify-content-around footer-wrap">
            <div class="col-lg col-md-1">
                <h3> <i class="fa-solid fa-location-dot"></i> LOCATION</h3>
                <p>Via del Corso 5, Roma</p>
            </div>
            <div class="col-lg col-md-1">
                 <h3> <i class="fa-solid fa-phone"></i> PHONE</h3>
                 <p>3420301612</p>
            </div>
            <div class="col-lg col-md-1">
                <h3><i class="fa-solid fa-envelope"></i> EMAIL</h3>
                <p>ludo.segretaria@gmail.com</p>
            </div>
            <div class="col-lg col-md-1 resp">
                <h3><i class="fa-solid fa-square-share-nodes"></i> SOCIAL</h3>
                <div class="d-flex gap-3 resp-icons">
                    <span><i class="fa-brands fa-github"></i></span>
                    <span><i class="fa-brands fa-facebook"></i></span>
                    <span><i class="fa-brands fa-x-twitter"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-youtube"></i></span>
                </div>
            </div>
        </div>
    </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.footer-wrap{
    padding-bottom: 50px;

    i{
        color: #ffcc33;

    }
}

.title-center{
    text-align: center;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 50px;
    padding-top: 50px;
}



.fake-h {
    background-color: black;
    color: white;
    min-height: 300px;
}

.card-1 {
    margin-top: 20px;
    background-color: rgba($color: #ffffff, $alpha: 0.1);
    color: black;
    margin-bottom: 10px;
    text-align: left;
    padding: 1rem;
    height: 240px;
}

.my-color-hr{
    margin: 0;
    border: 2px solid #ffcc33;
}

.resp {
    @media (max-width: 800px) {
        text-align: center;
        // padding-left: 1rem;
        
    }
}

.resp-icons {
  @media (max-width: 800px) {
    text-align: center;
    justify-content: center;
    display: flex;
  }
}
</style>

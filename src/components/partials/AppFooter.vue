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
        <!-- <div class="container">
            <div class="row d-flex justify-content-between row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
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
        <div class="title-center">
            <div class="bk-title">
                <h2>CONTACTS</h2>
            </div>
        </div>
        <div class="d-flex justify-content-around footer-wrap">
            <div>
                <h3> <i class="fa-solid fa-location-dot"></i> LOCATION</h3>
                <p>via daniel Roma</p>
            </div>
            <div>
                 <h3> <i class="fa-solid fa-phone"></i> PHONE</h3>
                 <p>3420301612</p>
            </div>
            <div>
                <h3><i class="fa-solid fa-envelope"></i> EMAIL</h3>
                <p>ludo.segretaria@gmail.com</p>
            </div>
            <div>
                <ul>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-x-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                </ul>
            </div>
        </div>

    </footer>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.footer-wrap{
    padding-bottom: 50px;

    i{
        color: yellow;
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

    .bk-title {
    background-image: url(../../assets/img/bg-title.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 80px;
    font-size: 40px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 20px;
}
}



.fake-h {
    background-color: black;
    color: white;
    min-height: 300px;
    padding-top: 100px;
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

ul {
    text-decoration: none;
    list-style-type: none;

    li {
        margin: 2px 0;
    }
}
</style>

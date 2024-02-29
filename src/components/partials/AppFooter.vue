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
            help_links: ["Contacts", "FAQ"],
        };
    },
};
</script>

<template>
    <div class="fake-h">
        <div class="container">
            <div class="row d-flex justufy-content-between">
                <div class="col-6">
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
                        <!-- <h3 class="text-center">Help</h3> -->
                        <!-- <ul>
                            <li v-for="link in help_links">
                                <p>{{ link }}</p>
                            </li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-1 rounded">
                    <h3 class="text-center">Contact us</h3>
                    <ul class="row row-colums">
                        <li v-for="link in help_links" class="col-4">
                            <p>{{ link }}</p>
                        </li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.fake-h {
    background-color: $color-footer;
    color: white;
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

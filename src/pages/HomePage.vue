<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "../components/partials/AppCard.vue";
import AppFooter from "../components/partials/AppFooter.vue";
import AppJumbotron from "../components/partials/AppJumbotron.vue";
import AppButtonHome from "../components/partials/AppButtonHome.vue";
import AppTeam from "../components/partials/AppTeam.vue";

export default {
    components: { AppJumbotron, AppCard, AppFooter, AppButtonHome, AppTeam },

    data() {
        return {
            store,
            categories: [],
            loading: false,
            
        };
    },
    created() {
        this.loading = true;
        axios
            .get(`${this.store.baseUrl}/api/categories`)
            .then((resp) => {
                this.categories = resp.data.result;
                console.log(this.categories);
            })
            .finally(() => {
                this.loading = false;
            });
    },
};
</script>

<template>
    <div class="my_main">
        <AppJumbotron />
        <div class="container p-0 mt-5 mb-5">
            <div v-if="loading">
                <h3>Loading...</h3>
            </div>
            <div v-else>
                <div>
                    <h1>The most popular cuisines</h1>
                    <p>
                        Find the most popular cuisines from restaurants in your area and
                        order online for delivery.
                    </p>
                    <hr />
                    <h6>Select the categories that you want to search</h6>
                    <div class="restaurants row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-3">
                        <div class="col" v-for="category in categories" :key="category.name">
                            <div class="position-relative">
                                <input type="checkbox" :name="category.slug" :id="category.slug" :value="category.slug"
                                    class="position-absolute my-pos d-none" v-model="this.store.category_slug" />
                                    <!-- class="position-absolute my-pos d-none" v-model="this.store.category_slug" /> -->
                                <label :for="category.slug">
                                    <span>
                                        <AppCard :category="category" />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div>Checked categories: {{ this.store.category_slug }}</div> -->
                <div class="cat-btn mt-3">
                    <AppButtonHome :categories="categories" />
                </div>
            </div>
        </div>
        <AppTeam />
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.my_main {
    height: $height-main;
    overflow-y: scroll;
    background-color: #ddd1cb;
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
    background-image: -webkit-gradient(linear,
            left bottom,
            left top,
            color-stop(0.5, #faa343),
            color-stop(1, #f8e16c));
    border-radius: 10px;
}

.my-pos {
    top: 94.5%;
    z-index: 999;
}

.restaurants {
    @media (max-width: 768px) {
        margin-left: 20%;
    }
}

.cat-btn {
    @media (max-width: 768px) {
        text-align: center;
    }
}
</style>

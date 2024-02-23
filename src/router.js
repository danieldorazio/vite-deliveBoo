import {createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ShowRestaurant from "./pages/ShowRestaurant.vue";
import RestaurantsList from "./pages/RestaurantsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/restaurant/",
            name: "show-restaurant",
            component: ShowRestaurant,
        },
        {
            path: "/restaurants",
            name: "restaurants",
            component: RestaurantsList,
        },
    ],
});

export { router };
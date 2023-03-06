import Home from "./routes/Home.vue";
import Things from "./routes/Things.vue";
import Locations from "./routes/Locations.vue";
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/things",
        component: Things,
        name: "Things"
    },
    {
        path: "/locations",
        component: Locations,
        name: "Locations"
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
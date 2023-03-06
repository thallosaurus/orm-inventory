import Home from "./routes/Home.vue";
import ThingList from "./routes/ThingsList.vue";
import Thing from "./routes/Thing.vue"
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
        component: ThingList,
        name: "ThingsList"
    },
    {
        path: "/things/:id",
        component: Thing,
        name: "Thing"
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
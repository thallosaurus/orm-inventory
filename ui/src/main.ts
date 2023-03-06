import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as bootstrap from 'bootstrap';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import { router } from './router';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
//import './assets/main.css';

const app = createApp(App)

app.use(createPinia())
app.use(router);
//app.use(BootstrapVue);

app.mount('#app')

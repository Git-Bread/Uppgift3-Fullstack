import { createApp } from "vue";
import App from "./App.vue";
import route from "./router/index";
import "./tail.css";



createApp(App)
 .use(route)
 .mount('#app');

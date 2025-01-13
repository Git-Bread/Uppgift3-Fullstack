import { createApp } from "vue";
import App from "./App.vue";
import route from "./router/index";
import "./tail.css";


// Create a new Vue App using route
createApp(App)
 .use(route)
 .mount('#app');

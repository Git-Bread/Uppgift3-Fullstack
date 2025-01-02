import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ReflectionsPage from "../views/ReflectionPage.vue";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/reflections',
    name: 'ReflectionsPage',
    component: ReflectionsPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ReflectionsPage from "@/views/ReflectionPage.vue";
import GameList from '@/views/GameList.vue';

//ordinary router
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
  },
  {
    path: '/games',
    name: 'GameList',
    component: GameList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
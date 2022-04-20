import { createRouter, createWebHistory } from 'vue-router';
import FormView from '../views/FormView.vue';
import SuccessView from '../views/SuccessView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: FormView,
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

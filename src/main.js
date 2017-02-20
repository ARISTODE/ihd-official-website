import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueWayPoint from 'vue-waypoint'
import { store } from './store/store.js'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(VueRouter);
Vue.use(VueWayPoint);
Vue.use(vueSmoothScroll);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

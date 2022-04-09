import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import AboutView from '../views/AboutView.vue'
import AsignaturaView from '../views/AsignaturaView.vue'
import ContenidosView from '../views/ContenidosView.vue'
import JornalizacionView from '../views/JornalizacionView.vue'
import CalendarizacionView from '../views/CalendarizacionView.vue'
import MaterialApoyoView from '../views/MaterialApoyoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: IntroductionView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aboutme",
    name: "aboutme",
    component: AboutView
  },
  {
    path: "/asignatura",
    name: "asignatura",
    component: AsignaturaView
  },
  {
    path: "/contenidos",
    name: "contenidos",
    component: ContenidosView
  },
  {
    path: "/jornalizacion",
    name: "jornalizacion",
    component: JornalizacionView
  },
  {
    path: "/calendarizacion",
    name: "calendarizacion",
    component: CalendarizacionView
  },
  {
    path: "/materialesapoyo",
    name: "materialesapoyo",
    component: MaterialApoyoView
  }
];

const router = new VueRouter({
  routes
})

export default router

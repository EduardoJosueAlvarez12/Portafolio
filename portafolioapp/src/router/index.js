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
import SemanaUnoView from '../views/investigations/SemanaUnoView.vue'
import SemanaDosView from '../views/investigations/SemanaDosView.vue'
import SemanaTresView from '../views/investigations/SemanaTresView.vue'
import SemanaCuatroView from '../views/investigations/SemanaCuatroView.vue'
import SemanaCincoView from '../views/investigations/SemanaCincoView.vue'

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
  },
  //rutas para las investigaciones
  {
    path: "/investigaciones/introduccionalibrerias",
    name: "introduccionalibrerias",
    component: SemanaUnoView
  },
  {
    path: "/investigaciones/renderingydirectivas",
    name: "renderingydirectivas",
    component: SemanaDosView
  },
  {
    path:"/investigaciones/clasesestilostiemporeal",
    name: "clasesestilostiemporeal",
    component: SemanaTresView
  },
  {
    path:"/investigaciones/componentes",
    name: "componentes",
    component: SemanaCuatroView
  },
  {
    path:"/investigaciones/comunicacioncomponentes",
    name: "comunicacioncomponentes",
    component: SemanaCincoView
  }
];

const router = new VueRouter({
  routes
})

export default router

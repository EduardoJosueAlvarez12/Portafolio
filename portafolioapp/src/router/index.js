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
import SemanaSieteView from '../views/investigations/SemanaSieteView.vue'
import SemanaOchoView from '../views/investigations/SemanaOchoView.vue'
import SemanaNueveView from '../views/investigations/SemanaNueveView.vue'
import SemanaDiezView from '../views/investigations/SemanaDiezView.vue'
import SemanaOnceView from '../views/investigations/SemanaOnceView.vue'
import SemanaDoceView from '../views/investigations/SemanaDoceView.vue'
import PracticasView from '../views/PracticasView.vue'
import LabJavascriptView from '../views/labs/LabJavascriptView.vue'
import LabVueView from '../views/labs/LabVueView.vue'
import LabLaravelCrudView from '../views/labs/LabLaravelCrudView.vue'
import LabLaravelValidacionView from '../views/labs/LabLaravelValidacionView.vue'
import ParcialUnoView from '../views/ParcialUnoView.vue'
import ConclusionsView from '../views/ConclusionsView.vue'

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
    path: "/investigaciones/clasesestilostiemporeal",
    name: "clasesestilostiemporeal",
    component: SemanaTresView
  },
  {
    path: "/investigaciones/componentes",
    name: "componentes",
    component: SemanaCuatroView
  },
  {
    path: "/investigaciones/comunicacioncomponentes",
    name: "comunicacioncomponentes",
    component: SemanaCincoView
  },
  {
    path: "/investigaciones/desarrollophp",
    name: "desarrollophp",
    component: SemanaSieteView
  },
  {
    path: "/investigaciones/introduccionlaravel",
    name: "introduccionlaravel",
    component: SemanaOchoView
  },
  {
    path: "/investigaciones/crudlaravel",
    name: "crudlaravel",
    component: SemanaNueveView
  },
  {
    path: "/investigaciones/laravelrutascontroladores",
    name: "laravelrutascontroladores",
    component: SemanaDiezView
  },
  {
    path: "/investigaciones/validacionlaravel",
    name: "validacionlaravel",
    component: SemanaOnceView
  },
  {
    path: "/investigaciones/apilaravel",
    name: "apilaravel",
    component: SemanaDoceView
  },
  {
    path: "/practicas",
    name: "practicas",
    component: PracticasView
  },
  //enlaces a los laboratorios
  {
    path: "/labs/bootstrapdirectivaslaravel",
    name: "bootstrap",
    component: LabJavascriptView
  },
  {
    path: "/labs/vuecomponents",
    name: "vuecomponents",
    component: LabVueView
  },
  {
    path: "/labs/crudlaravel",
    name: "crudlaravel",
    component: LabLaravelCrudView
  },
  {
    path: "/labs/validacionlaravel",
    name: "validacionlaravel",
    component: LabLaravelValidacionView
  },
  {
    path: "/sitiovuesalud",
    name: "sitiovuesalud",
    component: ParcialUnoView
  },
  {
    path: "/conclusiones",
    name: "conclusiones",
    component: ConclusionsView
  }
];

const router = new VueRouter({
  routes
})

export default router

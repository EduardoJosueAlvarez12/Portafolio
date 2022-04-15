<template>
  <body
    class="loading"
    data-layout-color="light"
    data-leftbar-theme="dark"
    data-layout-mode="fluid"
    data-rightbar-onstart="true"
  >
    <div class="wrapper">
      <!-- Barra de navegacion superior -->
      <b-navbar type="dark" style="background-color: #3a037d; font-size:16px">
        <b-navbar-nav>
          <!-- sidebar button -->
          <b-button
            v-b-toggle.sidebar-1
            style="background-color: #3a037d"
            class="border-0"
          >
            <b-icon icon="menu-button-wide" aria-hidden="true"></b-icon>
          </b-button>

          <b-nav-item to="/">Introducción</b-nav-item>

          <!-- Navbar dropdowns generalidades-->
          <b-nav-item-dropdown text="Generalidades" right>
            <b-dropdown-item to="/asignatura"
              >Descripción de la asignatura</b-dropdown-item
            >
            <b-dropdown-item to="/contenidos"
              >Contenidos de la asignatura</b-dropdown-item
            >
            <b-dropdown-item to="/jornalizacion">Jornalización</b-dropdown-item>
            <b-dropdown-item to="/calendarizacion">Calendarización</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/aboutme">Acerca de mí</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <!-- Termina barra de navegacion superior -->

      <!-- Barra izquierda -->
      <b-sidebar
        id="sidebar-1"
        #default="{ hide }"
        title="Menú"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
      >
        <div class="px-3 py-2">
          <!-- sidebar title -->
          <h4 style="color: #3a037d" id="sidebar-no-header-title">
            Programación Computacional IV
          </h4>

          <!-- divisor -->
          <hr size="2" />

          <h5>Generalidades</h5>

          <b-button class="w-100 btn btn-light" to="/" style="text-align: left"
            >Introducción</b-button
          >
          <b-button class="w-100 btn btn-light" to="/asignatura" style="text-align: left"
            >Descripción de la asignatura</b-button
          >
          <b-button class="w-100 btn btn-light" to="/contenidos" style="text-align: left"
            >Contenidos</b-button
          >
          <b-button class="w-100 btn btn-light" to="/jornalizacion" style="text-align: left"
            >Jornalización</b-button
          >
          <b-button class="w-100 btn btn-light" to="/calendarizacion" style="text-align: left"
            >Calendarización</b-button
          >
          <b-button class="w-100 btn btn-light" to="/aboutme" style="text-align: left"
            >Carta de presentación</b-button
          >

          <!-- divisor -->
          <hr size="2" />

          <!-- Bitacora de aprendizajes -->
          <h5>Bítacora de aprendizajes</h5>

          <!-- collapse button Tareas -->
          <div>
            <b-button
              v-b-toggle.collapse-3
              class="w-100 btn btn-light"
              style="text-align: left; color: #000000"
              >Tareas ex-aula
              <div style="float: right">
                <b-icon icon="caret-down"></b-icon>
              </div>
            </b-button>

            <b-collapse id="collapse-3">
              <b-list-group>
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Cómputo I</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S1 - Introducción a las librerías (Bootstrap y
                  Vue)</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S2 - Rendering y directivas</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S3 - Clases y estilos en tiempo real</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S4 - Componentes</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S5 - Comunicación entre componentes</b-list-group-item
                >
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Cómputo II</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S7 - Introducción al desarrollo con PHP</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S8 - Introducción a Laravel</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S9 - CRUD con Laravel</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S10 -Sistema de rutas y controladores</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S11 - Validación de datos</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" href="#"
                  >S12 - REST API con Laravel</b-list-group-item
                >
              </b-list-group>
            </b-collapse>
          </div>

          <!-- collapse button Investigaciones -->
          <div>
            <b-button
              v-b-toggle.collapse-4
              class="w-100 btn btn-light"
              style="text-align: left"
              >Investigaciones
              <div style="float: right">
                <b-icon icon="caret-down"></b-icon>
              </div>
            </b-button>

            <b-collapse id="collapse-4">
              <b-list-group>
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Cómputo I</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/introduccionalibrerias"
                  >S1 - Introducción a las librerías (Bootstrap y
                  Vue)</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/renderingydirectivas"
                  >S2 - Rendering y directivas</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/clasesestilostiemporeal"
                  >S3 - Eventos, Clases y estilos en tiempo real</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/componentes"
                  >S4 - Componentes</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/comunicacioncomponentes"
                  >S5 - Comunicación entre componentes</b-list-group-item
                >
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Cómputo II</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/desarrollophp"
                  >S7 - Introducción al desarrollo con PHP</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/introduccionlaravel"
                  >S8 - Introducción a Laravel</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/crudlaravel"
                  >S9 - CRUD con Laravel</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/laravelrutascontroladores"
                  >S10 -Sistema de rutas y controladores</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/validacionlaravel"
                  >S11 - Validación de datos</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/investigaciones/apilaravel"
                  >S12 - REST API con Laravel</b-list-group-item
                >
              </b-list-group>
            </b-collapse>
          </div>

          <!-- collapse button Laboratorios -->
          <div>
            <b-button
              v-b-toggle.collapse-6
              class="w-100 btn btn-light"
              style="text-align: left"
              >Laboratorios
              <div style="float: right">
                <b-icon icon="caret-down"></b-icon>
              </div>
            </b-button>

            <b-collapse id="collapse-6">
              <b-list-group>
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Cómputo I</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/bootstrapdirectivaslaravel"
                  >Bootstrap y Directivas Laravel (Laboratorio I -
                  100%)</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/vuecomponents"
                  >Componentes (Laboratorio II - 100%)</b-list-group-item
                >
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Cómputo II</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/crudlaravel"
                  >CRUD Laravel (Laboratorio I - 50%)</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/practicas"
                  >Prácticas Semanales (Laboratorio I - 50%)</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/validacionlaravel"
                  >Validación de datos (Laboratorio II - 50%)</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/"
                  >Portafolio (Laboratorio II - 50%)</b-list-group-item
                >
              </b-list-group>
            </b-collapse>
          </div>

          <!-- collapse button Proyectos -->
          <div>
            <b-button
              v-b-toggle.collapse-7
              class="w-100 btn btn-light"
              style="text-align: left"
              >Proyectos
              <div style="float: right">
                <b-icon icon="caret-down"></b-icon>
              </div>
            </b-button>

            <b-collapse id="collapse-7">
              <b-list-group>
                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Individuales</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/practicas"
                  >Prácticas Semanales</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/"
                  >Portafolio
                </b-list-group-item>

                <b-list-group-item
                  class="border-0 bg-light"
                  style="color: #000000; text-align: center"
                  >Grupales</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/bootstrapdirectivaslaravel"
                  >Directivas Laravel y Bootstrap</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/vuecomponents"
                  >Componentes En Vue</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/crudlaravel"
                  >CRUD Laravel</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/labs/validacionlaravel"
                  >Validación de datos</b-list-group-item
                >
                <b-list-group-item class="border-0 bg-light" to="/sitiovuesalud"
                  >Sitio web Vue.js completo</b-list-group-item
                >
              </b-list-group>
            </b-collapse>
          </div>

          <!-- button Prácticas -->
          <b-button class="w-100 btn btn-light" to="/practicas" style="text-align: left"
            >Prácticas Semanales</b-button
          >

          <b-button class="w-100 btn btn-light" to="/materialesapoyo" style="text-align: left"
            >Materiales de apoyo</b-button
          >

          <b-button class="w-100 btn btn-light" to="/conclusiones" style="text-align: left"
            >Conclusiones</b-button
          >

          <b-img
            src="https://previews.123rf.com/images/yaroslavka/yaroslavka1710/yaroslavka171000006/87333827-vector-binary-code-white-background-big-data-and-programming-hacking-decryption-and-encryption-compu.jpg"
            fluid
            thumbnail
          ></b-img>

          <b-button
            class="border-0"
            style="background-color: #4a08c4"
            block
            @click="hide"
            >Cerrar Barra</b-button
          >
        </div>
      </b-sidebar>
      <!-- Termina la barra izquierda -->

    </div>
    <!-- Aquí termina la seccion de navegacion -->

    <!-- Aqui comienza el contenido -->

    <router-view />
  </body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

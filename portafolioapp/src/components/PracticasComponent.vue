<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Prácticas</div></template
      >

      <hr class="my-4" />

      <h1 style="text-align: center; font-family: Helvetica, sans-serif">
        Programación Computacional IV
      </h1>
      <div style="margin: auto; width: 100%">
        <!-- practicas -->
        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- cómputo II -->
            <b-carousel-slide
              img-src="https://wallpapersmug.com/large/2197f3/programming-code-colorful.jpg"
            >
              <h1 style="font-family: Helvetica, sans serif">Cómputo I</h1>
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/x2OOdVw.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 1 - Introducción a Bootstrap
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/introduccionBootstrap"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/3uJXlTw.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 2 - Introducción a JS
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/Semana2_introduccionJS"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/dRxVvZw.png">
              <h1 style="color: white; font-family: Helvetica, sans serif">
                <span style="background-color: black; opacity: 0.7"
                  >Práctica Semana 3 - Introducción a Vue.js</span
                >
              </h1>
              <a
                style="opacity: 1"
                href="https://github.com/EduardoJosueAlvarez12/Semana3_vueEventos"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/UHiOzRC.png">
              <h1 style="color: white; font-family: Helvetica, sans serif">
                Práctica Semana 4 - Componentes en Vue.js
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/Semana4_Vuejs
"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/M8g4TFg.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 5 - Lectura de API
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/Semana5_vuecomunicacion"
                >Github</a
              >
            </b-carousel-slide>

            <!-- cómputo II -->
            <b-carousel-slide
              img-src="https://wallpapersmug.com/large/2197f3/programming-code-colorful.jpg"
            >
              <h1 style="font-family: Helvetica, sans serif">Cómputo II</h1>
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/MmkHE9M.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 7 - Introducción a PHP
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/PrograIV_C2_Practicas"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/Nr3O4cp.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 8 - Primera app Laravel
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/PrograIV_C2_Practicas"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/1qB1NpK.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 9 - Primeros pasos para CRUD Laravel
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/PrograIV_C2_Practicas"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/qwXsxam.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 10 - CRUD Laravel
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/PrograIV_C2_Practicas"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/7lc7Z6A.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 11 - Laravel - Jetstream - Livewire app
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/PrograIV_C2_Practicas"
                >Github</a
              >
            </b-carousel-slide>

            <b-carousel-slide img-src="https://i.imgur.com/XZZ8UTF.png">
              <h1 style="color: black; font-family: Helvetica, sans serif">
                Práctica Semana 12 - Laravel API
              </h1>
              <a
                href="https://github.com/EduardoJosueAlvarez12/PrograIV_C2_Practicas"
                >Github</a
              >
            </b-carousel-slide>

          </b-carousel>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "PracticasComponent",
};
</script>
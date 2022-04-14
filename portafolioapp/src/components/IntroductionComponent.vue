<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Introducción</div></template
      >

      <hr class="my-4" />

      <h1 style="text-align: center; font-family: Helvetica, sans-serif">
        Programación Computacional IV
      </h1>
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://wallpapersmug.com/large/2197f3/programming-code-colorful.jpg"
          alt="Header Image"
        ></b-img>
      </div>
    </b-jumbotron>

    <!-- cuerpo del contenido -->
    <b-container
      fluid="md"
      class="text-justify"
      style="font-family: Helvetica, sans-serif; font-size: 18px"
    >
      <p>
        En este sitio web compartiré los conocimientos y las competencias
        adquiridas en la asignatura “Programación Computacional IV”. Este sitio
        consiste en un portafolio que incluye mi análisis de los temas
        impartidos en cada módulo y el trabajo de investigación realizado con el
        fin de profundizar en los temas; entre ellos el aprendizaje en cuanto a
        desarrollo web, el uso de distintos frameworks y entornos de desarrollo,
        herramientas y metodologías impartidos por la docente.
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "IntroductionComponente",
};
</script>
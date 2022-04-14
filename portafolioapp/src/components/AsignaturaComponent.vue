<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Descripción de la asignatura
        </div></template
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
        Los estudiantes comprenden y aplican los lenguajes y tecnologías para el
        desarrollo de aplicaciones para computadoras, dispositivos móviles; sin
        embargo, aún no conocen la integración de los elementos de desarrollo de
        sistemas para la Web que les permita crear soluciones profesionales en
        entornos distribuidos. Se pretende que, en la asignatura, los
        estudiantes adquieran las competencias para desarrollar programas
        orientados a entornos Web.
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AsignaturaComponent",
};
</script>
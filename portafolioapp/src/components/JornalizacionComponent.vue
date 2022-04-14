<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Jornalización de la asignatura
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
    <b-container fluid="md">
      <div
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        "
      >
        <img fluid src="@/assets/jornalizacion.png" alt="jornalizacion" />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "JornalizacionComponent",
};
</script>
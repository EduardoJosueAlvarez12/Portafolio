<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Sitio Web con Vue.js</div></template
      >

      <hr class="my-4" />

      <div style="margin: auto; width: 100%">
        <div>
          <b-img
            fluid
            src="https://i.imgur.com/PCEMXg9.png"
            alt="Header Image"
          ></b-img>
        </div>
      </div>
    </b-jumbotron>

    <!-- cuerpo del contenido -->
    <b-container
      fluid="md"
      class="text-justify"
      style="font-family: Helvetica, sans-serif; font-size: 18px"
    >
      <p>
        Descripción: Crear un sitio web que use todos los contenido acerca de
        Vue.js impartidos en el cómputo I.
      </p>
      <a href="https://github.com/EduardoJosueAlvarez12/ParcialI-PrograIV"
        >Github</a
      >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ParcialUnoComponent",
};
</script>
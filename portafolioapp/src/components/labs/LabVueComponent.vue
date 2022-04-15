<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          C1 - Lab2 - Componentes en Vue.js
        </div></template
      >

      <hr class="my-4" />

      <div style="margin: auto; width: 100%">
        <div>
          <b-img
            fluid
            src="https://i.imgur.com/MpEk5YX.png"
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
        Descripción: Aplicación web de una página con Vue.js, haciendo uso de
        componentes. Utilice componentes para realizar los distintos tipos de
        conversiones.
      </p>
      <a href="https://github.com/torres1718/tareaSemana4">Github</a>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LabVueComponent",
};
</script>
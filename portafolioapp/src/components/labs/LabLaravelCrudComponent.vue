<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">C2 - Lab1 - Laravel CRUD</div></template
      >

      <hr class="my-4" />

      <div style="margin: auto; width: 100%">
        <div>
          <b-img
            fluid
            src="https://i.imgur.com/qNbQPvw.png"
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
      <p>Descripción: Crear un crud con Laravel para una tabla actores.</p>
      <a
        href="https://github.com/EduardoJosueAlvarez12/Laboratorio1-C2-PrograIV"
        >Github</a
      >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LabLaravelCrudComponent",
};
</script>
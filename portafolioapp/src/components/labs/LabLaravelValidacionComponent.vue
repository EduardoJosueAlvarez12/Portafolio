<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          C2 - Lab2 - Validación de datos en Laravel
        </div></template
      >

      <hr class="my-4" />

      <div style="margin: auto; width: 100%">
        <div>
          <b-img
            fluid
            src="https://i.imgur.com/WcNaj9W.png"
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
        Descripción: Crear un crud con Laravel para una tabla estudiantes, hacer
        uso de validaciones.
      </p>
      <a href="https://github.com/juanVillatoro/Semana11_Validaciones">Github</a>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LabLaravelValidacionComponent",
};
</script>
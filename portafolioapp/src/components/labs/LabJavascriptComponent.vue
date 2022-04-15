<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          C1 - Lab1 - Bootstrap y Directivas Laravel
        </div></template
      >

      <hr class="my-4" />

      <div style="margin: auto; width: 100%">
        <div>
          <b-img
            fluid
            src="https://i.imgur.com/AIUmhC6.png"
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
        Descripción: Mostrar sus datos personales haciendo uso de directivas y
        estilos. Luego hacer uso de una variable y mostrar los nombres de los
        integrantes. Finalmente, crear un arreglo que contenga nombres de
        películas y mostrarlo mediante una lista.
      </p>
      <a href="https://github.com/EduardoJosueAlvarez12/Semana2_introduccionJS">Github</a>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LabJavascriptComponent",
};
</script>
<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Calendarización</div></template
      >

      <hr class="my-4" />
    </b-jumbotron>

    <!-- cuerpo del contenido -->
    <b-container
      fluid="md"
      class="text-justify"
      style="font-family: Helvetica, sans-serif; font-size: 18px"
    >
      <div style="margin: auto; width: 80%">
        <b-img
          fluid
          src="https://www.ugb.edu.sv/images/2022/01/20/calendarizacionciclo12022.png"
          alt="Header Image"
        ></b-img>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CalendarizacionComponent",
};
</script>
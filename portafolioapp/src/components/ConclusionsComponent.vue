<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Conclusiones</div></template
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
      <ul>
        <li>
          Aprendí que el uso de librerías frontend como Bootstrap supone una
          habilidad muy importante ya que permiten crear sitios web con mayor
          rapidez y versatilidad.
        </li>
        <li>
          Adquirí la competencia de desarrollar sitios web haciendo uso de
          Vue.js; este fue de mis contenidos de preferencia y considero que, ya
          que en la actualidad el uso de frameworks es la regla, esta será una
          habilidad que impulsará mucho mi desarrollo como profesional.
        </li>
        <li>
          Laravel es otro framework muy útil y que a diferencia de Vue.js, está
          más orientado al backend, es importante porque permite gestionar bases
          de datos y crear un CRUD completo en relativa brevedad.
        </li>
        <li>
          También fui capaz de crear una API sencilla haciendo uso de Laravel.
          Pienso que integrar este contenido con Vue.js supondrá una poderosa
          herramienta, ya que estaríamos juntando tanto un framework de backend
          como de frontend, lo que nos permitirá tener una visión más amplia de
          lo que significa desarrollar un sistema o sitio web completo.
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ConclusionsComponent",
};
</script>
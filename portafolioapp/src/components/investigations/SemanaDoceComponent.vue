<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">API con Laravel</div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://blog.atani.com/wp-content/uploads/2021/07/api-key-atani.png"
          alt="Header Image"
        ></b-img>
      </div>
    </b-jumbotron>

    <!-- cuerpo del contenido -->
    <b-container
      fluid="md"
      class="text-justify"
      style="font-family: Helvetica, sans-serif; font-size: 14px"
    >
      <h2>¿Qué es una API REST?</h2>

      <p>
        Una API de REST, o API de RESTful, es una interfaz de programación de
        aplicaciones (API o API web) que se ajusta a los límites de la
        arquitectura REST y permite la interacción con los servicios web de
        RESTful. El informático Roy Fielding es el creador de la transferencia
        de estado representacional (REST).
      </p>

      <p>
        Las API son conjuntos de definiciones y protocolos que se utilizan para
        diseñar e integrar el software de las aplicaciones.Suele considerarse
        como el contrato entre el proveedor de información y el usuario, donde
        se establece el contenido que se necesita por parte del consumidor (la
        llamada) y el que requiere el productor (la respuesta).Por ejemplo, el
        diseño de una API de servicio meteorológico podría requerir que el
        usuario escribiera un código postal y que el productor diera una
        respuesta en dos partes: la primera sería la temperatura máxima y la
        segunda, la mínima. En otras palabras, las API le permiten interactuar
        con una computadora o un sistema para obtener datos o ejecutar una
        función, de manera que el sistema comprenda la solicitud y la cumpla.
      </p>

      <ul>
        <li>
          “required”: la cual obliga que los campos no se dejen en blanco.
        </li>
        <li>“pattern”: permite validar mediante expresiones regulares.</li>
      </ul>

      <h4>Ejemplo con los verbos HTTP</h4>
      <img
        src="https://uploads.toptal.io/blog/image/129527/toptal-blog-image-1554403309193-a0c5052b2eca561e79ac3e58add1338f.png"
        style="margin: auto; width: 60%"
        alt="ejemplo de verbos html"
      />

      <br />
      <hr class="my-4" />

      <h2>Importancia de las APIs</h2>
      <p>
        Las APIs son importantes porque permiten integrar las aplicaciones con
        el fin de diseñar sistemas de intercambio de datos mediante la ejecución
        de procesos predefinidos. Nos facilita el desarrollo de soluciones a la
        interacción entre las aplicaciones, los clientes y las empresas.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        Considero que el proceso de creación se me dificultó un poco, sin
        embargo, la práctica me permitió adquirir una mejor visión del proceso.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Una API es una interfaz que permite interactuar con servicios RESTful.
        </li>
        <li>
          Aprendí a desarrollar una API básica usando Laravel y los métodos
          HTTP.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Castelo, A. (n.d.). Laravel API Tutorial: How to Build and Test a
          RESTful API | Toptal. Retrieved from Toptal:
          https://www.toptal.com/laravel/restful-laravel-api-tutorial
        </li>
        <li>
          Red Hat. (2020, Mayo 8). ¿Qué es una API de REST? | Red Hat. Retrieved
          from Red Hat:
          https://www.toptal.com/laravel/restful-laravel-api-tutorial
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaDoceComponent",
};
</script>
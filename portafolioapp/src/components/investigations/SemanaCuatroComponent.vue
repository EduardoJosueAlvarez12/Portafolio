<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Componentes En Vue.js</div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          thumbnail
          fluid
          src="https://v2.vuejs.org/images/components.png"
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
      <h2>¿Qué es la arquitectura de componentes?</h2>

      <p>
        Es un tipo de arquitectura de aplicación compuesta de bloques de códigos
        independientes, modulares y reutilizables llamados componentes. Al
        diseñar una aplicación basada en componentes, los desarrolladores
        combinan, reutilizan y versionan estos objetos, ahorrando mucho tiempo,
        ya que se evitan construir cada parte de la aplicación desde cero.
      </p>

      <h2>Componentes en Vue.js</h2>
      <p>
        Los componentes son instancias de Vue con un nombre determinado. Una
        forma común de trabajar una aplicación con esta arquitectura es mediante
        una estructura de árbol en la que cada sección del sitio web está
        conformada por uno o varios componentes. Estos se declaran de la
        siguiente forma:
      </p>
      <p>Vue.component('my-component-name', {</p>
      <p>// ... opciones ...</p>
      <p>})</p>

      <p>
        Los componentes de una aplicación deben ser registrados, dicho proceso
        puede realizarse de dos formas, la primera de ella es globalmente, de
        manera que este se encuentre disponible en toda la aplicación, incluso
        dentro de subcomponentes. Por otro lado, el registro local, como su
        nombre sugiere, únicamente permite al componente ser usado dentro de esa
        misma instancia, esto se hace mediante la propiedad “components”.
        Adicionalmente, los componentes locales tampoco se pueden usar en los
        descendentes.
      </p>

      <br />
      <hr class="my-4" />

      <h2>¿Cuál es la importancia de los componentes en Vue.js?</h2>
      <p>
        Son un objeto muy útil para el desarrollo ya que permiten utilizar los
        conceptos de reciclaje de código y la modularización, creando proyectos
        con una estructura más ordenada y ahorrar tiempo en el desarrollo.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        En este contenido en particular no tuve muchas dificultades, solo tuve
        que estudiar a fondo la estructura de proyectos Vue.js cuando se trabaja
        con rutas.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Aprendí que los componentes son parte esencial de Vue.js y que estos
          promueven la modularización, la reutilización y el desarrollo rápido.
        </li>
        <li>
          Estos componentes pueden ser registrados de dos maneras distintas,
          local y globalmente, en el caso de la segunda, permite usar los
          componentes en toda la aplicación.
        </li>
        <li>
          Adquirí la capacidad de desarrollar proyectos Vue.js haciendo uso de
          rutas.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Afonso, F. (22 de Octubre de 2020). Component Architecture: 3 Reasons
          to Invest in One - outsystems. Obtenido de outsystems:
          https://www.outsystems.com/blog/posts/component-architecture/#:~:text=A%20component%20architecture%20is%20a,reusable%20building%20blocks%20called%20components
        </li>
        <li>
          Conceptos básicos de componentes - Vue.js. (s.f.). Obtenido de Vue.js:
          https://es.vuejs.org/v2/guide/components.html
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaCuatroComponent",
};
</script>
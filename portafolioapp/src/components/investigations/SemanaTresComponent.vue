<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Eventos - Clases Y Estilos En Tiempo Real
        </div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          
          fluid
          src="https://events.vuejs.org/logo.png"
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
      <h2>¿Qué son los eventos?</h2>

      <p>
        Este concepto se relaciona con JavaScript y HTML. Se suele definir como
        el cambio en el estado de un objeto. Son muy útiles ya que se pueden
        programar scripts que reaccionen a estos eventos, esto se puede realizar
        mediante manejadores de eventos. Además, vue.js tiene su propia forma de
        manejarlos mediante directivas.
      </p>

      <h2>Vue.js - directiva v-on</h2>
      <p>
        En Vue suele utilizarse la directiva “v-on” o su forma acortada “@” para
        manejar los eventos del DOM y correr JavaScript que reaccione a estos.
        La estructura que suele verse algo como:
      </p>

      <ul>
        <li>
          v-on:nombreEvento.modificador(parámetro). Por ejemplo:
          v-on:click.once(“¡Saludos!”).
        </li>
        <li>
          @nombreEvento.modificador(parámetro). Por ejemplo:
          @click.once(“¡Saludos!”).
        </li>
      </ul>

      <p>
        Algunos de los eventos más utilizados son “click”, “mouseover”,
        “submit”, “keyup”, “keydown”, “drag” y “scroll”.
      </p>

      <p>
        Algunos modificadores son “.stop”, “.prevent”, “.self”, “.capture”,
        “.once” y “.passive”. El mouse también tiene modificadores propios
        (“.enter”, “.tab”, “.delete”, “.esc”, “.space”, “.up”, “.down”, “.left”
        y “.right”) y de igual manera las teclas tienen alias (“.left”, “.right”
        y “.middle”).
      </p>

      <br />
      <hr class="my-4" />

      <h2>Clases y Estilos En Tiempo Real</h2>
      <p>
        Una forma de trabajar con clases y estilos reactivos es mediante la
        directiva “v-bind” o su forma resumida “:”, por ejemplo:
      </p>
      <ul>
        <li>
          v-bind:style = “{color: variableColor, fontSize: variableFontSize}”
        </li>
        <li>:class = “[‘navbar-dark’, ‘bg-dark’, ‘navbar’]”</li>
      </ul>

      <br />
      <hr class="my-4" />
      <h2>¿Cuál es la importancia del tema?</h2>
      <p>
        El manejo de eventos nos permite crear sitios web más interactivos,
        incluso nos puede facilitar la manipulación de datos y variables, así
        como la comunicación entre componentes. Por otro lado, el uso de estilos
        y clases reactivas le proporciona un mayor grado de dinamismo,
        vistosidad y personalización a nuestros sitios.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        Una de las pocas dificultades fue el formato que se suele usar para el
        manejo de “style” y “class” mediante la directiva “v-bind”. Pude
        solucionar mis dudas investigando más en internet y encontrando lo que
        les funcionaba a otras personas.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          La directiva “v-on” es la herramienta más usada en Vue para manejar
          eventos que ocurren en el DOM.
        </li>
        <li>
          Aprendí que la directiva “v-bind” puede ser utilizada con “style” y
          “class”.
        </li>
        <li>
          Vue permite trabajar con clases y estilos reactivos mediante el uso de
          “binding”.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>

      <ul>
        <li>
          Javatpoint. (s.f.). JavaScript Events - Javatpoint. Obtenido de
          Javatpoint: https://www.javatpoint.com/javascript-events
        </li>
        <li>
          Vue.js. (s.f.). Event Handling | Vue.js. Obtenido de Vue.js:
          https://vuejs.org/guide/essentials/event-handling.html#calling-methods-in-inline-handlers
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaTresComponent",
};
</script>
<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Rendering y Directivas</div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          thumbnail
          fluid
          src="https://i.morioh.com/200524/d057f525.jpg"
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
      <h2>¿Qué es el rendering declarativo en Vue.js?</h2>

      <p>
        El rendering declarativo nos permite cargar datos en el DOM utilizando
        sintaxis sencilla. El ejemplo más claro es el uso de llaves dobles para
        interpolar datos que se necesitan representar en el DOM.
      </p>

      <h2>¿Qué son las directivas?</h2>
      <p>
        En esencia, una directiva son instrucciones o pequeños fragmentos de
        código utilizados que pueden ser usados en HTML y la vez enviar
        instrucciones a Vue.js; estas permiten manipular el HTML y crear
        atributos dinámicos en Vue. Existen dos tipos de directivas en Vue.js:
      </p>

      <p>Directivas integradas como:</p>
      <ul>
        <li>
          “v-text”, que permite manipular la propiedad del elemento
          “textContent”.
        </li>
        <li>“v-html”, que permite insertar contenido HTML plano.</li>
        <li>“v-show”, manipula la propiedad CSS “display”.</li>
        <li>
          “v-if”, “v-else-if” “v-else”, renderiza un elemento en función del
          resultado de una condicional.
        </li>
        <li>
          “v-for”, puede renderizar elementos múltiples veces dependiendo de la
          fuente de los datos.
        </li>
        <li>“v-on”, permite adjuntar un “event listener” a un elemento.</li>
        <li>
          “v-bind”, enlaza dinámicamente uno o más atributos o propiedad de un
          componente a una expresión.
        </li>
        <li>
          “v-model”, crea un enlace de dirección doble entre las entradas de un
          formulario o salidas de componentes.
        </li>
      </ul>

      <p>
        Directivas personalizadas. Vue.js nos permite crear nuestras propias
        directivas declaradas global o localmente, lo que facilitar incorporar
        nuevas funcionalidades a nuestras aplicaciones; de igual manera que con
        las integradas, es posible definir argumentos, modificadores y valores.
      </p>

      <br />
      <hr class="my-4" />

      <h2>¿Por qué es importante aprender cómo usar directivas?</h2>
      <p>
        Es necesario aprender cómo utilizarlas ya que estas suponen herramientas
        muy versátiles para el desarrollo, nos permiten crear aplicaciones más
        dinámicas e interactivas, así como manipular y enlazar componentes o
        elementos con menos líneas y dentro del propio código HTML. Como ya se
        mencionó, estos elementos permiten realizar más en menos tiempo,
        favoreciendo la productividad, un aspecto que siempre ha sido muy
        valorado por las empresas.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        Me fue difícil comprender la diferencia entre algunas directivas, como
        “v-model” y “v-bind”, pero logré comprender mejor su funcionamiento
        mediante la práctica, entendiendo así que sus características
        distintivas son la bidireccionalidad y la unidireccionalidad.
      </p>
      <p>
        También se me hizo un poco complicada la creación de directivas
        personalizadas, pero conseguí entender mejor este concepto mediante la
        investigación y búsqueda de algunos ejemplos en línea.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Comprendí que el rendering y la interpolación son dos conceptos muy
          importantes en el desarrollo y que facilitan la manipulación de datos
          y otros elementos.
        </li>
        <li>
          Identifiqué las diferencias entre las distintas directivas integradas
          y cómo cada una aporta funcionalidades a las aplicaciones.
        </li>
        <li>
          Aprendí cómo utilizar algunas directivas y que son importantes porque
          permiten crear sitios más dinámicos, interactivos y personalizados.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Js., H. (11 de Febrero de 2021). Vue.js Declarative Rendering -
          GeeksforGeeks. Obtenido de GeeksforGeeks:
          https://www.geeksforgeeks.org/vue-js-declarative-rendering/#:~:text=Declarative%20rendering%20in%20Vue%20enables,required%20data%20in%20the%20DOM
        </li>
        <li>
          saxena, K. (5 de Marzo de 2022). VueJS: Directives - Coding Ninjas.
          Obtenido de Coding Ninjas:
          https://www.codingninjas.com/codestudio/library/vuejs-directives
        </li>
        <li>
          vuejs.org. (s.f.). Built-in Directives | Vue.js. Obtenido de Vue.js:
          https://vuejs.org/api/built-in-directives.html
        </li>
        <li>
          vuejs.org. (s.f.). Custom Directives | Vue.jss. Obtenido de Vue.js:
          https://vuejs.org/guide/reusability/custom-directives.html
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaDosComponent",
};
</script>
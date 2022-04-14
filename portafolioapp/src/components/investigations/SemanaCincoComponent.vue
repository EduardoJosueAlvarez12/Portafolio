<template>
  <div id="contenidos">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Comunicación Entre Componentes En Vue.js
        </div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          thumbnail
          fluid
          src="https://miro.medium.com/max/1200/1*yEr1sWh-nbtokQDklz36Bw.jpeg"
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
      <h2>Comunicación entre componentes en Vue.js</h2>

      <p>
        Existen distintas formas de comunicar componentes en vue.js dependiendo
        de la naturaleza y la relación entre estos. Algunos de los más comunes
        son los siguientes:
      </p>

      <h4>Comunicación de componente padre a hijo</h4>
      <p>
        En este tipo de comunicación, se hace uso de la directiva “v-bind” para
        pasarle datos o variables desde el componente padre al hijo, por otro
        lado, este último recibe esos parámetros mediante la propiedad
        “props”.,.
      </p>

      <h4>Comunicación de componente hijo a padre</h4>
      <p>
        En este caso los eventos aseguran la comunicación de hijo a padre; el
        componente hijo puede hacer uso de “$emit” para enviar un mensaje y este
        puede ser recibido por el padre mediante la directiva “v-on”.
      </p>

      <h4>Comunicación entre componentes cualquiera</h4>
      <p>
        Si se desea que los datos de un componente puedan ser escuchados por
        cualquier otro se hace uso de “Event Bus”. Para ello se dispara un
        evento desde el componente haciendo uso de “this.$root.$emit”; mientras
        tanto, para recibir los datos en otro componente se necesitar un “event
        listener” en “mounted()”.
      </p>

      <br />
      <hr class="my-4" />

      <h2>¿Cuál es la importancia de la comunicación entre componentes?</h2>
      <p>
        Es necesario conocer las opciones con las que cuenta el framework,
        puesto que para la mayoría de los sitios web dinámicos es necesario
        manipular los datos y la información, o transferirla a distintos módulos
        de la aplicación.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <ul>
        <li>
          La comunicación de hijo a padre se me hizo un poco compleja, pero con
          la práctica y un poco de investigación en la web logré comprender
          mejor cómo realizarla.
        </li>
        <li>
          La comunicación entre componentes cualesquiera mediante el “Event Bus”
          no me quedó demasiado clara al principio, pero encontré unos ejemplos
          que me sirvieron como referencia para entender el concepto.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Para comunicar componentes padres e hijos los métodos más utilizados
          son la directiva “v-bind” y la propiedad “props” o los eventos y el
          uso “$emit”.
        </li>
        <li>
          Aprendí que también es posible comunicar componentes cualesquiera y
          para ellos debe hacer uso de los “Event Bus” y los “Event Listener” en
          la propiedad “computed()”
        </li>
        <li>
          Es importante saber cómo comunicar componentes ya que en muchas
          ocasiones es necesario enviar y recibir información y datos entre
          estos.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Roy, S. (8 de Abril de 2019). Component Communication in Vue.js |
          medium.com. Obtenido de medium.com:
          https://medium.com/js-dojo/component-communication-in-vue-js-ca8b591d7efa
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaCincoComponent",
};
</script>
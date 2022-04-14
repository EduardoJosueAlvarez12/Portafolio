<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Introducción a las librerías (Bootstrap y Vuejs)
        </div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          thumbnail
          fluid
          src="https://i.ytimg.com/vi/Vu5QKn24uYs/maxresdefault.jpg"
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
      <h2>¿Qué es Bootstrap?</h2>

      <p>
        Se trata de unos de los framework de desarrollo front-end más populares.
        Bootstrap destaca por su versatilidad y por facilitar el desarrollo de
        sitios web más dinámicos e interactivo. Entrega algunas de las ventajas
        que lo caracterizan se encuentran:
      </p>

      <ul>
        <li>Es de uso gratuito.</li>
        <li>Cuenta con una gran cantidad de plantillas predeterminadas</li>
        <li>
          Posee un gran abanico de componentes, elementos y formularios
          prediseñados
        </li>
        <li>Se pueden implementar JavaScript plug-ins</li>
        <li>
          Es fácil de utilizar y permite el desarrollo rápido de sitios web.
        </li>
        <li>
          El diseño es multiplataforma, puede adaptarse a los dispositivos
          móviles.
        </li>
      </ul>

      <h4>¿Cómo implementarlo?</h4>
      <p>
        Bootstrap es extremadamente fácil de utilizar, para ello existen dos
        principales métodos, siendo el primero de ellos la instalación mediante
        un manejador de paquetes, como npm:
      </p>

      <ul>
        <li>npm install bootstrap</li>
        <li>gem install bootstrap -v 5.1.3</li>
      </ul>

      <p>
        Otra forma de usar Bootstrap es mediante los enlaces “cdn” que pueden
        encontrarse en la siguiente página:
      </p>

      <ul>
        <li>https://getbootstrap.com/docs/5.1/getting-started/download/</li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>¿Qué es VueJS?</h2>
      <p>
        Es un framework JavaScript orientado al desarrollo de interfaces y
        basado en una arquitectura de componentes. Fue creado por Evan You y
        lanzado en el 2014. Algunas de las características que lo definen son:
      </p>
      <ul>
        <li>Trabaja con HTML, CSS y JavaScript.</li>
        <li>
          Tiene una curva de aprendizaje menor que la de algunos de sus rivales,
          por que es considerablemente fácil apropiarse de este.
        </li>
        <li>Tiene una de las documentaciones más amplias y completas.</li>
        <li>
          Su modelo basado en componentes facilita la reutilización de código y
          agila el desarrollo web.
        </li>
        <li>
          Promueve el desarrollo de sitios web de una página, sin embargo,
          permite perfectamente el desarrollo de sitios web de múltiples páginas
          mediante “Vue Router”.
        </li>
        <li>Permite trabajar con propiedades computadas.</li>
        <li>
          Agiliza la manipulación de variables y datos mediante “Data Binding”.
        </li>
        <li>
          Su característica modular facilita la implementación de paquetes de
          terceros.
        </li>
      </ul>

      <br />

      <h4>¿Cómo implementarlo?</h4>
      <p>Puede realizarse mediante el cdn:</p>
      <ul>
        <li>
          '&lt;script
          src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js">'&lt;/script>
        </li>
      </ul>
      <p>También puede descargarse mediante npm:</p>
      <ul>
        <li>npm install -g @vue/cli</li>
      </ul>

      <hr class="my-4" />

      <h2>¿Cuál es la importancia del uso de frameworks?</h2>
      <p>
        Los frameworks son herramientas extremadamente útiles para los
        desarrolladores, estos permiten optimizar la creación de sitios web,
        puesto que evitan la tediosa tarea de tener que crearlos completamente
        desde cero. Otra razón para usarlos es porque sirven como una guía para
        el desarrollo dependiendo del tipo de arquitectura que se trabaje.
      </p>
      <p>
        En el caso de Bootstrap potencia la interactividad y facilita el diseño
        de la interfaz gráfica de sitios web puesto que cuenta con una gran
        variedad elementos, componentes y plantillas prediseñadas. Por otro
        lado, VueJS nos ofrece una base para la creación de proyectos que
        involucren JavaScript y su arquitectura de componentes favorece la
        reutilización de código y el desarrollo web rápido.
      </p>
      <p>
        La creciente utilización de frameworks en la actualidad es una realidad
        que no se puede negar, raramente las empresas trabajan el desarrollo
        mediante la utilización de lenguajes de programación puros, sino que
        implementar el uso de estas herramientas, siendo esta otra razón por la
        que es tan importante aprender a utilizarlos.
      </p>

      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        A pesar de que los frameworks no son un concepto nuevo para mí, si lo
        fue la arquitectura de componentes, pero conseguí comprender mejor la
        estructura de estos proyectos indagando en la web y la documentación de
        VueJS.
      </p>

      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Aprendí que Bootstrap es muy útil para el desarrollo front-end, es
          decir, todo aquello relacionado con el diseño de la interfaz de
          usuario.
        </li>
        <li>
          Comprendí el concepto de la arquitectura basada en componentes y como
          esta vuelve a VueJS una herramienta muy potente para el desarrollo
          web.
        </li>
        <li>
          Identifiqué la importancia de los frameworks discutidos y porque son
          muy utilizados en el mercado por las empresas.
        </li>
      </ul>

      <hr class="my-4" />

      <h2>Bibliografía</h2>

      <ul>
        <li>
          Angular Minds. (22 de Octuubre de 2020). Top 10 VueJS Benefits For Web
          Application Development | Angular Minds. Obtenido de Angular Minds:
          https://www.angularminds.com/blog/article/top-10-features-of-vuejs-for-web-apps.html
        </li>
        <li>
          Azam, S. (2021). What is Vue.js, and Why is it Cool? | linuxhint.com.
          Obtenido de linuxhint.com: https://linuxhint.com/about_vue_js/
        </li>
        <li>
          Bootstrap. (2022). Download - Bootstrap. Obtenido de Bootstrap:
          https://getbootstrap.com/docs/5.1/getting-started/download/
        </li>
        <li>
          javaTpoint. (2022). What is Bootstrap - javaTpoint. Obtenido de
          javaTpoint: https://www.javatpoint.com/what-is-bootstrap
        </li>
        <li>
          VueJS. (2022). Instalación - Vue.js. Obtenido de Vue.js:
          https://es.vuejs.org/v2/guide/installation.html
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaUnoComponent",
};
</script>
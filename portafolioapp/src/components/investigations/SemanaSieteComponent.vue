<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Introducción al desarrollo con PHP
        </div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
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
      <h2>¿Qué es PHP?</h2>

      <p>
        Es un lenguaje de programación adecuado para el desarrollo web y puede
        ser incrustado en HTML. PHP empezó como un proyecto de código abierto,
        su primera versión fue lanzada por Rasmus Lerdorf en 1994.
      </p>

      <p>
        PHP es un lenguaje de script del lado del servidor incrustado en HTML.
        Es usado para manipular contenido dinámico, bases de datos, monitoreo de
        sesiones e incluso construir sitios e-commerce completos. Es compatible
        con la gran mayoría de las bases de datos más populares, incluyendo
        MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.
        PHP también es compatible con un gran número de protocolos como POP3,
        IMAP y LDAP. El soporte para Java y arquitecturas COM y CORBA fue
        introducido en PHP4.
      </p>

      <h4>Usos comunes de PHP</h4>
      <ul>
        <li>
          Puede realizar funciones de sistema, por ejemplo, manipular archivos
          de sistema.
        </li>
        <li>
          Facilita la manipulación y recolección de datos de formularios, así
          como la gestión de correo electrónico.
        </li>
        <li>
          También permite añadir, eliminar y modificar elementos de la base de
          datos.
        </li>
        <li>
          Puede restringir el acceso de los usuarios a ciertas páginas del sitio
          web y también permite encriptar datos.
        </li>
      </ul>

      <h4>Características</h4>
      <ul>
        <li>Simplicidad</li>
        <li>Eficiencia</li>
        <li>Seguridad</li>
        <li>Flexibilidad</li>
        <li>Familiaridad</li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>¿Por qué es importante PHP?</h2>
      <p>
        Es un lenguaje de código abierto y gratuito, además de poder correr sus
        aplicaciones en prácticamente cualquier sistema operativo; además, se
        distingue de otros lenguajes backend por la facilidad con la que puede
        conectar y manipular bases de datos, formularios y el hecho de que puede
        ser embebido directamente en HTLM.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        Se me hizo un poco difícil acostumbrarme a la sintaxis de PHP, pues si
        bien la lógica de todos los lenguajes de programación es la misma,
        trabaja con algunos símbolos distintos a los que estoy acostumbrado.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>PHP es un lenguaje que se corre del lado del servidor.</li>
        <li>
          Es uno de los pocos lenguajes backend que puede ser directamente
          incrustado en HTML.
        </li>
        <li>
          Es multiplataforma, sus aplicaciones pueden correr en casi cualquier
          sistema operativo, además, destaca por su compatibilidad con los
          gestores de bases de datos y los protocoles más populares.
        </li>
        <li>
          Una de sus principales virtudes es la facilidad con la que permite
          manipular formularios y bases de datos.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          GeeksforGeeks.org. (1 de Septiembre de 2021). Advantages and
          Disadvantages of PHP - GeeksforGeeks. Obtenido de GeeksforGeeks:
          https://www.geeksforgeeks.org/advantages-and-disadvantages-of-php/
        </li>
        <li>
          tutorialspoint. (2021). PHP - Introduction | tutorialspoint.com.
          Obtenido de tutorialspoint.com:
          https://www.tutorialspoint.com/php/php_introduction.htm
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaSieteComponent",
};
</script>
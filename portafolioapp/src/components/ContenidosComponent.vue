<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Contenidos de la asignatura
        </div></template
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
      <h4><b> UNIDAD I Desarrollo Frontend con librerías del lado del cliente </b></h4>
      <br>
      <p>1.1 Introducción a la librería Vue.js y Bootstrap</p>
      <p>1.2 Rendering Declarativo y Manipulación de DOM</p>
      <p>1.3 Declarativo y Manipulación de DOM</p>

      <br />
      <hr class="my-4" />

      <h4><b>
        UNIDAD II Desarrollo Backend con el Framework del lado del servidor y
        base de datos.
      </b></h4>
      <br>
      <p>2.1 Introducción al desarrollo con PHP</p>
      <p>2.2 Instalación y configuración del servidor Web</p>
      <p>2.3 Introducción a Laravel</p>
      <p>2.4 Conectando a una BD MySQL con Laravel</p>
      <p>2.5 CRUD con Laravel</p>
      <p>2.6 Formularios con Laravel</p>
      <p>2.7 Sistemas de rutas y controladores</p>
      <p>
        2.8 Validación de datos (rutas, vistas, formularios y controladores)
      </p>
      <p>2.9 Blade: sistema de plantillas avanzado</p>
      <p>2.10 Trabajando con Laravel/UI</p>

      <br />
      <hr class="my-4" />

      <h4><b> UNIDAD III Incorporando tecnologías de Servidor Web </b></h4>
      <br>
      <p>3.1 Introducción a Node.js</p>
      <p>3.2 Instalación y configuración de Node.js</p>
      <p>3.3 Asincronismo en Node.js</p>
      <p>3.4 Módulos Nativos</p>
      <p>3.5 Introducción a Express</p>
      <p>3.6 Servicios de datos en Node.js con MongoDB</p>
      <p>3.7 Aplicaciones Real-Time en Node.js con Socket.io</p>

    </b-container>
  </div>
</template>
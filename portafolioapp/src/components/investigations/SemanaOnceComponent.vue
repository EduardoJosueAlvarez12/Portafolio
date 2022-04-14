<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Validación de Datos en Laravel
        </div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://www.phpflow.com/wp-content/uploads/2018/09/laravel-validation-1200x865.png"
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
      <h2>Validación de datos</h2>

      <p>
        Una de las maneras más sencillas de validar datos es mediante las
        opciones que nos ofrecen las etiquetas de HTML, entre ellas:
      </p>

      <ul>
        <li>
          “required”: la cual obliga que los campos no se dejen en blanco.
        </li>
        <li>“pattern”: permite validar mediante expresiones regulares.</li>
      </ul>

      <h4>Expresiones regulares</h4>
      <p>
        El atributo “pattern” especifica una expresión regular con la que el
        valor del control debe coincidir. Algunos de los conceptos básicos para
        crear expresiones regulares son:
      </p>
      <img
        src="@/assets/caracteres.png"
        style="margin: auto; width: 60%"
        alt=""
      />

      <h4>Validaciones del lado del servidor</h4>
      <p>
        Uno de los enfoques más utilizados es mediante el método “validate”
        proporcionado por el objeto “Illuminate\Validation\Request”. Estas
        validaciones se realizan dentro de las funciones del controlador, el
        siguiente ejemplo muestra cómo validas un par de campos en “store”:
      </p>
      <img src="@/assets/ex1.png" style="margin: auto; width: 60%" alt="" />

      <p>
        Luego, para poder mostrar los errores de validación, se debe agregar lo
        siguiente:
      </p>
      <img src="@/assets/ex2.png" style="margin: auto; width: 60%" alt="" />

      <p>
        Y para los controles se debería mostrar el mensaje de la siguiente
        manera:
      </p>
      <img src="@/assets/ex3.png" style="margin: auto; width: 60%" alt="" />

      <br />
      <hr class="my-4" />

      <h2>Importancia de las validaciones</h2>
      <p>
        Las validaciones son un aspecto indispensable en un sitio web; estas nos
        permiten mantener consistencia en los datos de nuestra base, además, si
        no se validan los datos que se insertarán en las tablas, estos pueden
        provocar errores y comprometer la integridad de la base. Por otro lado,
        si no validamos los datos dejamos la base expuesta a ataques, por
        ejemplo, inyecciones SQL, no obstante, se debe señalar que como práctica
        de seguridad supone una barrer muy frágil si se usa sola, así que se
        debe combinar con otros métodos de seguridad.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        La validación al lado del servidor se me hizo un poco más complicada que
        la de los formularios, sin embargo, la documentación de Laravel fue una
        buena guía para comprender una de las formas más comunes de hacerla.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Las validaciones son importantes porque ayudan a mantener la
          consistencia, integridad y seguridad de las bases de datos.
        </li>
        <li>
          Una forma de validar datos es mediante las propiedades de los
          controles de formulario HTML.
        </li>
        <li>
          La validación del servidor es una alternativa muy buena a la
          implementación de esta por plug-ins, que supone un costo adicional.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Laravel. (s.f.). Validation - Laravel. Obtenido de Laravel: https://laravel.com/docs/9.x/validation
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaOnceComponent",
};
</script>
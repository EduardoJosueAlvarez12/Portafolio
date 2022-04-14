<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Introducción a Laravel</div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://miro.medium.com/max/1400/1*m0s2io11J82PR7miqan92w.png"
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
      <h2>¿Qué es Laravel?</h2>

      <p>
        Laravel es un framework de PHP gratuito y de código abierto que
        proporciona una serie gran serie de herramientas y recursos para
        desarrollar aplicaciones PHP modernas. Cuenta con un ecosistema muy
        competente gracias a sus funciones integradas y una variedad de paquetes
        y extensiones compatibles.
      </p>

      <h4>Ventajas de usar Laravel</h4>
      <ul>
        <li>
          Es progresivo, esto se refiere a que si bien se trata de un framework
          muy completo y extenso, tiene una excelente documentación y una
          comunidad muy activa, por lo que si a penas se está comenzando a
          aprenderlo, no te sentirás abrumado; por otro lado, si eres un
          desarrollador senior, Laravel proporciona una gran cantidad de
          herramientas robustas como inyección de dependencias, “unit testing”,
          consultas y eventos en tiempo real.
        </li>
        <li>
          Es increíblemente escalable, es compatible con sistemas distribuidos y
          las aplicaciones basadas en este framework son capaces de manejar
          miles de millones de peticiones por mes. De hecho existe “Laravel
          Vapor”, que permite correr las aplicaciones en AWS sin tener que
          preocuparse de la gestión de la infraestructura.
        </li>
        <li>
          Tiene una comunidad muy grande que trabaja constantemente en nuevas
          características. Laravel cuenta con los mejores paquetes del
          ecosistema PHP.
        </li>
        <li>
          Cuenta con herramientas de bases de datos poderosas como Eloquent y
          mecanismos integrados para la migración de bases de datos.
        </li>
        <li>
          La CLI Artisan acelera el desarrollo y creación de modelos,
          controladores y otros componentes de aplicación.
        </li>
      </ul>

      <p>
        La instalación de Laravel puede realizarse mediante la instalación de
        “Docker Desktop” y “WSL2”. Alternativamente, se puede realizar la
        instalación si se cuenta con PHP y Composer instalados mediante el
        comando “composer global require laravel/installer”.
      </p>

      <h4>Primeros pasos para crear una conexión a una base de datos</h4>
      <ol>
        <li>Crear una base de datos.</li>
        <li>
          Modificar el archivo ".env", para el gestor indicado se debe colocar
          el puerto correcto, el nombre de la base y las credenciales.
        </li>
        <li>Realizar las migraciones correspondientes.</li>
      </ol>

      <br />
      <hr class="my-4" />

      <h2>¿Cuál es la importancia de este framework?</h2>
      <p>
        Es una gran herramienta ya que Laravel se diferencia de Vue.js en que se
        trata de un framework que trabaja del lado del servidor, pues está
        basado en PHP. Es necesario aprender a utilizar frameworks backend
        porque estos permiten manipular toda lógica que se encuentra detrás de
        la aplicación y que el usuario no puede directamente visualizar; Laravel
        en particular, se caracteriza por su amplitud, pues ofrece una gran
        cantidad de herramientas para el manejo de bases de datos, migraciones,
        consultas, websockets, autenticación y escalabilidad.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        Al principio se me dificultó un poco la instalación de Laravel, puesto
        que deben realizarse ciertas configuraciones para evitar errores durante
        el proceso o al momento de crear un proyecto. Practicar la instalación
        en casa y en el laboratorio me ayudó mucho a memorizar los pasos a
        seguir.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Laravel es un framework PHP que trabaja del lado del servidor y
          facilita la conexión y gestión de bases de datos, consultas,
          websockets y autenticación.
        </li>
        <li>
          Este framework cuenta con una gran cantidad de herramientas que
          vuelven la experiencia de desarrollo mucho más amigable, por ejemplo,
          Artisan, Blade y Eloquent.
        </li>
        <li>
          Aprendí que para crear una conexión a una base es necesario verificar
          algunos módulos en “php.ini”, realizar ciertas configuraciones en el
          archivo “.env” del proyecto y llevar a cabo las migraciones
          correspondientes.
        </li>
        <li>
          Comprendí las configuraciones necesarias en caso de presentar
          problemas debido a la versión de “MySQL”.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Heidi, E. (3 de Febrero de 2021). What is Laravel? | DigitalOcean.
          Obtenido de DigitalOcean:
          https://www.digitalocean.com/community/tutorials/what-is-laravel
        </li>
        <li>
          Laravel. (s.f.). Installation | laravel.com. Obtenido de laravel.com:
          https://laravel.com/docs/9.x
        </li>
        <li>
          Laravel. (s.f.). The PHP Framework for Web Artisans | laravel.com.
          Obtenido de laravel.com: https://laravel.com/
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaOchoComponent",
};
</script>
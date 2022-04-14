<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">
          Sistema de Rutas y Controladores en Laravel
        </div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://miro.medium.com/max/1400/1*Vu2ThQPxr72UEOP0LMo4hA.jpeg"
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
      <h2>Sistema de Rutas en Laravel</h2>

      <p>
        En Laravel todas las rutas están localizadas en la carpeta “routes”.
        Estos archivos son cargados por el “App\Providers\ServiceProvider” de la
        aplicación. En el archivo “web.php” se definen las rutas destinadas a la
        interfaz de la aplicación web, estas se encuentran asignadas al “ web
        middleware group”, el cual provee características como sesiones y
        protección CSRF.
      </p>

      <h4>Métodos de rutas disponibles</h4>
      <p>
        El router permite registrar rutas que respondan a cualquier verbo HTTPS
        (get, post, put, patch, delete, options):
      </p>
      <ul>
        <li>Route:httpsVerb($uri, $callback)</li>
      </ul>

      <p>
        En caso de que se necesite registrar una ruta que responda a múltiples
        verbos HTTPS se puede hacerlo de la siguiente manera:
      </p>
      <ul>
        <li>Route::match(['get', 'post'], '/', function () {});</li>
        <li>Route::any('/', function () {});</li>
      </ul>

      <h4>RESTful Resource Controllers</h4>
      <p>
        Los controladores de recurso permiten manipular una tabla entera, estos
        crean múltiples rutas para manipular una variedad de acciones RESTful,
        de esta manera, el controlador generado tendrá los métodos necesarios
        para realizarlas:
      </p>
      <b-img
        fluid
        src="https://maxoffsky.com/word/wp-content/uploads/2014/09/table5-2.png"
        alt="Header Image"
      ></b-img>

      <p>
        Para registrar un controlador de este tipo lo realizamos de la siguiente
        manera:
      </p>
      <ul>
        <li>Route::resource('photo', 'PhotoController');</li>
      </ul>
      <p>
        Y en caso de que solo se necesite manejar un subgrupo de estas acciones,
        se puede definir como:
      </p>
      <ul>
        <li>
          Route::resource('photo', 'PhotoController', array('only' =>
          array('index', 'show')));
        </li>
      </ul>
      <ul>
        <li>
          Route::resource('photo', 'PhotoController', array('except' =>
          array('create', 'store', 'update', 'destroy')));
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Importancia del tema</h2>
      <p>
        Es importante conocer los métodos que nos facilita Laravel para las
        rutas, ya que estos nos permiten realizar acciones HTTPS determinadas y
        definir la dirección en que los encontraremos; todos estos aspectos
        esenciales para poder crear un CRUD.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        Se me hizo un poco difícil comprender los métodos disponibles para las
        rutas y recordar las direcciones dónde encontrarlos, sin embargo,
        encontré un recurso en internet, que en una tabla mostraba estos
        aspectos y se me hizo más fácil comprenderlos.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Aprendí que Laravel proporciona todos los métodos de HTTPS para las
          rutas.
        </li>
        <li>
          Comprendí que un controlador de recurso es aquel que incluye todas las
          rutas y métodos necesarios para poder manipular una tabla entera de
          una base de datos.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          Laravel. (s.f.). Controllers - Laravel. Obtenido de Laravel:
          https://laravel.com/docs/4.2/controllers?ref=driverlayer.com#restful-resource-controllers
        </li>
        <li>
          Laravel. (s.f.). Routing - Laravel. Obtenido de Laravel:
          https://laravel.com/docs/9.x/routing#rate-limiting
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaDiezComponent",
};
</script>
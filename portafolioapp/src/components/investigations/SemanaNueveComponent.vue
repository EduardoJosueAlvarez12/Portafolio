<template>
  <div id="contenido">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">CRUD con Laravel</div></template
      >

      <hr class="my-4" />
      <div style="margin: auto; width: 60%">
        <b-img
          fluid
          src="https://w3path.com/wp-content/uploads/2019/09/Webp.net-compress-image.jpg"
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
      <h2>CRUD con Laravel</h2>

      <p>
        Laravel nos facilita mucho la creación de un CRUD sencillo para
        manipular los datos de nuestra base, para ello debemos también contar
        con un modelo, un controlador y las vistas correspondientes.
      </p>

      <h4>Modelos en Laravel</h4>
      <p>
        El modelo es la letra “M” en la arquitectura “MVC”, Laravel permite
        crear uno haciendo uso de Eloquent ORM. El modelo es el encargado de
        realizar consultas a la base de datos, ya sea para extraer datos,
        insertarlos o actualizarlos. Cada tabla necesita tener un modelo. El
        comando para crear uno es el siguiente:
      </p>
      <ul>
        <li>php artisan make:model NombreModelo</li>
      </ul>

      <p>
        La instalación de Laravel puede realizarse mediante la instalación de
        “Docker Desktop” y “WSL2”. Alternativamente, se puede realizar la
        instalación si se cuenta con PHP y Composer instalados mediante el
        comando “composer global require laravel/installer”.
      </p>

      <h4>Controladores en Laravel</h4>
      <p>
        El controlador es aquel, que valga la redundancia, se encarga de
        controlar el comportamiento de una petición. Manejas peticiones viniendo
        “Routes”. El comando para crear uno es:
      </p>
      <ul>
        <li>php artisan make:controller NombreController</li>
      </ul>

      <p>
        Opcionalmente podemos agregar la opción “-r” al final del comando para
        que Artisan nos cree las funciones principales para el manejo de nuestro
        CRUD dentro del controlador. Finalmente, debemos registrar nuestro
        controlador dentro de web.php. Los datos o arreglos que obtendremos de
        nuestras vistas o enviaremos a estas deben establecerse en las funciones
        del controlador, por tal razón es necesario llamar al modelo o
        simplemente importarlo como un objeto.
      </p>

      <h4>Vistas en Laravel</h4>
      <p>
        Estas debemos crearlas dentro de “\resources\views”. Adicionalmente
        podemos crear una carpeta que también se incluirá en la ruta a la hora
        de navegar a través del sitio en el navegador. Como mencionamos
        anteriormente el controlador se encarga de las vistas y de enviar datos
        a estas, así que es posible mostrar los datos de nuestra tabla en una
        vista, siempre y cuando se lo defina en el controlador.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Importancia del tema</h2>
      <p>
        Saber como crear un CRUD es una de las competencias básicas que un
        desarrollador debe conocer, son muchísimas las empresas que necesitan
        ser capaces de manipular la información de sus bases de datos en su
        sitio web. Un sencillo ejemplo pueden ser los e-commerce, pues necesitan
        ser capaces de mostrar la información de sus productos su sitio y un
        sistema completo de pagos, cuya información debe almacenarse en su base.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Dificultades al apropiarse del contenido</h2>
      <p>
        En este contenido no tuve demasiadas dificultades, pero podría mencionar
        que al comienzo me perdí un poco en la estructura del proyecto tratando
        de encontrar archivos, no obstante, la práctica me permitió
        familiarizarme con la estructura.
      </p>

      <br />
      <hr class="my-4" />

      <h2>Conclusiones</h2>
      <ul>
        <li>
          Laravel proporciona comandos mediante Artisan que facilitan la
          creación de un CRUD.
        </li>
        <li>
          El modelo es el encargado de manipular e interactuar con la base de
          datos, con una tabla en específico.
        </li>
        <li>
          El controlador se encarga de manejar peticiones de “routes” recibir y
          pasarles información a las vistas y al modelo.
        </li>
        <li>
          Aprendí que la creación de un CRUD es una de las competencias más
          básicas e indispensables con las que un desarrollador debe de contar.
        </li>
      </ul>

      <br />
      <hr class="my-4" />

      <h2>Bibliografía</h2>
      <ul>
        <li>
          (s.f.). Obtenido de
          https://www.geeksforgeeks.org/laravel-controller-basics/#:~:text=A%20Controller%20is%20that%20which,%2FHttp%2FControllers'%20directory
          GeeksforGeeks. (30 de Diciembre de 2019). Laravel | Controller Basics
          - GeeksforGeeks. Obtenido de GeeksforGeeks:
          https://www.geeksforgeeks.org/laravel-controller-basics
        </li>
        <li>
          GeeksforGeeks. (30 de Diciembre de 2019). Laravel | Controller Basics
          - GeeksforGeeks. Obtenido de GeeksforGeeks:
          https://www.geeksforgeeks.org/laravel-controller-basics/#:~:text=A%20Controller%20is%20that%20which,%2FHttp%2FControllers'%20directory
        </li>
        <li>
          GeeksforGeeks. (30 de Diciembre de 2019). Laravel | Eloquent Model
          Basics - GeeksforGeeks. Obtenido de GeeksforGeeks:
          https://www.geeksforgeeks.org/laravel-eloquent-model-basics/
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SemanaNueveComponent",
};
</script>
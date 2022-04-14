<template>
  <div id="content">
    <!-- titulo -->
    <b-jumbotron text-variant="white" style="background-color: #a19fe4">
      <template #image></template>

      <template #header>
        <div style="text-align: center">Acerca de mí</div></template
      >

      <hr class="my-4" />
    </b-jumbotron>

    <!-- cuerpo del contenido -->
    <b-container
      fluid="md"
      class="text-justify"
      style="font-family: Helvetica, sans-serif; font-size: 14px"
    >
      <b-card no-body style="width: 80%; margin: auto">
        <b-tabs pills card vertical>
          <b-tab title="Datos" active>
            <b-row>
              <b-col>
                <center>
                  <b-card-img
                    style="width: 80%"
                    src="https://scontent.fsal2-1.fna.fbcdn.net/v/t1.6435-9/137600903_3547662205347740_8586890929630459823_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uGjoOJE_aDQAX_dYXNB&_nc_ht=scontent.fsal2-1.fna&oh=00_AT-TP6Lxy7C4D97h9O9a5MfdiML5hEkLRvzG19NSwtlJgw&oe=627E7AAB"
                    alt="Profile image"
                  ></b-card-img>
                </center>
              </b-col>
              <b-col>
                <b-card-title style="text-align: center"
                  >Mis datos</b-card-title
                >
                <b-card-text>
                  <ul>
                    <li><b>Nombre:</b> Eduardo Josué Álvarez González.</li>
                    <li><b>Correo:</b> SMIS010720@ugb.edu.sv</li>
                    <li><b>Código: </b> SMIS010720</li>
                  </ul>
                </b-card-text>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Objetivos">
            <b-row>
              <b-col>
                <center>
                  <b-card-img
                    style="width: 80%"
                    src="https://scontent.fsal2-1.fna.fbcdn.net/v/t1.6435-9/137600903_3547662205347740_8586890929630459823_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uGjoOJE_aDQAX_dYXNB&_nc_ht=scontent.fsal2-1.fna&oh=00_AT-TP6Lxy7C4D97h9O9a5MfdiML5hEkLRvzG19NSwtlJgw&oe=627E7AAB"
                    alt="Profile image"
                  ></b-card-img>
                </center>
              </b-col>
              <b-col>
                <b-card-title style="text-align: center"
                  >Mis objetivos académicos</b-card-title
                >
                <b-card-text>
                  <ul>
                    <li>
                      Aprender acerca del desarrollo de aplicaciones mediante el
                      uso de frameworks.
                    </li>
                    <li>
                      Profundizar en el uso de librerías del lado del cliente.
                    </li>
                    <li>
                      Estudiar la integración de frameworks backend y frontend
                      para el desarrollo web.
                    </li>
                  </ul>
                </b-card-text>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Competencias">
            <b-row>
              <b-col>
                <center>
                  <b-card-img
                    style="width: 80%"
                    src="https://scontent.fsal2-1.fna.fbcdn.net/v/t1.6435-9/137600903_3547662205347740_8586890929630459823_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uGjoOJE_aDQAX_dYXNB&_nc_ht=scontent.fsal2-1.fna&oh=00_AT-TP6Lxy7C4D97h9O9a5MfdiML5hEkLRvzG19NSwtlJgw&oe=627E7AAB"
                    alt="Profile image"
                  ></b-card-img>
                </center>
              </b-col>
              <b-col>
                <b-card-title style="text-align: center"
                  >Competencias adquiridas</b-card-title
                >
                <b-card-text>
                  <ul>
                    <li>
                      Trabajar con la arquiteutura de componentes en Vue.js.
                    </li>
                    <li>
                      Desarrollo de aplicaciones web de una página haciendo uso
                      de Vue.js y Bootstrap.
                    </li>
                    <li>
                      Creación de sitios web de múltiples páginas mediante el
                      uso de rutas en Vue.js.
                    </li>
                    <li>Desarrollo de aplicaciones web usando Laravel.</li>
                    <li>Conexión a base de datos y CRUD usando Laravel.</li>
                    <li>Creación de API Rest con Laravel.</li>
                  </ul>
                </b-card-text>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Dificultades">
            <b-row>
              <b-col>
                <center>
                  <b-card-img
                    style="width: 80%"
                    src="https://scontent.fsal2-1.fna.fbcdn.net/v/t1.6435-9/137600903_3547662205347740_8586890929630459823_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uGjoOJE_aDQAX_dYXNB&_nc_ht=scontent.fsal2-1.fna&oh=00_AT-TP6Lxy7C4D97h9O9a5MfdiML5hEkLRvzG19NSwtlJgw&oe=627E7AAB"
                    alt="Profile image"
                  ></b-card-img>
                </center>
              </b-col>
              <b-col>
                <b-card-title style="text-align: center"
                  >Dificultades</b-card-title
                >
                <b-card-text>
                  <ul>
                    <li>
                      La conexión a una base de datos con Laravel, puesto que
                      hay que tener varios aspectos en cuenta, incluyendo
                      configuraciones ciertos archivos y las versiones que se
                      usan en el proyecto y el gestor.
                    </li>
                    <li>La validación del lado del servidor usando Laravel.</li>
                    <li>La creación de una API con Laravel.</li>
                  </ul>
                </b-card-text>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>
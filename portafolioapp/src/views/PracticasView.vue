<template>
  <div id="contenido">
    <practicas-component />
  </div>
</template>

<script>
import PracticasComponent from "@/components/PracticasComponent.vue";

export default {
  name: "PracticasView",
  components: {
    PracticasComponent,
  },
};
</script>
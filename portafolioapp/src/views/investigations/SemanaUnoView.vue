<template>
  <div id="contenido">
    <semana-uno-component />
  </div>
</template>


<script>
import SemanaUnoComponent from "@/components/investigations/SemanaUnoComponent.vue";

export default {
  name: "SemanaUnoView",
  components: {
    SemanaUnoComponent,
  },
};
</script>
<template>
  <div class="about">
    <h1>Acerca de mí</h1>
    <about-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'AboutView.vue',
  components: {
    AboutComponent
  }
}
</script>


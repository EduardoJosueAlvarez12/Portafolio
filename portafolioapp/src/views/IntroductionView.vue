<template>
    <div id="content">
        <introduction-component/>
    </div>
</template>

<script>
// @ is an alias to /src
import IntroductionComponent from '@/components/IntroductionComponent.vue'

export default {
  name: 'IntroductionView',
  components: {
    IntroductionComponent
  }
}
</script>
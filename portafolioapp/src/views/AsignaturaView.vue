<template>
    <div id="contenido">
        <asignatura-component/>
    </div>
</template>

<script>
import AsignaturaComponent from '@/components/AsignaturaComponent.vue'

export default {
    name:'AsignaturaView',
    components: {
        AsignaturaComponent
    }
}
</script>
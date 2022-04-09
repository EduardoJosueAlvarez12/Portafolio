<template>
    <div id="contenido">
        <h1> Descripcion de la asignatura</h1>
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
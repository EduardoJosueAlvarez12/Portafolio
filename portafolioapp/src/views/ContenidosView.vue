<template>
    <div id="contenido">
        <h1>Contenidos de la asignatura</h1>
        <contenidos-component/>
    </div>
</template>

<script>
import ContenidosComponent from '@/components/ContenidosComponent.vue'

export default {
    name:'ContenidosView',
    components:{
        ContenidosComponent
    }
}
</script>
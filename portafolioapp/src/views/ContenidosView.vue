<template>
    <div id="contenido">
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
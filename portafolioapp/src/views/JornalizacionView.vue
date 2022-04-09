<template>
    <div id="contenido">
        <h1>Jornalización</h1>
        <jornalizacion-component/>
    </div>
</template>

<script>

import JornalizacionComponent from '@/components/JornalizacionComponent.vue'
export default {
    name: 'JornalizacionView',
    components:{
        JornalizacionComponent
    }
}
</script>
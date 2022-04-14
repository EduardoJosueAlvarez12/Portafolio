<template>
    <div id="contenido">
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
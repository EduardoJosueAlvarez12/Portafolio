<template>
    <div id="contenido">
        <semana-doce-component/>
    </div>
</template>

<script>
import SemanaDoceComponent from '@/components/investigations/SemanaDoceComponent.vue'

export default {
    name: "SemanaDoceView",
    components: {
        SemanaDoceComponent
    }
}
</script>
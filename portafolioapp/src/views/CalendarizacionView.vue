<template>
    <div id="contenido">
        <h1>Calendarización</h1>
        <calendarizacion-component/>
    </div>
</template>

<script>
import CalendarizacionComponent from '@/components/CalendarizacionComponent.vue'

export default {
    name:'CalendarizacionView',
    components:{
        CalendarizacionComponent
    }
}
</script>
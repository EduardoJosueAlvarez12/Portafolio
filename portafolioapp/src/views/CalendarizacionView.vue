<template>
    <div id="contenido">
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
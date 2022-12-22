<template>
    <div class="bg-light">
        <div class="container p-3 py-5">
            <table class="table table-striped w-75 m-auto">
                <thead>
                    <tr class="table-dark">
                        <th scope="col" class="text-center text-nowrap">ID</th>
                        <th scope="col" class="text-center text-nowrap">ROUTE</th>
                        <th scope="col" class="text-center text-nowrap">DISTANCE (KM)</th>
                        <th scope="col" class="text-center text-nowrap">COST ($)</th>
                    </tr>
                </thead>
                <LineResultTableLoginOff v-if='($store.state.authenticated === false)' />
                <LineResultTableLoginOn v-else/>
            </table>
        </div>
    </div>
</template>
  
<script>
    import LineResultTableLoginOff from './LineResultTableLoginOff.vue'
    import LineResultTableLoginOn from './LineResultTableLoginOn.vue'
    export default {
    name: 'TableAddress',
    components:{
        LineResultTableLoginOff
        , LineResultTableLoginOn
    }
    }
</script>
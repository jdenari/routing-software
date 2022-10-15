<template>
    <div class="bg-light">
        <div class="container p-3 py-5">
            <table class="table table-striped w-75 m-auto">
                <thead>
                    <tr class="table-dark">
                        <th scope="col" class="text-nowrap">ID</th>
                        <th scope="col" class="text-nowrap">ROUTE</th>
                        <th scope="col" class="text-center text-nowrap">DISTANCE (KM)</th>
                        <th scope="col" class="text-center text-nowrap">COST (R$)</th>
                    </tr>
                </thead>
                <lineResultTable />
            </table>
        </div>
    </div>
</template>
  
<script>
    import lineResultTable from './lineResultTable.vue'
    export default {
    name: 'TableAddress',
    components:{
        lineResultTable
    }
    }
</script>
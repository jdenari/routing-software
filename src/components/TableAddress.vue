<template>
    <div class="m-5">
        <table class="table w-50 m-auto">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">ROUTE</th>
                    <th scope="col" class="text-center">DISTANCE (KM)</th>
                    <th scope="col" class="text-center">COST (R$)</th>
                </tr>
            </thead>
            <lineResultTable />
        </table>
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
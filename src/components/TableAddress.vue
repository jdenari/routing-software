<template>
    <div class="m-5">
        <table class="table w-50 m-auto">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">ROUTE</th>
                <th scope="col">DISTANCE</th>
                <th scope="col">COST</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr>
                <th scope="row"> 1 </th>
                <td>RUA EDGARD WERNECK, 1016 - CIDADE DE DEUS, RIO DE JANEIRO - RJ, 22763011</td>
                <td> {{ $store.state.distancia }} </td>
                <td>R$ 9,89</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>RUA EDGARD WERNECK, 1016 - CIDADE DE DEUS, RIO DE JANEIRO - RJ, 22763011</td>
                <td>27.2 km</td>
                <td>R$ 9,89</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>RUA EDGARD WERNECK, 1016 - CIDADE DE DEUS, RIO DE JANEIRO - RJ, 22763011</td>
                <td>27.2 km</td>
                <td>R$ 9,89</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
    export default {
    name: 'TableAddress',
    }
</script>
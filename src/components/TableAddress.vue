<template>
    <div class="m-5">
        <table class="table w-50 m-auto">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">ROUTE</th>
                    <th scope="col" class="text-center">DISTANCE</th>
                    <th scope="col" class="text-center">COST</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"> 1 </th>
                    <td> {{ $store.state.addressOrigin }} </td>
                    <td class="text-center"> {{ $store.state.distancia }} </td>
                    <td class="text-center">R$ 9,89</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>RUA EDGARD WERNECK, 1016 - CIDADE DE DEUS, RIO DE JANEIRO - RJ, 22763011</td>
                    <td class="text-center">27.2 km</td>
                    <td class="text-center">R$ 9,89</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>RUA EDGARD WERNECK, 1016 - CIDADE DE DEUS, RIO DE JANEIRO - RJ, 22763011</td>
                    <td class="text-center">27.2 km</td>
                    <td class="text-center">R$ 9,89</td>
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
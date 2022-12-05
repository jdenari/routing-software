<template>
    <tbody class="text-center">
        <tr class="table-default">
            <th scope="row" > Origin </th>
            <td> {{ $store.state.output[0].address }} </td>
            <td> {{ $store.state.output[0].distance }} </td>
            <td>{{ $store.state.output[0].fuelCost }}</td>
        </tr>
        <tr>
            <th scope="row"> 1 </th>
            <td> {{ $store.state.output[1].address }} </td>
            <td> {{ $store.state.output[1].distance }} </td>
            <td>{{ $store.state.output[1].fuelCost}}</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td> {{ $store.state.output[2].address }} </td>
            <td> {{ $store.state.output[2].distance }} </td>
            <td>{{ $store.state.output[2].fuelCost }}</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td> {{ $store.state.output[3].address }} </td>
            <td> {{ $store.state.output[3].distance }} </td>
            <td>{{ $store.state.output[3].fuelCost }}</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td> {{ $store.state.output[4].address }} </td>
            <td> {{ $store.state.output[4].distance }} </td>
            <td>{{ $store.state.output[4].fuelCost }}</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td> {{ $store.state.output[5].address }} </td>
            <td> {{ $store.state.output[5].distance }} </td>
            <td>{{ $store.state.output[5].fuelCost }}</td>
        </tr>
        <tr>
            <th scope="row">6</th>
            <td> {{ $store.state.output[6].address }} </td>
            <td> {{ $store.state.output[6].distance }} </td>
            <td>{{ $store.state.output[6].fuelCost }}</td>
        </tr>
        <tr>
            <th scope="row">7</th>
            <td> {{ $store.state.output[7].address }} </td>
            <td> {{ $store.state.output[7].distance }} </td>
            <td>{{ $store.state.output[7].fuelCost }}</td>
        </tr>
        <tr class="table-light">
            <th scope="row">Total</th>
            <td> {{ $store.state.output[8].address }} </td>
            <td> {{ $store.state.output[8].distance }} </td>
            <td>{{ $store.state.output[8].fuelCost }}</td>
        </tr>
    </tbody>
</template>
  
<script>
    export default {
    name: 'LineResultTable'
    }
</script>
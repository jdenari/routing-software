<template>
    <tbody>
        <tr class="table-default">
            <th scope="row" class="text-end"> Origin </th>
            <td> {{ $store.state.output[0].address }} </td>
            <td class="text-center"> {{ $store.state.output[0].distance }} </td>
            <td class="text-center">{{ $store.state.output[0].fuelPrice }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end"> 1 </th>
            <td> {{ $store.state.output[1].address }} </td>
            <td class="text-center"> {{ $store.state.output[1].distance }} </td>
            <td class="text-center">{{ $store.state.output[1].fuelPrice}}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">2</th>
            <td> {{ $store.state.output[2].address }} </td>
            <td class="text-center"> {{ $store.state.output[2].distance }} </td>
            <td class="text-center">{{ $store.state.output[2].fuelPrice }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">3</th>
            <td> {{ $store.state.output[3].address }} </td>
            <td class="text-center"> {{ $store.state.output[3].distance }} </td>
            <td class="text-center">{{ $store.state.output[3].fuelPrice }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">4</th>
            <td> {{ $store.state.output[4].address }} </td>
            <td class="text-center"> {{ $store.state.output[4].distance }} </td>
            <td class="text-center">{{ $store.state.output[4].fuelPrice }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">5</th>
            <td> {{ $store.state.output[5].address }} </td>
            <td class="text-center"> {{ $store.state.output[5].distance }} </td>
            <td class="text-center">{{ $store.state.output[5].fuelPrice }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">6</th>
            <td> {{ $store.state.output[6].address }} </td>
            <td class="text-center"> {{ $store.state.output[6].distance }} </td>
            <td class="text-center">{{ $store.state.output[6].fuelPrice }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">7</th>
            <td> {{ $store.state.output[7].address }} </td>
            <td class="text-center"> {{ $store.state.output[7].distance }} </td>
            <td class="text-center">{{ $store.state.output[7].fuelPrice }}</td>
        </tr>
        <tr class="table-light">
            <th scope="row" class="text-end">Total</th>
            <td> {{ $store.state.output[8].address }} </td>
            <td class="text-center"> {{ $store.state.output[8].distance }} </td>
            <td class="text-center">{{ $store.state.output[8].fuelPrice }}</td>
        </tr>
    </tbody>
</template>
  
<script>
    export default {
    name: 'lineResultTable'
    }
</script>
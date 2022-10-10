<template>
    <tbody>
        <tr>
            <th scope="row" class="text-end"> Origin </th>
            <td> {{ $store.state.finalDistancesObject[0].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[0].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[0].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end"> 1 </th>
            <td> {{ $store.state.finalDistancesObject[1].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[1].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[1].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">2</th>
            <td> {{ $store.state.finalDistancesObject[2].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[2].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[2].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">3</th>
            <td> {{ $store.state.finalDistancesObject[3].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[3].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[3].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">4</th>
            <td> {{ $store.state.finalDistancesObject[4].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[4].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[4].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">5</th>
            <td> {{ $store.state.finalDistancesObject[5].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[5].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[5].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">6</th>
            <td> {{ $store.state.finalDistancesObject[6].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[6].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[6].cost }}</td>
        </tr>
        <tr>
            <th scope="row" class="text-end">7</th>
            <td> {{ $store.state.finalDistancesObject[7].address }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[7].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[7].cost }}</td>
        </tr>
        <tr class="table-light">
            <th scope="row" class="text-end">Total</th>
            <td> {{ $store.state.finalDistancesObject }} </td>
            <td class="text-center"> {{ $store.state.finalDistancesObject[0].distance }} </td>
            <td class="text-center">{{ $store.state.finalDistancesObject[0].cost }}</td>
        </tr>
    </tbody>
</template>
  
<script>
    export default {
    name: 'lineResultTable'
    }
</script>
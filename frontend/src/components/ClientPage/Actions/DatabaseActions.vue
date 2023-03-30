<template>
    <div class="container p-3">
        <h2 class="text-center p-3">Database</h2>
        <div class="table-wrapper">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Full Name</th>
                        <th>Last Data</th>
                        <th>Address</th>
                        <th>Distance</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td>{{ item.idAction }}</td>
                        <td>{{ item.fullName }}</td>
                        <td>{{ item.lastData }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.distance}}</td>
                        <td>{{ item.fullCost }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DatabaseActions",
        data() {
            return {
                items: [],
            };
        },
        async mounted() {
            try {
                const response = await fetch(`${this.$store.state.url}/api/addresUser/getAddressUser/${this.$store.state.userId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                this.items = await response.json();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    };
</script>

<style>
.table-wrapper {
    height: 700px; /* Altura máxima da tabela */
    overflow-y: auto; /* Adiciona um scrollbar vertical quando a altura máxima for atingida */
}
</style>
  
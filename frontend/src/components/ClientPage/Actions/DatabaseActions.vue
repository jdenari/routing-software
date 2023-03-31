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
        <div class="d-flex flex-row-reverse">
            <button class="btn btn-success col-md-2 col-4 m-1 my-4"  @click="downloadXLSX">Export to CSV</button>
        </div>
    </div>
</template>

<script>
    import * as XLSX from 'xlsx';
    import { saveAs } from 'file-saver';
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
        methods: {
        downloadXLSX() {
            const data = this.items.map(item => {
            return {
                idAction: item.idAction,
                fullName: item.fullName,
                lastData: item.lastData,
                address: item.address,
                distance: item.distance,
                fullCost: item.fullCost,
            };
            });
            const fields = Object.keys(data[0]);
            const worksheet = XLSX.utils.json_to_sheet(data, { header: fields });
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Database Actions');
            const buffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'database.xlsx');
        },
        },
    };
</script>

<style>
.table-wrapper {
    height: 700px; /* Altura máxima da tabela */
    overflow-y: auto; /* Adiciona um scrollbar vertical quando a altura máxima for atingida */
}
</style>
  
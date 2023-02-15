<template>
    <div class="container p-3 py-5">
        <div class="h5 text-center">What are you waiting for? </div>
        <div class="h1 text-center">Make a login account!</div>
        <div class="lead text-center pt-3">
            On this page you only have access to some of the features.
        </div>
        <div class="lead text-center pb-3">
            To get full access, make a free account in this application and bring the benefits below to you.
        </div>
        <div class="d-flex">
            <div class="card m-3 col-4">
                <div class="card-body p-4 pb-3">
                    <img src="../../assets/geo-locate-icon.png" alt="" class="col-1 pb-3">
                    <h4 class="card-title mt-3">More Checkpoints Available</h4>
                    <div class="mt-3">
                        <p class="card-text m-1">You have more than 6 checkpoints? NO PROBLEM! Users that have an account in this application does not have this limit at all.</p>
                    </div>
                </div>
            </div>
            <div class="card m-3 col-4">
                <div class="card-body p-4 pb-3">
                    <img src="../../assets/database-icon.png" alt="" class="col-1 pb-3">
                    <h4 class="card-title mt-3">Database Control</h4>
                    <div class="mt-3">
                        <p class="card-text m-1">Each account created on the platform will have its own data record. You will be able to know how many records were created and delete them if necessary.</p>
                    </div>
                </div>
            </div>
            <div class="card m-3 col-4">
                <div class="card-body p-4 pb-5">
                    <img src="../../assets/excel-icon.png" alt="" class="col-1 pb-3">
                    <h4 class="card-title mt-3">Excel Spreadsheet</h4>
                    <div class="mt-3">
                        <p class="card-text m-1">Import and export data with Excel spreadsheets. You will be able to input data more easily in this application and export your records in Excel to read in any place you want. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center p-3">
            <router-link to="/LoginPage">
                <button type="button" class="btn btn-success" @click="this.$store.commit('CHANGETOREGISTER')">CREATE AN ACCOUNT!</button>
            </router-link>
            
        </div>
        <div class="text-center p-3">
            <img src="../../assets/illustrate-image-2.png" alt="" class="col-4 p-3">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'BenefitsLogin',
    }
</script>
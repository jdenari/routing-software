<template>
    <div class="p-3">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked @click="this.$store.commit('CHANGEFUNCTIONTOTRAVELLINGSALESMAN')">
            <label class="btn btn-outline-success" for="btnradio1">Travelling Salesman</label>
        
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" @click="this.$store.commit('CHANGEFUNCTIONTOYOURSEQUENCE')">
            <label class="btn btn-outline-success" for="btnradio3">Your Sequence</label>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SelectedFunction',
    components:{
    }
}
</script>




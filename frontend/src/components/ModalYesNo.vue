<template>
    <div>
        <div id="app">
            <transition name="fade" appear>
                <div 
                    class="modal-overlay" 
                    v-if='$store.state.modalYesNo' 
                    @click="showModal = false"
                ></div>
            </transition>
            <transition name="slide" appear>
                <div class="mainModal card p-3" v-if='$store.state.modalYesNo'>
                    <div class="card-body">
                        <h5 class="card-title">{{ titleModal }}</h5>
                        <p class="card-text"> {{ textModal }}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button 
                                type="button" 
                                class="btn btn-secondary" 
                                @click="this.$store.commit('changeModalYesNo')"
                                >No
                            </button>
                            <button 
                                type="button" 
                                class="btn btn-primary" 
                                @click="this.$store.commit('changeModalYesNo')"
                                >Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalYesNo',
    data (){
        return{
            showModal: true
        }
    },
    props: {
        titleModal: {
            type: String,
            required: true
        },
        textModal: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.mainModal {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    
    width: 100%;
    max-width: 400px;
    background-color: #FFF;
    border-radius: 16px;
    
    padding: 25px;
}
.mainModal.h1{
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
}
.mainModal.p{
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}
</style>
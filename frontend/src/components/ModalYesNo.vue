<template>
    <div>
      <div id="app">
            <transition name="fade" appear>
            <div
                class="modal-overlay"
                v-if="$store.state.modalYesNo"
                @click="showModal = false"
            ></div>
            </transition>
                <transition name="slide" appear>
                <div class="mainModal card p-3" v-if="$store.state.modalYesNo">
                    <div class="card-body">
                        <h5 class="card-text pb-3">{{ textModal }}</h5>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                @click="this.$store.commit('CHANGEMODALYESNO')"
                                >
                                No
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary"
                                @click="$emit('function');this.$store.commit('CHANGEMODALYESNO')"
                                >
                                Confirm
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
    name: "ModalYesNo",
    data() {
        return {
            showModal: true,
        };
    },
    props: {
        textModal: {
            type: String,
            required: true,
        },
    },
    watch: {
        "$store.state.modalYesNo": function (newVal) {
            if (newVal) {
                document.body.classList.add("blur");
            } else {
                document.body.classList.remove("blur");
            }
        },
    },
  };
</script>
  
<style scoped>
.mainModal {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    width: 100%;
    max-width: 400px;
    background-color: #f8f9fa;
    border-radius: 16px;

    padding: 25px;
}

.mainModal.h1 {
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
}

.mainModal.p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 98;
}

.blur {
    filter: blur(5px);
    transition: filter 0.5s ease;
}
</style>
  
<template>
    <div class="form-register p-3 m-auto">
        <form class="login-form p-3 border m-auto">
            <h4 class="text-center p-2">Register yourself</h4>
            <RegisterField
                v-for="(item, index) in profileDataItems" 
                :key="index"
                :profileDataItem="profileItems[index]"
                v-model="item.model"
            >
            </RegisterField>
            <ButtonSubmit 
                class="my-2" 
                textButton="Registrar"
                @click="print"
            />
        </form>
    </div>
</template>

<script>
import RegisterField from './RegisterField.vue'
import ButtonSubmit from '../ButtonSubmit.vue'
export default {
    name: 'RegisterForm',
    components: {
        RegisterField,
        ButtonSubmit
    },
    data () {
        return {
            profileItems: ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'],
            profileDataItems: [
                { model: "firstName" },
                { model: "lastName" },
                { model: "email" },
                { model: "password" },
                { model: "confirmPassword" },                
            ],
            payloadProfileData: [],
        }
    },
    methods: {
        async print(e){
            e.preventDefault();
            this.profileDataItems.forEach((item) => {
                this.payloadProfileData.push(item.model);
            });
            console.log(this.payloadProfileData)
        }
    }
}
</script>

<style scoped>
.form-register{
    width: 550px;
}
</style>
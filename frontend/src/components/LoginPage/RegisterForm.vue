<template>
    <div class="form-register p-3 m-auto">
        <form class="login-form p-3 border m-auto">
            <h4 class="text-center p-2">Register yourself</h4>
            <RegisterField
                v-for="(item, index) in registerDataItems" 
                :key="index"
                :registerDataItem="registerItems[index]"
                :textAttributeValue="registerTypeItems[index]"
                v-model="item.model"
            >
            </RegisterField>
            <ButtonSubmit 
                class="my-2" 
                textButton="Register"
                @click="registerNewUser"
            />
        </form>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import RegisterField from './RegisterField.vue'
import ButtonSubmit from '../ButtonSubmit.vue'
export default defineComponent({
    name: 'RegisterForm',
    components: {
        RegisterField,
        ButtonSubmit
    },
    data () {
        return {
            registerItems: ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'],
            registerDataItems: [
                { model: this.$store.state.firstName },
                { model: this.$store.state.lastName },
                { model: this.$store.state.email },
                { model: this.$store.state.password },
                { model: this.$store.state.confirmPassword },                
            ],
            registerTypeItems: [
                'text', 'text', 'email', 'password','password'
            ],
            payloadRegisterData: [],
            returnMessage: null,
        }
    },
    methods: {
        async registerNewUser(){
            
            this.registerDataItems.forEach((item) => {
                this.payloadRegisterData.push(item.model);
            });
            const dataObject = {
                firstName: this.payloadRegisterData[0],
                lastName: this.payloadRegisterData[1],
                email: this.payloadRegisterData[2],
                password: this.payloadRegisterData[3],
                confirmPassword: this.payloadRegisterData[4],
            }
            const jsonDataObject = JSON.stringify(dataObject)
            // dev mode
            await fetch("http://localhost:5000/api/auth/register", {
            // production mode
            // await fetch("https://routehelper.online/api/auth/register", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.error){
                    // it prints the error
                    this.returnMessage = data.error;
                } else {
                    this.$store.commit('changeToLogin')
                }
            })
        }
    }
})
</script>

<style scoped>
.form-register{
    width: 550px;
}
</style>
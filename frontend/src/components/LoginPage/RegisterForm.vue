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
        }
    },
    methods: {
        async print(e){
            e.preventDefault();
            this.registerDataItems.forEach((item) => {
                this.payloadRegisterData.push(item.model);
            });
            console.log(this.payloadRegisterData)
        }
    }
}
</script>

<style scoped>
.form-register{
    width: 550px;
}
</style>
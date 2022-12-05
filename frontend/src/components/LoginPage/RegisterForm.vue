<template>
    <div class="form-register p-3 m-auto">
        <form class="login-form p-3 border m-auto">
            <h4 class="text-center p-2">Register yourself</h4>
            <RegisterField
                    v-for="(item, index) in registerFieldItems" 
                    :key="index"
                    :RegisterFieldItem="item"
                    >
            </RegisterField>
            <ButtonSubmit class="my-2" textButton="Registrar"/>
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
            registerFieldItems: ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password']
        }
    }
}
</script>

<style scoped>
.form-register{
    width: 550px;
}
</style>
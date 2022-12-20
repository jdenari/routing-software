<template>
    <div class="p-3 m-auto mt-5">
        <form class="col-6 p-3 border m-auto">
            <div class="h1">Profile</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Update your profile: </div>
                <!-- looping for data profile field-->
                <ProfileDataField
                    v-for="(item, index) in profileDataItems" 
                    :key="index"
                    :profileDataItem="profileItems[index]"
                    v-model="item.model"
                >
                </ProfileDataField>
                <div class="d-grid p-1 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button">Update</button>
                </div>
            </div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Update your password</div>
                <!-- looping for password field-->
                <ProfilePasswordField
                    v-for="(item, index) in listPassword" 
                    :key="index"
                    :profilePasswordItem="profilePasswordItems[index]"
                    v-model="item.model"
                >
                </ProfilePasswordField>
                <div class="d-grid p-1 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button">Update</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ProfileDataField from './ProfileDataField.vue'
import ProfilePasswordField from './ProfilePasswordField.vue'
export default {
    name: 'ProfileDataForm',
    components: {
        ProfileDataField
        , ProfilePasswordField
        , 
    },
    data (){
        return {
            profileItems: [
                'First Name: ',
                'Last Name: ',
                'E-mail: '
            ],
            profileDataItems: [
                { model: this.$store.state.firstName },
                { model: this.$store.state.lastName },
                { model: this.$store.state.email },              
            ],
            profilePasswordItems: [
                'Current Password: ', 
                'New Password: ', 
                'Repeat New Password: '
            ],
            listPassword: [
                { model: "" },
                { model: "" },
                { model: "" },
            ],
        }
    }
}
</script>
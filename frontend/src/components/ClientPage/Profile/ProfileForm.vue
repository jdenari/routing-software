<template>
    <div class="p-3 m-auto mt-5">
        <form class="col-md-6 col-11 p-3 border m-auto">
            <div class="h1">Profile</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Update your profile: </div>
                <!-- looping for data profile field-->
                <ProfileField
                    v-for="(item, index) in profileModelItems" 
                    :key="index"
                    :profileItem="profileItems[index]"
                    v-model="item.model"
                >
                </ProfileField>
                <div class="d-grid p-1 d-md-flex justify-content-end">
                    <button 
                        class="btn btn-primary" 
                        type="button"
                        @click="changeModalToProfile();this.$store.commit('CHANGEMODALYESNO')"
                        >Update
                    </button>
                </div>
            </div>
        </form>
        <form class="col-md-6 col-11 p-3 border m-auto">
            <div class="h1">Password</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Update your password: </div>
                <!-- looping for data profile field-->
                <ProfilePasswordField
                    v-for="(item, index) in passwordModelItems" 
                    :key="index"
                    :passwordItem="passwordItems[index]"
                    v-model="item.model"
                >
                </ProfilePasswordField>
                <div class="d-grid p-1 d-md-flex justify-content-end">
                    <button 
                        class="btn btn-primary" 
                        type="button"
                        @click="changeModalToPassword();this.$store.commit('CHANGEMODALYESNO')"
                        >Update
                    </button>
                </div>
            </div>
            <MessageText 
                :messageText="$store.state.messageText"
            />
        </form>
        <ModalYesNo 
            @function="updateProfileData(); updatePassword();"
            text-modal="Are you sure you want to change your password?"
        />
    </div>
</template>

<script>
import ProfileField from './ProfileField.vue'
import ProfilePasswordField from './ProfilePasswordField.vue'
import ModalYesNo from '@/components/ModalYesNo.vue'
import MessageText from '@/components/MessageText.vue'
export default {
    name: 'ProfileDataForm',
    components: {
        ProfileField
        , ProfilePasswordField
        , ModalYesNo
        , MessageText
    },
    data (){
        return {
            profileItems: [
                'First Name: ',
                'Last Name: ',
                'E-mail: '
            ],
            profileModelItems: [
                { model: this.$store.state.firstName },
                { model: this.$store.state.lastName },
                { model: this.$store.state.email },              
            ],
            passwordItems: [
                'Current Password: ', 
                'New Password: ', 
                'Repeat New Password: '
            ],
            passwordModelItems: [
                { model: "" },
                { model: "" },
                { model: "" },
            ],
            payloadProfile: [],
            payloadPassword: [],
            modalFuction: null
        }
    },
    methods: {
        changeModalToProfile(){
            this.modalFuction = 'changeProfile'
        },
        changeModalToPassword(){
            this.modalFuction = 'changePassword'
        },

        async updateProfileData(){
            if (this.modalFuction === 'changeProfile'){
                // it does not let the page reaload
                this.profileModelItems.forEach((item) => {
                    this.payloadProfile.push(item.model);
                });
                // it creates the object that will be use on API
                const dataObject = {
                    id: this.$store.state.userId,
                    firstName: this.payloadProfile[0],
                    lastName: this.payloadProfile[1],
                    email: this.payloadProfile[2]
                }
                this.$store.dispatch('updateProfile', dataObject)
            }
        },
        async updatePassword(){
            if (this.modalFuction === 'changePassword'){
                // it does not let the page reaload
                this.passwordModelItems.forEach((item) => {
                    this.payloadPassword.push(item.model);
                });

                // it creates the object that will be use on API
                const dataObject = {
                    id: this.$store.state.userId,
                    currentPassword: this.payloadPassword[0],
                    password: this.payloadPassword[1],
                    confirmPassword: this.payloadPassword[2],
                    email: this.$store.state.email
                }

                console.log(dataObject)
                this.$store.dispatch('updatePassword', dataObject)
            }
        }
    }
}
</script>
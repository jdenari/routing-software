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
                    <button 
                        class="btn btn-primary" 
                        type="button"
                        @click="this.$store.commit('changeModalYesNo')"
                        >Update
                    </button>
                </div>
            </div>
            <!-- <div class="m-1 my-2 p-3 border">
                <div class="h4">Update your password</div> -->
                <!-- looping for password field-->
                <!-- <ProfilePasswordField
                    v-for="(item, index) in listPassword" 
                    :key="index"
                    :profilePasswordItem="profilePasswordItems[index]"
                    v-model="item.model"
                >
                </ProfilePasswordField>
                <div class="d-grid p-1 d-md-flex justify-content-md-end">
                    <button 
                        class="btn btn-primary" 
                        type="button"
                        @click="this.$store.commit('changeModalYesNo')"
                        >Update
                    </button>
                </div>
            </div> -->
            <MessageText 
                :messageText="$store.state.messageText"
            />
        </form>
        <ModalYesNo 
            @function="updateProfileData()"
            text-modal="Are you sure you want to change your profile data?"
        />
    </div>
</template>

<script>
import ProfileDataField from './ProfileDataField.vue'
// import ProfilePasswordField from './ProfilePasswordField.vue'
import ModalYesNo from '@/components/ModalYesNo.vue'
import MessageText from '@/components/MessageText.vue'
export default {
    name: 'ProfileDataForm',
    components: {
        ProfileDataField
        // , ProfilePasswordField
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
            payloadProfileData: [],
        }
    },
    methods: {
        async updateProfileData(){
            // it does not let the page reaload
            this.profileDataItems.forEach((item) => {
                this.payloadProfileData.push(item.model);
            });
            // it creates the object that will be use on API
            const dataObject = {
                id: this.$store.state.userId,
                firstName: this.payloadProfileData[0],
                lastName: this.payloadProfileData[1],
                email: this.payloadProfileData[2]
            }
            const jsonDataObject = JSON.stringify(dataObject)
            //  it access the api to update the profile data using token and the object
            //  production mode
            //  await fetch("https://routehelper.online/api/user/profile", {
            // dev mode
            await fetch("http://localhost:5000/api/user/profile", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": this.$store.state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend and it commits all changes made
                this.$store.commit('updateMessageText', data.error)
                this.$store.dispatch('eraseMessageText')
                this.$store.commit("authenticate", {
                    token: data.data.token, 
                    userId: data.data.userId, 
                    firstName: data.data.firstName, 
                    lastName: data.data.lastName,
                    email: data.data.email
                })
            })
        },
    }
}
</script>
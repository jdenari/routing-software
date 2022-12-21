<template>
    <div class="alert alert-light m-0 text-center bg-transparent border border-0" role="alert" v-if="messageText">
        {{ messageText }}
    </div>
</template>
  
<script>
export default {
    name: 'MessageText',
    props: {
        messageText: {
            type: [String, null],
            required: true
        },
    }
}
</script>
<template>
    <div class="w-100 d-md-flex justify-content-md-end">
        <button 
            type="button" 
            class="btn btn-primary w-25"
            > {{ textButton }}
        </button>
    </div>  
</template>
    <script>
        export default {
        name: 'ButtonSubmit',
        props: {
            textButton: {
                type: String,
                required: true
            }
        }
    }
</script>
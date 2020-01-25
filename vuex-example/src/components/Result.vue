<template>
    <p>Counter is: {{ multipliedCounter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['multipliedCounter'])
        }
    }
</script>
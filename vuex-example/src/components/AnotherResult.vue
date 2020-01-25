<template>
    <div>
        <p>Counter is: {{ multipliedCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'multipliedCounter',
                'stringCounter'
            ])
        }
    }
</script>
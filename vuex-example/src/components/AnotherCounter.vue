<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations(['increment', 'decrement'])
        }
    }
</script>
<template>
    <div class="quote col mb-4" v-on:click="removeQuote()">
        <div class="card h-100">
            <div class="card-body">
                {{ quoteText }}
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    props: ['index', 'quoteText'],
    methods: {
        removeQuote: function() {
            eventBus.$emit('quoteRemoved', this.index);
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

    div.quote {
        cursor: pointer;
        font-family: 'Dancing Script', cursive;
        font-size: 1.6em;
    }

    div.quote div:hover {
        background-color: #ffb3b3;
    }
</style>
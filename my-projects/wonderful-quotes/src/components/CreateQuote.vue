<template>
    <form class="col-md-4 mx-auto">
      <h5>Quote</h5>
      <textarea class="form-control" rows="3" v-model="quoteText"></textarea>

      <button class="btn btn-info my-3 d-block mx-auto" v-on:click.prevent="saveQuote()">Add Quote</button>
    </form>
</template>

<script>
import { eventBus } from '../main'

export default {
    data: function () {
        return {
            quoteText: ''
        }
    },
    methods: {
        saveQuote: function() {
            eventBus.$emit('quoteCreated', this.quoteText);

            this.quoteText = '';
        }
    }
}
</script>
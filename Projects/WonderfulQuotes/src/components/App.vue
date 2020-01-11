<template>
  <div id="app" class="container-fluid">
    <h1>Welcome!</h1>
    <h3>Currently added quotes: {{ quotesCount }}</h3>

    <div class="alert alert-danger" v-if="quotesCount + 1 > maxQuotesCount" role="alert">
      You have reached the max quotes capacity. Please delete some of them in order to be able to add new.
    </div>

    <form class="col-md-4 mx-auto">
      <h5>Quote</h5>
      <textarea id="quote-text" class="form-control" rows="3">
      </textarea>

      <button id="add-quote-btn" class="btn btn-success my-3 d-block mx-auto" v-on:click="saveQuote($event)">Add Quote</button>
    </form>

    <app-quotes-deck v-bind:quotes="quotes">
    </app-quotes-deck>

    <div class="alert alert-primary" role="alert">
      Info: Click on a Quote to delete it. 
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'
import Quote from '../components/Quote'
import QuotesDeck from '../components/QuotesDeck'

export default {
  components: { 
    'app-quote': Quote,
    'app-quotes-deck': QuotesDeck
  },
  data: function () {
    return {
      quotesCount: 0,
      maxQuotesCount: 10,
      quotes: []
    }
  },
  methods: {
    saveQuote: function (event) {
      event.preventDefault();

      if (this.quotesCount != this.maxQuotesCount) {
        var quoteText = $('#quote-text').val();
        $('#quote-text').val('');

        this.quotes.push(quoteText);
        this.quotesCount++;
      }
    }
  }
}
</script>

<style>
</style>

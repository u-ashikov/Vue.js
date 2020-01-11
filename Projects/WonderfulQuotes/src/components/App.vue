<template>
  <div id="app" class="container-fluid">
    <div class="alert alert-danger my-3" v-if="quotesCount + 1 > maxQuotesCount" role="alert">
      You have reached the max quotes capacity. Please delete some of them in order to be able to add new.
    </div>

    <h3 class="my-3">Quotes Count</h3>

    <div class="progress mb-3">
      <div class="progress-bar" role="progressbar" v-bind:style="{ 'width': quotesCount * maxQuotesCount + '%' }" v-bind="progressBarAttributes" aria-valuemin="0">{{ quotesCount }} / {{ maxQuotesCount }}</div>
    </div>

    <form class="col-md-4 mx-auto">
      <h5>Quote</h5>
      <textarea id="quote-text" class="form-control" rows="3">
      </textarea>

      <button id="add-quote-btn" class="btn btn-info my-3 d-block mx-auto" v-on:click="saveQuote($event)">Add Quote</button>
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
  computed: {
    progressBarAttributes: function () {
      return {
        'aria-valuenow': this.quotesCount * 10,
        'aria-valuemax': this.maxQuotesCount * 10
      }
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

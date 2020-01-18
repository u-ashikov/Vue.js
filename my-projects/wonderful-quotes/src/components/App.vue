<template>
  <div id="app" class="container-fluid">
    <div class="alert alert-danger my-3" v-if="quotesLimitReached" role="alert">
      You have reached the max quotes capacity. Please delete some of them in order to be able to add new.
    </div>

    <h3 class="my-3">Quotes Count</h3>

    <div class="progress mb-3">
      <div class="progress-bar" role="progressbar" v-bind:style="{ 'width': quotesCount * maxQuotesCount + '%' }" v-bind="progressBarAttributes" aria-valuemin="0">
        {{ quotesCount }} / {{ maxQuotesCount }}
      </div>
    </div>

    <app-create-quote></app-create-quote>

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
import CreateQuote from '../components/CreateQuote'

export default {
  components: { 
    'app-quote': Quote,
    'app-quotes-deck': QuotesDeck,
    'app-create-quote': CreateQuote
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
    },
    quotesLimitReached: function () {
      return this.quotesCount + 1 > this.maxQuotesCount;
    }
  },
  mounted: function () {
    eventBus.$on('quoteRemoved', (index) => {
      if (index >= 0 && index < this.quotes.length) {
          this.quotes.splice(index, 1);
          this.quotesCount--;
      }
    });

    eventBus.$on('quoteCreated', (quoteText) => {
      if (this.quotesCount != this.maxQuotesCount) {
          this.quotes.push(quoteText);
          this.quotesCount++;
      }
    })
  }
}
</script>
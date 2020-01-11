<template>
  <div id="app" class="container-fluid">
    <h1>Welcome!</h1>
    <h3>Currently added quotes: {{ quotesCount }}</h3>

    <div class="alert alert-primary" role="alert">
      Info: Click on a Quote to delete it. 
    </div>

    <app-quotes-deck v-bind:quotes="quotes">
    </app-quotes-deck>
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
      quotes: ['hello there', 'Test']
    }
  }
}
</script>

<style>
</style>

<template>
    <div class="row row-cols-1 row-cols-md-4">
        <app-quote v-for="(quote, i) in quotes" v-bind:quoteText="quote" v-bind:index="i"></app-quote>
    </div>
</template>

<script>
import Quote from '../components/Quote'

export default {
    components: {
        'app-quote': Quote
    },
    props: ['quotes']
}
</script>
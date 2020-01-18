<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p><b>Original text:</b> {{ text }}</p>
                <p><b>Reversed text:</b> {{ text | reverseText }}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p><b>Text:</b> {{ text }} gets filtered to => {{ text | count-length }}</p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p><b>Original text:</b> {{ text }}</p>
                <p><b>Reversed text:</b> {{  reverseText }}</p>
                <hr>
                <p><b>Text:</b> {{ text }} gets filtered to => {{ countLength }}</p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { computedMixin } from '../mixins/computed-mixin';

    export default {
        mixins: [computedMixin],
        // data: function() {
        //     return {
        //         text: 'Hello World!'
        //     }
        // },
        filters: {
            reverseText: function(value) {
                return value.split( '' ).reverse( ).join( '' );
            }
        },
        // computed: {
        //     reverseText: function () {
        //         return this.text.split( '' ).reverse( ).join( '' );
        //     },
        //     countLength: function () {
        //         return this.text + ` (${this.text.length})`;
        //     }
        // }
    }
</script>

<style>
</style>

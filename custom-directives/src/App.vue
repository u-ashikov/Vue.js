<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

                <button class="btn btn-info" v-myOn:click="sayHello">Check Directive</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            sayHello: function () {
                alert('Hi there!');
            }
        },
        directives: {
            myOn: {
                bind: function (el, binding, vnode) {
                    var eventName = binding.arg;
                    var fnToExecute = binding.value;

                    el.addEventListener(eventName, fnToExecute);
                }   
            }
        }
    }
</script>

<style>
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-server></app-server>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-server-details></app-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import ServerComponent from './components/Servers.vue'
    import ServerDetais from './components/ServerDetails.vue'

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-server': ServerComponent,
            'app-server-details': ServerDetais
        }
    }
</script>

<style>

</style>

<template>
  <div id="app" class="container-fluid">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
    input.invalid,
    textarea.invalid {
        border: 1px solid #fd4864;
        background-color: #FFEEEE;
    }
</style>

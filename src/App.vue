<template>
  <div class="app">
    <div class="nav">
      <Navbar/>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="foot">
      <Foot/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Foot from './components/Footer.vue'
  export default {
    name: 'App',
    components: { Navbar, Foot}
  }
</script>

<style>
  html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    background-color: #FFFFFF;
    font-family:  Kinetika Book,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif;;
  }


  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .nav {
    width: 100%;
    position: fixed;
    opacity: 100%;
  }
</style>

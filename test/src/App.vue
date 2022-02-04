<template>
  <div id="app">
   <Header />
    <div id="content" class="content">   
     <router-view></router-view>
     <Footer />
     </div>
     
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>

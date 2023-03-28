<template>
 <div class="about">
   
    <AboutUs/>
    <MainView/>
  </div>
</template>

<script>
  import AboutUs from '@/components/AboutUs'
  import MainView from '@/components/MainView'
  export default {
    name: 'AboutView',
    components: {
      AboutUs,
      MainView
    },
  }
</script>

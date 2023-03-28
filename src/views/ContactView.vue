<template>
    <div>
      <ContactUs/>
      <MainView/>
    </div>
  </template>
  
  <script>
    import ContactUs from '@/components/ContactUs.vue';
    import MainView from '@/components/MainView'
    export default {
      name: 'HomeView',
  
      components: {
        ContactUs,
        MainView
      },
    }
  </script>
  
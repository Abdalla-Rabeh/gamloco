<template>
  <div>
    <HeaderView />
    <MainView/>
  </div>
</template>

<script>
  import HeaderView from '@/components/HeaderView.vue';
  import MainView from '@/components/MainView'
  export default {
    name: 'HomeView',

    components: {
      HeaderView,
      MainView
    },
  }
</script>

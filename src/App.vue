<template>
  <div>
    <NavBar />
    <router-view />
    <FooTer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooTer from '@/components/FooTer';
export default {
  name: "App",
  components: {
    NavBar,
    FooTer
  },
  data: () => ({
    //
  }),
};
</script>

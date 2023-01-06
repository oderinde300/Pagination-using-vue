<template>
  <main>
    <main-nav />
    <router-view />
  </main>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>

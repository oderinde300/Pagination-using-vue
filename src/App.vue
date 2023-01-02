<template>
  <main>
    <TheUser />
    <h1>Hello World</h1>
  </main>
</template>

<script>
import TheUser from "@/components/TheUser.vue";
export default {
  name: "App",
  components: {
    TheUser,
  },
};
</script>

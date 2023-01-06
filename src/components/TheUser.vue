<template>
  <div class="m-6 h-[30rem] w-[25rem] rounded-3xl bg-brand-purple-1">
    <div class="mx-auto mb-8 h-40 w-40 pt-8">
      <img
        class="mx-auto rounded-full border-8 object-contain"
        :src="user.picture.large"
        alt="avatar"
      />
    </div>
    <p class="text-center text-2xl text-white">{{ user.fullname }}</p>
    <p class="mb-6 text-center text-brand-purple-2">Web Developer</p>
    <p class="mb-4 px-10 text-center text-sm text-white">
      Lorem, ipsum dolor sit amet consectetur
      <span class="text-yellow-300">{{ user.login.username }}</span
      >. Amet, dolorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Amet, dolorem
    </p>
    <p
      class="mx-auto w-60 rounded-lg bg-brand-purple-2 py-2 text-center text-sm text-white"
    >
      {{ user.email }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TheUser",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

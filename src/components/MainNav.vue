<template>
  <header class="h-20 w-full">
    <nav class="fixed top-0 left-0 flex h-20 w-full border-b bg-white">
      <ul class="flex h-full items-center">
        <li>
          <router-link
            :to="{ name: 'Home' }"
            class="mx-10 flex h-full items-center text-lg font-extrabold"
            href="/"
          >
            RandonMe
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Users' }"
            class="ml mr-4 flex h-full items-center"
            href="/"
          >
            Users
          </router-link>
        </li>
      </ul>
      <div class="mx-10 ml-auto flex h-full items-center px-4 py-2">
        <router-link
          :to="{ name: 'Home' }"
          class="rounded-lg bg-red-400 px-6 py-2 font-bold text-white hover:shadow-lg"
        >
          Sign In
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

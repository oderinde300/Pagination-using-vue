<template>
  <main>
    <div class="flex flex-wrap items-center justify-center">
      <the-user
        v-for="user in formattedUsers"
        :key="user.login.uuid"
        :user="user"
      />
    </div>
  </main>
</template>

<script>
import axios from "axios";

import TheUser from "@/components/TheUser.vue";

export default {
  name: "TheUsers",
  components: { TheUser },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    formattedUsers() {
      const newUsersList = this.users.map((user) => {
        const fullname = `${user.name.last} ${user.name.first}`;
        return { ...user, fullname };
      });
      return newUsersList;
    },
  },
  async mounted() {
    const url = "https://randomuser.me/api/?results=10";
    const res = await axios.get(url);
    this.users = res.data.results;
  },
};
</script>

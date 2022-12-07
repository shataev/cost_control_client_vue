<template>
  <div class="auth-container">
    <v-tabs v-model="tab" centered>
      <v-tab v-for="item in items" :key="item.label">
        {{ item.label }}
      </v-tab>
    </v-tabs>
    <div class="tabs">
      <div class="tabs-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      tab: null,
      items: [
        { label: "Sign in", path: "/auth/signin" },
        { label: "Sign up", path: "/auth/signup" },
      ],
    };
  },
  watch: {
    tab(newTab) {
      this.$router.push(this.items[newTab].path);
    },
  },
  computed: {},
};
</script>

<style scoped>
.tabs-content,
.tabs-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

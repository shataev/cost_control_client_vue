<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="menuVisibility" temporary app>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <div class="slot-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerPageWrapper",
  data() {
    return {
      items: [
        { title: "Add new cost", icon: "mdi-cart-plus", link: "/cost" },
        { title: "All costs", icon: "mdi-cash-multiple", link: "/costs" },
      ],
      menuVisibility: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisibility = !this.menuVisibility;
    },
  },
  computed: {
    pageTitle() {
      const currentRoute = this.$route;

      return currentRoute.meta.title;
    },
  },
};
</script>

<style scoped>
.slot-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

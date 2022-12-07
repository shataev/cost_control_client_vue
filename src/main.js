import Vue from "vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

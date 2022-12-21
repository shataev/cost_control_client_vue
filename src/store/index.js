import Vuex from "vuex";
import Vue from "vue";

import getters from "@/store/getters";

Vue.use(Vuex);
// TODO разбить на модули
const store = new Vuex.Store({
  state: {
    user: {
      username: null,
      email: null,
      id: null,
    },
    auth: {
      accessToken: null,
    },
  },
  getters,
  mutations: {
    setAccessToken({ auth }, accessToken) {
      auth.accessToken = accessToken;
    },
    setUser(state, userData) {
      state.user = { ...userData };
    },
  },
});

export default store;

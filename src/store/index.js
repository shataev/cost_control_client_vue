import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    profile: {
      username: null,
      email: null,
      id: null,
    },
    auth: {
      isAuthenticated: false,
      accessToken: null,
    },
  },
  mutations: {
    setIsAuthenticated({ auth }, isAuthenticated) {
      auth.isAuthenticated = isAuthenticated;
    },
    setAccessToken({ auth }, accessToken) {
      auth.accessToken = accessToken;
    },
  },
});

export default store;

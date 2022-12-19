const getters = {
  isAuthenticated({ auth }) {
    return Boolean(auth.accessToken);
  },
};

export default getters;

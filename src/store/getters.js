const getters = {
  isAuthenticated({ auth }) {
    return Boolean(auth.accessToken);
  },
  userId({ user }) {
    return user.id;
  },
};

export default getters;

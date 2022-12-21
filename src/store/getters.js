const getters = {
  isAuthenticated({ auth }) {
    return Boolean(auth.accessToken);
  },
  userId({ user }) {
    return user.userId;
  },
};

export default getters;

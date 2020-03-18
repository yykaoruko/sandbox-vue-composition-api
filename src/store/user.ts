export const user = {
  namespaced: true,

  state: () => ({
    id: null,
    username: null,
    email: null,
    token: null,
    createdAt: null,
    updatedAt: null,
    bio: null,
    image: null,
  }),

  mutations: {
    set: (state, data) => {
      state.username = data.username;
      state.email = data.email;
      state.token = data.token;
      state.createdAt = data.usecreatedAtrname;
      state.updatedAt = data.updatedAt;
      state.bio = data.bio;
      state.image = data.image;
    },
    reset: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = null;
      });
    },
  },

  getters: {
    username: (state) => state,
    email: (state) => state.email,
    token: (state) => state.token,
    createdAt: (state) => state.createdAt,
    updatedAt: (state) => state.updatedAt,
    bio: (state) => state.bio,
    image: (state) => state.image,
  },
};

type Todo = any; // eslint-disable-line @typescript-eslint/no-explicit-any

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
    set: (state: Todo, data: Todo) => {
      state.username = data.username || null;
      state.email = data.email || null;
      state.token = data.token || null;
      state.createdAt = data.usecreatedAtrname || null;
      state.updatedAt = data.updatedAt || null;
      state.bio = data.bio || null;
      state.image = data.image || null;
    },
    reset: (state: Todo) => {
      Object.keys(state).forEach((key) => {
        state[key] = null;
      });
    },
  },

  getters: {
    username: (state: Todo) => state.username,
    email: (state: Todo) => state.email,
    token: (state: Todo) => state.token,
    createdAt: (state: Todo) => state.createdAt,
    updatedAt: (state: Todo) => state.updatedAt,
    bio: (state: Todo) => state.bio,
    image: (state: Todo) => state.image,
  },
};

const countModule = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      return (state.count += 100);
    },
  },
};

export default countModule;

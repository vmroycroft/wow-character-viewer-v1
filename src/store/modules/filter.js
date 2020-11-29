const state = {
  filter: {
    gear: false,
    reputation: false
  }
};

const getters = {
  filter: state => state.filter
};

export default {
  state,
  getters
};

const state = {
  selected: [],
  collapsed: false
};

const getters = {
  selected: state => state.selected,
  collapsed: state => state.collapsed
};

const actions = {
  // set selected components
  select({ state, commit }, component) {
    if (state.selected.includes(component))
      commit("removeFromSelected", component);
    else commit("addToSelected", component);
  },
  clear({ commit }) {
    commit("clear");
  },
  collapse({ commit }) {
    commit("collapse");
  },
  expand({ commit }) {
    commit("expand");
  }
};

const mutations = {
  addToSelected: (state, component) => state.selected.push(component),
  removeFromSelected: (state, component) => {
    const i = state.selected.indexOf(component);
    if (i > -1) state.selected.splice(i, 1);
  },
  clear: state => {
    state.selected = [];
    state.collapsed = false;
  },
  collapse: state => {
    state.collapsed = true;
  },
  expand: state => {
    state.collapsed = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

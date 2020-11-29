import Vue from "vue";
import Vuex from "vuex";
import characters from "./modules/characters";
import filter from "./modules/filter";
import select from "./modules/select";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    characters,
    filter,
    select
  }
});

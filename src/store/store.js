import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./modules/user.js";
import sports from "./modules/sports.js"


export const store = new Vuex.Store({
  modules: { // TODO: nice that you separated the state into modules. Would be better if you add `namespaces` to modules.
    user,
    sports,
  },

  state: {},
  actions: {},
  mutations: {},
});

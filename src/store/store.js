import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./modules/user.js";
import sports from "./modules/sports.js"


export const store = new Vuex.Store({
  modules: {
    user,
    sports,
  },

  state: {},
  actions: {},
  mutations: {},
});

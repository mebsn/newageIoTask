import axios from "@/utilis/axiosInstance";
import router from '@/router'

const user = {
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      window.localStorage.setItem("Token", token);
    },
    SET_TOKENREMOVE( state) {
      window.localStorage.removeItem("Token");
      state.token = null
    },
    SET_SPORTSREMOVE() {
      window.localStorage.removeItem("Sports");
    }
  },
  actions: {
    async load_token({ commit }, input) { // TODO: uppercase naming is a new convention?
        try {
          const res = await axios.post("api/auth/signin", input);
          commit("SET_TOKEN", res.data.token); // TODO: you could've moved the localStorage setting in mutations as well.
        } catch (err) {
          alert(err); // TODO: you are still throwing error in catch.
        }
    },
    logout({commit}) {
      // TODO: will be better if you move this logic in mutations as well. As we still have token in state.
      commit("SET_TOKENREMOVE");
      commit("SET_SPORTSREMOVE");
      router.push({ path: "/" });
    },

  },
  getters: {},
};


export default user;

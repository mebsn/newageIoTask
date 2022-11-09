import axios from "@/utilis/axiosInstance";

const user = {
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    async LOAD_TOKEN({ commit }, input) { // TODO: uppercase naming is a new convention?
        try {
          const res = await axios.post("api/auth/signin", input);
          commit("SET_TOKEN", res.data.token); // TODO: you could've moved the localStorage setting in mutations as well.
          window.localStorage.setItem("Token", res.data.token);
        } catch (err) {
          throw new Error(err); // TODO: you are still throwing error in catch.
        }
    },
    LOGOUT() {
      // TODO: will be better if you move this logic in mutations as well. As we still have token in state.
      window.localStorage.removeItem("Token");
      window.localStorage.removeItem("Sports");
    },

  },
  getters: {},
};


export default user;

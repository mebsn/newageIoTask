import axios from "@/utilis/axiosInstance";

const user = {
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },

  },
  actions: {
    async LOAD_TOKEN({ commit }, input) {
        try {
          const res = await axios.post("api/auth/signin", input);
          commit("SET_TOKEN", res.data.token);
          window.localStorage.setItem("Token", res.data.token);
        }
        catch (err) {
          throw new Error(err);
        }
    },
    LOGOUT() {
      window.localStorage.removeItem("Token");
      window.localStorage.removeItem("Sports");
    },

  },
  getters: {},
};

export default user;

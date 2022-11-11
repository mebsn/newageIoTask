import axios from "@/utilis/axiosInstance";

const sports = {
  state: {
    sports: null,
  },
  mutations: {
    SET_SPORTS(state, data) {
      state.sports = data;
    },
  },
  actions: {
    async load_sports({ commit },) { // TODO: extra comma, no linter/prettier.
      const Sports = localStorage.getItem("Sports"); // TODO: This must be a getter
      if(!Sports) {
        try {
          const res = await axios.get("api/sports-book/sports?culture=en"); // TODO: you can pass query params in a different way as well.
          commit("SET_SPORTS", res.data);
          window.localStorage.setItem("Sports", JSON.stringify(res.data)); // TODO: this line should also be in mutation
        }
        catch (err) {
          throw new Error(err); // TODO: you are throwing an exception again.
        }
      } else {
          commit("SET_SPORTS" , Sports);
      }
    },
  },
  getters: {},
};

export default sports;

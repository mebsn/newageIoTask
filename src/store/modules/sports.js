import axios from "@/utilis/axiosInstance";

const sports = {
  namespaced: true,
  state: {
    sports: null,
  },
  mutations: {
    SET_SPORTS(state, data) {
      state.sports = data;
      window.localStorage.setItem("Sports", JSON.stringify(data));
    },
  },
  actions: {
    async load_sports({ commit , getters}) { // TODO: extra comma, no linter/prettier.
       // TODO: This must be a getter
       
      if(!getters.getSports) {
        try {
          const res = await axios.get("api/sports-book/sports", { params: { culture:"en" } }); // TODO: you can pass query params in a different way as well.
          commit("SET_SPORTS", res.data);
          // window.localStorage.setItem("Sports", JSON.stringify(res.data)); // TODO: this line should also be in mutation
        }
        catch (err) {
          alert(err) // TODO: you are throwing an exception again.
        }
      } else {
          commit("SET_SPORTS" , JSON.parse(getters.getSports));
      }
    },
  },
  getters: {
    getSports () {
      return window.localStorage.getItem("Sports")
    }
  },
};

export default sports;

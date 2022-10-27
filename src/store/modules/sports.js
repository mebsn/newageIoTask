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
    async LOAD_SPORTS({ commit },) {
      const Sports = localStorage.getItem("Sports");
      if(!Sports) {
        try {
          const res = await axios.get("api/sports-book/sports?culture=en");
          commit("SET_SPORTS", res.data);
          window.localStorage.setItem("Sports", JSON.stringify(res.data));
        }
        catch (err) {
          throw new Error(err);
        }
      } else {
          commit("SET_SPORTS" , Sports);   
      }
    },
  },
  getters: {},
};

export default sports;
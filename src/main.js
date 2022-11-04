import Vue from 'vue'
import App from './App.vue'
import { store } from "@/store/store.js";
import axios from "./utilis/axiosInstance";
import router from "./router";


Vue.config.productionTip = false

function getLocalToken() {
  const token = window.localStorage.getItem("Token"); // TODO: maybe you could return inline function?
  return token;
}


axios.interceptors.request.use( // TODO: nice
  function (config) {
    config.headers.Authorization = `bearer ${getLocalToken()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 400) { // TODO: very good, you could add also status check for Unauthorized requests' responses.
      alert("Incorrect Username or Password!");
    }
    return axios;
  }
);


new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
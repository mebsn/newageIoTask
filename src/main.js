import Vue from 'vue'
import App from './App.vue'
import { store } from "@/store/store.js";
import axios from "./utilis/axiosInstance";
import router from "./router";


Vue.config.productionTip = false

function getLocalToken() {
  const token = window.localStorage.getItem("Token");
  return token;
}


axios.interceptors.request.use(
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
    if (error.response.status === 400) {
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

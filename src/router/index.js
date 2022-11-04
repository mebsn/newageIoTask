import Vue from "vue";
import Router from "vue-router";
import SignUpPage from "@/components/SignUpPage";
import SportsPage from "@/components/SportsPage";
import SportDetail from "@/components/SportsDetail";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: SignUpPage },
    {
      path: "/sports",
      component: SportsPage,
      beforeEnter: (to, from, next) => {
        if (!window.localStorage.getItem("Token")) { // TODO: this must be a getter
          next("/");
        } else {
          next();
        }
      },
    },
    {
      path: "/sports/:sport",
      name: "details",
      component: SportDetail,
    },
    { path: "*", component:SignUpPage }
  ],
});

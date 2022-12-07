import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import NewCostView from "@/views/NewCostView.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import SignInForm from "@/components/SignInForm.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cost",
      name: "newCost",
      component: NewCostView,
    },
    {
      path: "/auth",
      component: AuthView,
      children: [
        {
          path: "signup",
          component: SignUpForm,
        },
        {
          path: "",
          component: SignInForm,
        },
        {
          path: "signin",
          component: SignInForm,
        },
      ],
    },
  ],
});

export default router;

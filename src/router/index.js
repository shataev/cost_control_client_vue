import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import NewCostView from "@/views/NewCostView.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import SignInForm from "@/components/SignInForm.vue";
import CostsView from "@/views/CostsView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/cost",
      name: "newCost",
      meta: {
        title: "Add new cost",
        requiresAuth: true,
      },
      component: NewCostView,
    },
    {
      path: "/costs",
      name: "Costs List",
      meta: {
        title: "My costs",
        requiresAuth: true,
      },
      component: CostsView,
    },
    {
      path: "/auth",
      component: AuthView,
      children: [
        {
          path: "signup",
          component: SignUpForm,
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: "",
          component: SignInForm,
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: "signin",
          component: SignInForm,
          meta: {
            requiresAuth: false,
          },
        },
      ],
    },
  ],
});

/*router.beforeEach((to, from ) => {
  if (to.meta.requiresAuth) {
    return {name: 'auth'}
  }
});*/

export default router;

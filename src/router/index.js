import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        props: true,
        component: Home,
    },
    {
        path: "/destination/:slug",
        name: "DestinationDetails",
        props: true,
        component: () =>
            import(
                /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
            ),
        children: [
            {
                path: ":experienceSlug",
                name: "ExperienceDetails",
                props: true,
                component: () =>
                    import(
                        /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
                    ),
            },
        ],
        beforeEnter: (to, from, next) => {
          const exist = store.destinations.find(
            (destination) => destination.slug === to.params.slug
          )
          if(exist) next()
          else next({name: 'notFound'})
        }
    },
    {
        path: "/404",
        alias: "*",
        name: "notFound",
        component: () =>
            import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
    },
];

const router = new VueRouter({
    linkExactActiveClass: "active",
    mode: "history",
    routes,
});

export default router;

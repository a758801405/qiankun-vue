import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/datamodel",
        name: "数据模型",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    }
];

export default routes
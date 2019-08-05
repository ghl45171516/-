import Vue from "vue";
import Router from "vue-router";
import LogIn from "./views/logoIn/index.vue"
import latOut from "./components/layOut.vue"
import Home from "./views/home"
import Goods from "./views/goods"
import Member from "./views/member"
import Staff from "./views/staff"
import Supplier from "./views/supplier"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/login",
      component: LogIn
    },
    {
      path: "/index",
      redirect: "/index/home",
      component: latOut,
      children: [
        {
          path: "/index/home",
          component: Home,
          meta: { title: "首页" }
        }
      ]
    },
    {
      path: "/index/member",
      component: latOut,
      children: [
        {
          path: "/",
          component: Member,
          meta: { title: "会员管理" }
        }
      ]
    },
    {
      path: "/index/supplier",
      component: latOut,
      children: [
        {
          path: "/",
          component: Supplier,
          meta: { title: "供应商管理" }
        }
      ]
    },
    {
      path: "/index/goods",
      component: latOut,
      children: [
        {
          path: "/",
          component: Goods,
          meta: { title: "商品管理" }
        }
      ]
    },
    {
      path: "/index/staff",
      component: latOut,
      children: [
        {
          path: "/",
          component: Staff,
          meta: { title: "员工管理" }
        }
      ]
    }
  ]
});

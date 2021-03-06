import Vue from "vue";
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
function loadView(view) {
  return () => import(`@vue/pages/${view}.vue`);
}
const router = new VueRouter({
  /*mode: "history",*/
  //base: "/",
  routes: [
    { name: "index", path: "*", redirect: "/all" },
    { name: "all", path: "/all", component: loadView("All") },
    { name: "star", path: "/star", component: loadView("Star") },
    { name: "garbage", path: "/garbage", component: loadView("Garbage") },
    { name: "edit", path: "/edit/:id?", component: loadView("Edit") },
  ],
});
//const router = new VueRouter({ routes });
export default router;

//console.log("sdfsdf");
import "material-design-icons/iconfont/material-icons.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import App from "@vue/App.vue";
import "@css/all.css";
import store from "./store";
import router from "./router";

/*import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);*/
Vue.use(CKEditor);
let app = new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    navList: [
      { id: "all", title: "所有記事" },
      { id: "star", title: "已加星號" },
      { id: "garbage", title: "垃圾桶" },
    ],
  },
  /*mutations: {
    aaa(state, data) {},
  },
  getters: {
    aaa: () => {},
  },*/
});
export default store;

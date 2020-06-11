import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
let ellipsis = (text, max = 10) => {
  let s = text.replace(/<(?:.|\s)*?>/g, "");
  let s0 = "";
  let i = 0;
  let count = 0;
  while (count < max + 1 && i < s.length) {
    if (count < max) {
      let ss = s.substring(i, i + 6);
      if (ss == "&nbsp;") {
        s0 += ss;
        i += 6;
      } else {
        s0 += ss.charAt(0);
        i++;
      }
    } else {
      s0 += "…";
    }
    count++;
  }
  return s0;
};
let guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const store = new Vuex.Store({
  state: {
    navList: [
      { id: "all", title: "所有記事", pageData: "view-all" },
      { id: "star", title: "已加星號", pageData: "view-star" },
      { id: "garbage", title: "垃圾桶", pageData: "view-garbage" },
    ],
    dataList: [
      { id: "953c92d6-a2ea-468b-86ce-695106a13fef", star: true, title: "20200602", content: "A", ellipsis: "A" },
      { id: "e02f53a1-d6aa-4198-879a-2b8152a96434", star: false, title: "20200603", content: "B", ellipsis: "B" },
      { id: "75c28c38-03c7-4099-b385-e9fb77a6b70c", star: false, title: "20200604", content: "C", ellipsis: "C" },
      { id: "355d5e6a-229c-4308-b982-2dd7a4d660f1", star: false, title: "20200605", content: "D", ellipsis: "D" },
      { id: "5e48ba3b-b704-4438-bc80-dba43da1c909", star: false, title: "20200606", content: "E", ellipsis: "E" },
    ],
    recycleList: [
      { id: "5fab077c-5696-4d5d-839e-826e0a12ac1b", star: false, title: "20200531", content: "", ellipsis: "" },
      { id: "186120a9-f35c-4cbf-98ca-657cf8d8569b", star: true, title: "20200601", content: "", ellipsis: "" },
    ],
  },
  mutations: {
    saveEditData(state, data) {
      let index;
      if (data.add) {
        index = state.dataList.length;
        state.dataList.push({ star: false, id: data.id });
      } else {
        index = state.dataList.findIndex(function(el) {
          return el.id == data.id;
        });
      }
      let item = state.dataList[index];
      item.title = data.title;
      item.content = data.content;
      item.ellipsis = ellipsis(data.content, 10);
    },
    removeDataItem(state, id) {
      let index = state.dataList.findIndex(function(el) {
        return el.id == id;
      });
      if (index >= 0) {
        state.recycleList.push(...state.dataList.splice(index, 1));
      }
    },
    setStarDataItem(state, data) {
      let index = state.dataList.findIndex(function(el) {
        return el.id == data.id;
      });
      if (index >= 0) {
        state.dataList[index].star = data.bool;
      }
    },
    removeRecycleItem(state, id) {
      let index = state.recycleList.findIndex(function(el) {
        return el.id == id;
      });
      if (index >= 0) {
        state.recycleList.splice(index, 1);
      }
    },
    restoreRecycleItem(state, id) {
      let index = state.recycleList.findIndex(function(el) {
        return el.id == id;
      });
      if (index >= 0) {
        state.dataList.push(...state.recycleList.splice(index, 1));
      }
    },
  },
  getters: {
    getDataItem: (state) => (id) => state.dataList.find((el) => el.id === id),
    guid: () => guid(),
  },
});
export default store;

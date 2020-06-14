//console.log("sdfsdf");
import "material-design-icons/iconfont/material-icons.css";
/*import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";*/
import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "@css/all.css";
import store from "./store";
import router from "./router";
import Mock from "mockjs";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "@vue/App.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//import Axios from "axios";
/*Axios.defaults.timeout = 5000;
Axios.defaults.baseURL = process.env.API_ROOT; // 域名
Axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";*/
//console.log(process.env.NODE_ENV);
/*Axios.interceptors.request.use(
  function(config) {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Access-Control-Allow-Origin": process.env.API_ROOT,
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Max-Age": "86400",
    };
    return config;
  },
  function(error) {
    //console.log(error);
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  function(response) {
    //console.log(response);
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);*/
/*Axios.interceptors.request.use(
  (config) => {
    config.headers.genericKey = "someGenericValue";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.config.parse) {
      //perform the manipulation here and change the response object
    }
    return response;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);*/
/*const dataList = Mock.mock({
  "list|3": [
    {
      id: "@id",
      "star|1-2": true,
      content: "",
    },
  ],
});*/
const ellipsis = (text, max = 10) => {
  const s = text.replace(/<(?:.|\s)*?>/g, "");
  let s0 = "";
  let i = 0;
  let count = 0;
  while (count < max + 1 && i < s.length) {
    if (count < max) {
      const ss = s.substring(i, i + 6);
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
const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const dataList = [
  { id: "953c92d6-a2ea-468b-86ce-695106a13fef", star: true, title: "20200602", content: "A", ellipsis: "A" },
  { id: "e02f53a1-d6aa-4198-879a-2b8152a96434", star: false, title: "20200603", content: "B", ellipsis: "B" },
  { id: "75c28c38-03c7-4099-b385-e9fb77a6b70c", star: false, title: "20200604", content: "C", ellipsis: "C" },
  { id: "355d5e6a-229c-4308-b982-2dd7a4d660f1", star: false, title: "20200605", content: "D", ellipsis: "D" },
  { id: "5e48ba3b-b704-4438-bc80-dba43da1c909", star: false, title: "20200606", content: "E", ellipsis: "E" },
];
const recycleList = [
  { id: "5fab077c-5696-4d5d-839e-826e0a12ac1b", star: false, title: "20200531", content: "", ellipsis: "" },
  { id: "186120a9-f35c-4cbf-98ca-657cf8d8569b", star: true, title: "20200601", content: "", ellipsis: "" },
];
Mock.setup({
  timeout: "50-150",
});
Mock.mock("dataList", "get", (data) => {
  if (data.body) {
    let list = dataList;
    const params = JSON.parse(data.body);
    if (params.filters) {
      for (let key in params.filters) {
        list = list.filter((el) => {
          return el[key] === params.filters[key];
        });
      }
    }
    return list;
  }
  return dataList;
});
Mock.mock("dataList", "patch", (data) => {
  if (data.body) {
    const modifyList = JSON.parse(data.body);
    modifyList.forEach((modifyEl) => {
      const index = dataList.findIndex((el) => {
        return modifyEl.id === el.id;
      });
      if (index >= 0) {
        for (let key in modifyEl) {
          if (key != "id") {
            if (dataList[index][key] != undefined) {
              dataList[index][key] = modifyEl[key];
              if (key == "content") {
                dataList[index].ellipsis = ellipsis(modifyEl[key]);
              }
            }
          }
        }
      }
    });
  }
  return dataList;
});
Mock.mock("dataList", "delete", (data) => {
  if (data.body) {
    const ids = JSON.parse(data.body);
    ids.forEach((id) => {
      const index = dataList.findIndex((el) => {
        return id === el.id;
      });
      if (index >= 0) {
        recycleList.push(...dataList.splice(index, 1));
      }
    });
  }
  return dataList;
});

Mock.mock("dataList", "post", (data) => {
  const list = [];
  if (data.body) {
    const addList = JSON.parse(data.body);
    addList.forEach((el) => {
      const item = {};
      item.id = guid();
      item.title = el.title || "";
      item.content = el.content || "";
      item.ellipsis = ellipsis(item.content);
      item.star = el.star || false;
      list.push(item);
    });
    dataList.push(...list);
  }
  return list;
});
Mock.mock("recycleList", "get", (data) => {
  return recycleList;
});
Mock.mock("recycleList", "delete", (data) => {
  if (data.body) {
    const ids = JSON.parse(data.body);
    ids.forEach((id) => {
      const index = recycleList.findIndex((el) => {
        return id === el.id;
      });
      if (index >= 0) {
        recycleList.splice(index, 1);
      }
    });
  }
  return recycleList;
});
Mock.mock("recycleList/restore", "post", (data) => {
  if (data.body) {
    const ids = JSON.parse(data.body);
    ids.forEach((id) => {
      const index = recycleList.findIndex((el) => {
        return id === el.id;
      });
      if (index >= 0) {
        dataList.push(...recycleList.splice(index, 1));
      }
    });
  }
  return recycleList;
});
/*import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);*/

Vue.use(CKEditor);
const app = new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});

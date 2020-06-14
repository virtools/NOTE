<template>
  <div class="d-flex flex-fill flex-row">
    <navs
      class="sidebar flex-fill flex-column p-2"
      :list="navList"
      :avtiveid="pageid"
      @change="item_click"
    ></navs>
    <div class="d-flex flex-fill flex-column content">
      <navs
        class="topbar flex-row px-2 pt-2"
        :list="navList"
        :avtiveid="pageid"
        @change="item_click"
      ></navs>
      <nav class="navbar navbar-expand-lg justify-content-end tool mb-4">
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="select_all"
          @click.native="selectAll_click(dataList)"
          v-if="selectList.length != dataList.length"
          :disabled="run"
        >全選</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="clear"
          @click.native="deselect_click"
          v-if="selectList.length"
          :disabled="run"
        >取消</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="delete"
          @click.native="delete_click"
          :disabled="run || !selectList.length"
        >刪除</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="star"
          @click.native="star_click"
          :disabled="run || !selectList.length"
        >星號</icon-button>
        <icon-button class="btn-sm p-0" icon="note_add" @click.native="add_click">新增筆記</icon-button>
      </nav>

      <b-overlay class="flex-fill" :show="run" rounded="sm" variant="light" opacity="0.75" blur="0">
        <cards :list="dataList">
          <template slot-scope="props">
            <!-- <label class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <div class="d-flex justify-content-end">
                  <input type="checkbox" v-model="selectList" :value="props.item.id" class="ml-2" />
                </div>
                <div>
                  <i
                    class="material-icons icon-star align-middle"
                  >{{ props.item.star ? "star" : "star_border" }}</i>
                  <span class="align-middle" v-html="props.item.title"></span>
                </div>
              </h5>
              <p class="card-text ellipsis" v-html="props.item.ellipsis"></p>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary" @click="view_click(props.item)">查看</button>
              </div>
            </div>
            </label>-->
            <b-card tag="label" class="mb-4 shadow-sm">
              <div class="d-flex justify-content-end">
                <!-- <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" v-model="selectList" :value="props.item.id" />
                </label>-->
                <b-form-checkbox v-model="selectList" :value="props.item.id"></b-form-checkbox>
              </div>
              <b-card-title>
                <i
                  class="material-icons icon-star align-middle"
                >{{ props.item.star ? "star" : "star_border" }}</i>
                <span class="align-middle" v-html="props.item.title"></span>
              </b-card-title>
              <b-card-text>
                <p class="ellipsis" v-html="props.item.ellipsis"></p>
              </b-card-text>
              <div class="d-flex justify-content-end">
                <b-button href="#" variant="primary" @click="view_click(props.item)">查看</b-button>
              </div>
            </b-card>
          </template>
        </cards>
      </b-overlay>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import Navs from "@vue/components/Navs.vue";
import Cards from "@vue/components/Cards.vue";
import IconButton from "@vue/components/IconButton.vue";
export default {
  name: "all",
  components: { Navs, Cards, IconButton },
  data() {
    return {
      selectList: [],
      pageid: this.$route.name,
      dataList: [],
      run: false
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      this.run = true;
      Axios.get("dataList").then(response => {
        this.dataList = response.data;
        this.run = false;
      });
    },
    item_click(item) {
      this.$router.push({ name: item.id });
    },
    add_click() {
      this.$router.push({ name: "edit", params: { id: "new" } });
    },
    view_click(item) {
      this.$router.push({ name: "edit", params: { id: item.id } });
    },
    delete_click() {
      this.run = true;
      Axios.delete("dataList", { data: this.selectList }).then(response => {
        this.dataList = response.data;
        this.selectList = [];
        this.run = false;
      });
    },
    star_click() {
      this.run = true;
      const bool = !this.selectList.every(id => {
        const data = this.dataList.find(el => {
          return id === el.id;
        });
        return data.star;
      });
      const list = this.selectList.map(id => {
        return {
          id: id,
          star: bool
        };
      });
      Axios.post("dataList", list).then(response => {
        this.dataList = response.data;
        this.run = false;
      });
    },
    selectAll_click(list) {
      this.selectList = [];
      for (let i = 0; i < list.length; i++) {
        this.selectList.push(list[i].id);
      }
    },
    deselect_click() {
      this.selectList = [];
    }
  },
  computed: {
    navList() {
      return this.$store.state.navList;
    }
  }
};
</script>
<style scoped></style>

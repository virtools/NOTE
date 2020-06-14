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
          @click.native="selectAll_click(recycleList)"
          v-if="selectList.length != recycleList.length"
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
          icon="delete_forever"
          @click.native="delete_click"
          :disabled="run || !selectList.length"
        >刪除</icon-button>
        <icon-button
          class="btn-sm p-0"
          icon="restore"
          @click.native="restore_click"
          :disabled="run || !selectList.length"
        >復原</icon-button>
      </nav>
      <b-overlay class="flex-fill" :show="run" rounded="sm" variant="light" opacity="0.75" blur="0">
        <cards :list="recycleList">
          <template slot-scope="props">
            <!-- <label class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <div class="d-flex justify-content-end">
                  <input type="checkbox" v-model="selectList" :value="props.item.id" class="ml-2" />
                </div>
                <span v-html="props.item.title"></span>
              </h5>
              <p class="card-text ellipsis" v-html="props.item.ellipsis"></p>
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
                <span class="align-middle" v-html="props.item.title"></span>
              </b-card-title>
              <b-card-text>
                <p class="ellipsis" v-html="props.item.ellipsis"></p>
              </b-card-text>
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
  name: "gardage",
  components: { Navs, Cards, IconButton },
  data() {
    return {
      selectList: [],
      pageid: this.$route.name,
      recycleList: [],
      run: false
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      this.run = true;
      Axios.get("recycleList").then(response => {
        this.recycleList = response.data;
        this.run = false;
      });
    },
    item_click(item) {
      this.$router.push({ name: item.id });
    },
    selectAll_click(list) {
      this.selectList = [];
      for (let i = 0; i < list.length; i++) {
        this.selectList.push(list[i].id);
      }
    },
    deselect_click() {
      this.selectList = [];
    },
    delete_click() {
      this.run = true;
      Axios.delete("recycleList", { data: this.selectList }).then(response => {
        this.recycleList = response.data;
        this.selectList = [];
        this.run = false;
      });
    },
    restore_click() {
      this.run = true;
      Axios.post("recycleList/restore", this.selectList).then(response => {
        this.recycleList = response.data;
        this.run = false;
      });
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

<template>
  <div class="d-flex flex-fill flex-row">
    <div class="sidebar">
      <navs class="flex-column p-2" :list="navList" :avtiveid="pageid" @change="item_click"></navs>
    </div>
    <div class="d-flex flex-fill flex-column content">
      <div class="topbar">
        <navs class="flex-row px-2 pt-2" :list="navList" :avtiveid="pageid" @change="item_click"></navs>
      </div>
      <nav class="navbar navbar-expand-lg justify-content-end tool mb-4">
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="select_all"
          @click.native="selectAll_click(dataList)"
          v-if="selectList.length != dataList.length"
        >全選</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="clear"
          @click.native="deselect_click"
          v-if="selectList.length"
        >取消</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="delete"
          @click.native="delete_click"
          :disabled="!selectList.length"
        >刪除</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="star"
          @click.native="star_click"
          :disabled="!selectList.length"
        >星號</icon-button>
        <icon-button class="btn-sm p-0" icon="note_add" @click.native="add_click">新增筆記</icon-button>
      </nav>
      <cards :list="dataList">
        <template slot-scope="props">
          <label class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <div class="d-flex justify-content-end">
                  <input type="checkbox" v-model="selectList" :value="props.item" class="ml-2" />
                </div>
                <i class="material-icons icon-star">{{ props.item.star ? "star" : "star_border" }}</i>
                <span v-html="props.item.title"></span>
              </h5>
              <p class="card-text ellipsis" v-html="props.item.ellipsis"></p>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary" @click="view_click(props.item)">查看</button>
              </div>
            </div>
          </label>
        </template>
      </cards>
    </div>
  </div>
</template>
<script>
import Navs from "@vue/components/Navs.vue";
import Cards from "@vue/components/Cards.vue";
import IconButton from "@vue/components/IconButton.vue";
export default {
  name: "all",
  components: { Navs, Cards, IconButton },
  data() {
    return {
      selectList: [],
      pageid: this.$route.name
    };
  },
  mounted() {},
  methods: {
    item_click(item) {
      this.$router.push({ name: item.id });
    },
    add_click() {
      this.$router.push({ name: "edit", params: { id: "new" } });
    },
    star_click() {},
    view_click(item) {
      this.$router.push({ name: "edit", params: { id: item.id } });
    },
    delete_click() {
      while (this.selectList.length) {
        this.$store.commit("removeDataItem", this.selectList.pop().id);
      }
    },
    star_click() {
      let bool = !this.selectList.every(el => el.star);
      for (let i = 0; i < this.selectList.length; i++) {
        this.$store.commit("setStarDataItem", {
          id: this.selectList[i].id,
          bool: bool
        });
      }
    },
    selectAll_click(list) {
      this.selectList = [];
      for (let i = 0; i < list.length; i++) {
        this.selectList.push(list[i]);
      }
    },
    deselect_click() {
      this.selectList = [];
    }
  },
  computed: {
    navList() {
      return this.$store.state.navList;
    },
    dataList() {
      return this.$store.state.dataList;
    }
  }
};
</script>
<style scoped></style>

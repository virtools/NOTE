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
          @click.native="selectAll_click(recycleList)"
          v-if="selectList.length != recycleList.length"
        >全選</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="clear"
          @click.native="deselect_click"
          v-if="selectList.length"
        >取消</icon-button>
        <icon-button
          class="btn-sm p-0 mr-2"
          icon="delete_forever"
          @click.native="delete_click"
          :disabled="!selectList.length"
        >刪除</icon-button>
        <icon-button
          class="btn-sm p-0"
          icon="restore"
          @click.native="restore_click"
          :disabled="!selectList.length"
        >復原</icon-button>
      </nav>
      <cards :list="$store.state.recycleList">
        <template slot-scope="props">
          <label class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <div class="d-flex justify-content-end">
                  <input type="checkbox" v-model="selectList" :value="props.item" class="ml-2" />
                </div>
                <span v-html="props.item.title"></span>
              </h5>
              <p class="card-text ellipsis" v-html="props.item.ellipsis"></p>
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
  name: "gardage",
  components: { Navs, Cards, IconButton },
  data() {
    return {
      selectList: [],
      pageid: this.$route.name
    };
  },
  methods: {
    item_click(item) {
      //this.$store.commit("changePage", item.id);
      this.$router.push({ name: item.id });
    },
    selectAll_click(list) {
      this.selectList = [];
      for (let i = 0; i < list.length; i++) {
        this.selectList.push(list[i]);
      }
    },
    deselect_click() {
      this.selectList = [];
    },
    delete_click() {
      while (this.selectList.length) {
        this.$store.commit("removeRecycleItem", this.selectList.pop().id);
      }
    },
    restore_click() {
      while (this.selectList.length) {
        this.$store.commit("restoreRecycleItem", this.selectList.pop().id);
      }
    }
  },
  computed: {
    navList() {
      return this.$store.state.navList;
    },
    recycleList() {
      return this.$store.state.recycleList;
    }
  }
};
</script>
<style scoped></style>

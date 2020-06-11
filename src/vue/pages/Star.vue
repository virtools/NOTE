<template>
  <div class="d-flex flex-fill flex-row">
    <div class="sidebar">
      <navs class="flex-column p-2" :list="navList" :avtiveid="pageid" @change="item_click"></navs>
    </div>
    <div class="d-flex flex-fill flex-column content">
      <div class="topbar">
        <navs class="flex-row px-2 pt-2" :list="navList" :avtiveid="pageid" @change="item_click"></navs>
      </div>
      <cards :list="dataList">
        <template slot-scope="props" v-if="props.item.star">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <span v-html="props.item.title"></span>
              </h5>
              <p class="card-text ellipsis" v-html="props.item.ellipsis"></p>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary" @click="view_click(props.item)">查看</button>
              </div>
            </div>
          </div>
        </template>
      </cards>
    </div>
  </div>
</template>
<script>
import Navs from "@vue/components/Navs.vue";
import Cards from "@vue/components/Cards.vue";
export default {
  name: "star",
  components: { Navs, Cards },
  data() {
    return {
      pageid: this.$route.name
    };
  },
  methods: {
    item_click(item) {
      this.$router.push({ name: item.id });
    },
    view_click(item) {
      this.$router.push({ name: "edit", params: { id: item.id } });
    }
  },
  computed: {
    navList() {
      return this.$store.state.navList;
    },
    dataList() {
      return this.$store.state.dataList.filter(el => el.star);
    }
  }
};
</script>
<style scoped></style>

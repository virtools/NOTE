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

      <b-overlay class="flex-fill" :show="run" rounded="sm" variant="light" opacity="0.75" blur="0">
        <cards :list="dataList">
          <template slot-scope="props" v-if="props.item.star">
            <!-- <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <span v-html="props.item.title"></span>
              </h5>
              <p class="card-text ellipsis" v-html="props.item.ellipsis"></p>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary" @click="view_click(props.item)">查看</button>
              </div>
            </div>
            </div>-->
            <b-card tag="label" class="mb-4 shadow-sm">
              <b-card-title>
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
export default {
  name: "star",
  components: { Navs, Cards },
  data() {
    return {
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
      Axios.get("dataList", { data: { filters: { star: true } } }).then(
        response => {
          this.dataList = response.data;
          this.run = false;
        }
      );
    },
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
    }
  }
};
</script>
<style scoped></style>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="item in list" :key="item.id">
      <a
        class="nav-link"
        :class="{ active: avtiveid == item.id }"
        href="javascript:void(0);"
        @click="item_click(item)"
      >{{ item.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "navs",
  props: {
    list: Array,
    avtiveid: String
  },
  methods: {
    item_click(item) {
      this.$emit("change", item);
    }
  }
};
</script>
<style scoped></style>

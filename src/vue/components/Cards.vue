<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="item in list" :key="item.id">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cards",
  props: {
    list: Array
  }
};
</script>
<style scoped></style>

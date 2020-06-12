<template>
  <button type="button" class="btn">
    <i class="material-icons icon-color align-middle" v-if="icon !== ''">{{ icon }}</i>
    <span class="align-middle">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped></style>

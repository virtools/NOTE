<template>
  <div class="d-flex flex-fill flex-column min-vh-100">
    <nav class="mainNavbar navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand">
        <span class="material-icons align-middle">description</span>
        <strong class="align-middle">筆記本</strong>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style scoped></style>
<style>
* {
  font-family: "Noto Sans TC", var(--font-family-sans-serif);
}
.ck-editor__editable_inline {
  flex: 1;
}
.ck-editor {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.ck-editor__main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.ck-content {
  word-break: break-all;
}

#app {
  overflow: hidden;
}
.sidebar {
  display: none !important;
}
.topbar {
  display: block !important;
}

.sidebar {
  min-width: 300px;
  /*background-color: #d7f1fa;*/
  border-right: 1px solid #dee2e6;
  box-shadow: 0.0625rem 0 0.125rem rgba(0, 0, 0, 0.075) !important;
}

.sidebar .nav-tabs {
  border-bottom: 0;
}
.sidebar .nav-tabs .nav-item .nav-link,
.sidebar .nav-tabs .nav-link {
  position: relative;
  border-width: 1px;
  border-radius: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  margin-right: -0.5rem;
}
.sidebar .nav-tabs .nav-item.show .nav-link,
.sidebar .nav-tabs .nav-link.active {
  /*background-color: #f2f3f5;*/
  /*background-image: linear-gradient(to right, #fafbfb, #ffffff);*/
  border-color: #dee2e6 #fff #dee2e6 #dee2e6;
  box-shadow: 0.125rem 0 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.sidebar .nav-tabs .nav-link:not(.active):focus,
.sidebar .nav-tabs .nav-link:not(.active):hover {
  border-color: #e9ecef #dee2e6 #e9ecef #e9ecef;
}

.sidebar .nav-tabs .nav-item {
  margin: 0;
}
.mainNavbar {
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.075) !important;
}
.tool .icon-color {
  color: #2d4257;
}
.tool {
  border-bottom: 1px solid #dee2e6;
}

.min-vh-75 {
  min-height: 75vh !important;
}
.min-vh-50 {
  min-height: 50vh !important;
}
.min-vh-25 {
  min-height: 25vh !important;
}

.content {
  width: 100%;
}
@media (min-width: 992px) {
  .sidebar {
    display: block !important;
  }
  .topbar {
    display: none !important;
  }
  .content {
    width: auto;
  }
}

@media (max-width: 576px) {
  .btn-group-sm > .btn,
  .btn-sm {
    font-size: 0.4375rem !important;
  }
}
.ellipsis {
  word-break: break-all;
  overflow: hidden;
  height: 1.5rem;
}
</style>

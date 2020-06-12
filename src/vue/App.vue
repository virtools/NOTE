<template>
  <div class="d-flex flex-fill flex-column min-vh-100" :class="{ dark_theme: dark }">
    <nav class="mainNavbar navbar navbar-expand-lg">
      <!--  :class="[dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light']" -->
      <div class="navbar-brand">
        <span class="material-icons align-middle">description</span>
        <strong class="align-middle">筆記本</strong>
      </div>
      <div class="d-flex flex-fill justify-content-end">
        <!-- <input type="checkbox" checked data-toggle="toggle" /> -->
        <!-- <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1" />
          <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
        </div>-->
        <b-form-checkbox
          v-model="dark"
          name="check-button"
          switch
          :dark="dark"
        >{{ dark ? "深色" : "淺色" }}</b-form-checkbox>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      dark: false
    };
  },
  methods: {}
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

.sidebar.nav-tabs {
  border-bottom: 0;
  width: 300px;
  max-width: 300px;
  /*background-color: #d7f1fa;*/
  border-right: 1px solid #dee2e6;
  box-shadow: 0.0625rem 0 0.125rem rgba(0, 0, 0, 0.075) !important;
}
.sidebar.nav-tabs .nav-item .nav-link,
.sidebar.nav-tabs .nav-link {
  position: relative;
  border-width: 1px;
  border-radius: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  margin-right: -0.5rem;
}
.sidebar.nav-tabs .nav-item.show .nav-link,
.sidebar.nav-tabs .nav-link.active {
  /*background-color: #f2f3f5;*/
  /*background-image: linear-gradient(to right, #fafbfb, #ffffff);*/
  border-color: #dee2e6 #fff #dee2e6 #dee2e6;
  box-shadow: 0.125rem 0 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.sidebar.nav-tabs .nav-link:not(.active):focus,
.sidebar.nav-tabs .nav-link:not(.active):hover {
  border-color: #e9ecef #dee2e6 #e9ecef #e9ecef;
}

.sidebar.nav-tabs .nav-item {
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
@media (max-width: 991px) {
  .sidebar.nav-tabs {
    display: none !important;
  }
}
@media (min-width: 992px) {
  /*.sidebar {
    display: block !important;
  }*/
  .topbar.nav-tabs {
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

/*.dark-theme .custom-control {
  color: #fff !important;
}
.dark-theme .navbar {
  background-color: #343a40 !important;
  color: #fff !important;
}*/
.dark_theme {
  color: #fff;
  background-color: #292c2f;
}
.dark_theme .mainNavbar {
  border-bottom-color: #6a6c70;
}
.dark_theme .navbar {
  background-color: #343a40;
}
.dark_theme .navbar-brand {
  color: #fff;
}
.dark_theme .content {
  /*background-color: #343a40;*/
  background-color: #292c2f;
}
.dark_theme .card {
  background-color: #495057;
  border-color: rgba(255, 255, 255, 0.125);
}
.dark_theme .icon-star {
  color: #ff0;
}
.dark_theme .nav-tabs {
  background-color: #343a40;
  border-bottom-color: #6a6c70;
}
.dark_theme .nav-tabs .nav-link.active,
.dark_theme .nav-tabs .nav-item.show .nav-link {
  background-color: #495057;
  color: #fff;
  border-color: #595a5d #595a5d #6a6c70;
}
.dark_theme .nav-tabs .nav-link:not(.active):focus,
.dark_theme .nav-tabs .nav-link:not(.active):hover {
  border-color: #838588 #838588 #6a6c70;
}
.dark_theme .sidebar.nav-tabs {
  border-right-color: #6a6c70;
}
.dark_theme .sidebar.nav-tabs .nav-item.show .nav-link,
.dark_theme .sidebar.nav-tabs .nav-link.active {
  border-color: #595a5d #6a6c70 #595a5d #595a5d;
}
.dark_theme .sidebar.nav-tabs .nav-link:not(.active):focus,
.dark_theme .sidebar.nav-tabs .nav-link:not(.active):hover {
  border-color: #838588 #6a6c70 #838588 #838588;
}
.dark_theme .tool {
  border-bottom-color: #6a6c70;
}
.dark_theme .tool .icon-color {
  color: #52e2f1;
}

.dark_theme .btn {
  color: #fff;
}
.dark_theme .btn:hover {
  color: #bddbde;
}

.dark_theme .input-group-text {
  color: #fff;
  background-color: #343a40;
  border-color: #6a6c70;
}

.dark_theme .form-control {
  color: #fff;
  background-color: #000;
  border-color: #6a6c70;
}
.dark_theme .ck-content {
  background-color: #000 !important;
}
.dark_theme .ck-editor {
  --ck-border-radius: 4px;

  /* Overrides the default font size in the theme. */
  --ck-font-size-base: 14px;

  /* Helper variables to avoid duplication in the colors. */
  --ck-custom-background: hsl(270, 1%, 29%);
  --ck-custom-foreground: hsl(255, 3%, 18%);
  --ck-custom-border: hsl(300, 1%, 22%);
  --ck-custom-white: hsl(0, 0%, 100%);

  /* -- Overrides generic colors. ------------------------------------------------------------- */

  --ck-color-base-foreground: var(--ck-custom-background);
  --ck-color-focus-border: hsl(208, 90%, 62%);
  --ck-color-text: hsl(0, 0%, 98%);
  --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
  --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

  /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

  --ck-color-button-default-background: var(--ck-custom-background);
  --ck-color-button-default-hover-background: hsl(270, 1%, 22%);
  --ck-color-button-default-active-background: hsl(270, 2%, 20%);
  --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);
  --ck-color-button-default-disabled-background: var(--ck-custom-background);

  --ck-color-button-on-background: var(--ck-custom-foreground);
  --ck-color-button-on-hover-background: hsl(255, 4%, 16%);
  --ck-color-button-on-active-background: hsl(255, 4%, 14%);
  --ck-color-button-on-active-shadow: hsl(240, 3%, 19%);
  --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

  --ck-color-button-action-background: hsl(168, 76%, 42%);
  --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
  --ck-color-button-action-active-background: hsl(168, 76%, 36%);
  --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
  --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
  --ck-color-button-action-text: var(--ck-custom-white);

  --ck-color-button-save: hsl(120, 100%, 46%);
  --ck-color-button-cancel: hsl(15, 100%, 56%);

  /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

  --ck-color-dropdown-panel-background: var(--ck-custom-background);
  --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

  /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

  --ck-color-split-button-hover-background: var(
    --ck-color-button-default-hover-background
  );
  --ck-color-split-button-hover-border: var(--ck-custom-foreground);

  /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

  --ck-color-input-background: var(--ck-custom-foreground);
  --ck-color-input-border: hsl(257, 3%, 43%);
  --ck-color-input-text: hsl(0, 0%, 98%);
  --ck-color-input-disabled-background: hsl(255, 4%, 21%);
  --ck-color-input-disabled-border: hsl(250, 3%, 38%);
  --ck-color-input-disabled-text: hsl(0, 0%, 46%);

  /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

  --ck-color-list-background: var(--ck-custom-background);
  --ck-color-list-button-hover-background: var(--ck-color-base-foreground);
  --ck-color-list-button-on-background: var(--ck-color-base-active);
  --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
  --ck-color-list-button-on-text: var(--ck-color-base-background);

  /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

  --ck-color-panel-background: var(--ck-custom-background);
  --ck-color-panel-border: var(--ck-custom-border);

  /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

  --ck-color-toolbar-background: var(--ck-custom-background);
  --ck-color-toolbar-border: var(--ck-custom-border);

  /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

  --ck-color-tooltip-background: hsl(252, 7%, 14%);
  --ck-color-tooltip-text: hsl(0, 0%, 93%);

  /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

  --ck-color-image-caption-background: hsl(0, 0%, 97%);
  --ck-color-image-caption-text: hsl(0, 0%, 20%);

  /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

  --ck-color-widget-blurred-border: hsl(0, 0%, 87%);
  --ck-color-widget-hover-border: hsl(43, 100%, 68%);
  --ck-color-widget-editable-focus-background: var(--ck-custom-white);

  /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

  --ck-color-link-default: hsl(190, 100%, 75%);

  --ck-color-base-border: #6a6c70;
}
</style>

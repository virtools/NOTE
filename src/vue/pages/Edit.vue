<template>
  <div class="d-flex flex-column min-vh-75 p-2">
    <nav class="navbar navbar-expand-lg flex-grow-4 px-0">
      <button type="button" class="btn btn-danger btn-sm" @click="close_click">╳</button>
      <div class="flex-grow-1 justify-content-end text-right">
        <button type="button" class="btn btn-success btn-sm" @click="save_click" v-if="save > 0">儲存</button>
      </div>
    </nav>
    <div class="input-group py-2">
      <div class="input-group-prepend">
        <span class="input-group-text">標題</span>
      </div>
      <input type="text" class="flex-fill" v-model="editorTitle" @input="title_input" />
    </div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      @input="onEditorInput"
      @ready="onEditorReady"
    ></ckeditor>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "@js/MyUploadAdapter";
export default {
  name: "edit",
  data() {
    return {
      editorId: "",
      editorTitle: "",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        extraPlugins: [
          editor => {
            editor.plugins.get(
              "FileRepository"
            ).createUploadAdapter = loader => {
              return new MyUploadAdapter(loader);
            };
          }
        ]
      },
      save: 0
    };
  },
  mounted() {},
  methods: {
    title_input: function() {
      this.save++;
    },
    onEditorReady(e) {
      this.save = 0;
      let id = this.$route.params.id;
      if (id === "" || id === undefined) {
        this.$router.push("/");
      } else if (id === "new") {
        this.editorId = "";
        this.editorTitle = "";
        this.editorData = "";
        this.save = 0;
      } else {
        this.editorId = id;
        let dataItem = this.$store.getters.getDataItem(id);
        if (dataItem) {
          this.editorTitle = dataItem.title;
          this.editorData = dataItem.content;
          this.save = Math.max(this.save - 1, -1);
        } else {
          this.$router.push("/");
        }
      }
    },
    onEditorInput(e) {
      this.save = Math.min(this.save + 1, 1);
    },
    close_click() {
      if (!this.save || confirm("尚未儲存是否離開")) {
        this.save = 0;
        this.$router.push({ name: "all" });
      }
    },
    save_click() {
      const add = this.editorId === "";
      let id = add ? this.$store.getters.guid : this.editorId;
      this.$store.commit("saveEditData", {
        add: add,
        id: id,
        title: this.editorTitle,
        content: this.editorData
      });
      this.save = 0;
      if (add) {
        this.editorId = id;
        this.$router.push({ name: "edit", params: { id: id } });
      }
    }
  }
};
</script>
<style scoped></style>

<template>
  <div class="d-flex flex-fill flex-column content">
    <div class="d-flex flex-column min-vh-75 p-2">
      <nav class="navbar navbar-expand-lg flex-grow-4 px-0">
        <button type="button" class="btn btn-danger btn-sm" @click="close_click">╳</button>
        <div class="flex-grow-1 justify-content-end text-right">
          <button
            type="button"
            class="btn btn-success btn-sm"
            @click="save_click"
            v-if="save > 0"
          >儲存</button>
        </div>
      </nav>
      <div class="input-group py-2">
        <div class="input-group-prepend">
          <span class="input-group-text">標題</span>
        </div>
        <input
          type="text"
          class="form-control flex-fill"
          v-model="editorTitle"
          @input="title_input"
        />
      </div>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
        @input="onEditorInput"
        @ready="onEditorReady"
      ></ckeditor>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
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
      if (id === "" || id == undefined) {
        this.$router.push("/");
      } else if (id == "new") {
        this.editorId = "";
        this.editorTitle = "";
        this.editorData = "";
        this.save = 0;
      } else {
        Axios.get("dataList", {
          data: { filters: { id: this.$route.params.id } }
        }).then(response => {
          if (response.data.length) {
            const data = response.data[0];
            this.editorId = data.id;
            this.editorTitle = data.title;
            this.editorData = data.content;
            this.save = Math.max(this.save - 1, -1);
          } else {
            this.$router.push("/");
          }
        });
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
      if (this.editorId === "") {
        Axios.post("dataList", [
          {
            title: this.editorTitle,
            content: this.editorData
          }
        ]).then(response => {
          if (response.data.length) {
            this.editorId = response.data[0].id;
            this.$router.push({
              name: "edit",
              params: { id: response.data[0].id }
            });
          }
          this.save = 0;
        });
      } else {
        Axios.patch("dataList", [
          {
            id: this.editorId,
            title: this.editorTitle,
            content: this.editorData
          }
        ]).then(response => {
          this.save = 0;
        });
      }
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: transparent;
}
</style>

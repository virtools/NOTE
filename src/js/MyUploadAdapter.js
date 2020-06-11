export default class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onload = () => {
            resolve({ default: reader.result });
          };
          reader.onerror = () => {
            reject(reader.error);
          };
          reader.readAsDataURL(file);
        })
    );
  }
}

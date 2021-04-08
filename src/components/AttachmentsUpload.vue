<template>
  <div class="uploader-inline">
    <div class="uploader-inline-content no-upload-message">
      <div class="upload-ui">
        <h2 class="upload-instructions drop-instructions">Drop files to upload</h2>
        <p class="upload-instructions drop-instructions">or</p>
        <button type="button" class="browser button button-hero">
          Select Files
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttachmentsUpload",
  components:{}
}
</script>

<style scoped lang="css">
.media-frame-content .uploader-inline {
  margin-bottom: 20px;
  padding: 0;
  text-align: center;
}

.uploader-inline .uploader-inline-content {
  position: absolute;
  text-align: center;
  top: 30%;
  left: 0;
  right: 0;
}

.uploader-inline-content .upload-ui {
  margin: 2em 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
  color: #1d2327 !important;
  line-height: 1.4;
  font-weight: 400 !important;
}

.muf-media-frame-content .uploader-inline .drop-instructions {
  display: block;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
  margin: 0;
}

.muf-media-frame-content .uploader-inline .button {
  background: #f6f7f7;
  position: relative;
  font-size: 14px;
  display: inline-block !important;
  min-height: 46px;
  line-height: 3.14285714;
  padding: 0 36px;
  color: #2271b1;
  border-color: #2271b1;
  background: #f6f7f7;
  vertical-align: top;
  cursor: pointer;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: none;
  border-radius: 3px;
  white-space: nowrap;
  margin: 0;
  box-sizing: border-box;
}
</style>
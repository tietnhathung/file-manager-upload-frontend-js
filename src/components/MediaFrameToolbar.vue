<template>
  <div class="media-frame-toolbar">
    <div class="media-toolbar">
      <div class="media-toolbar-secondary"></div>
      <div class="media-toolbar-primary search-form">
        <button type="button" class="button media-button button-primary button-large media-button-select">Set featured image</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: "MediaFrameToolbar"
}
</script>
<style scoped lang="css">
.media-frame-toolbar {
  position: absolute;
  left: 0px;
  right: 0;
  z-index: 100;
  bottom: 60px;
  height: auto;
}
.media-frame-toolbar .media-toolbar {
  top: auto;
  bottom: -47px;
  height: auto;
  overflow: visible;
  border-top: 1px solid #dcdcde;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 16px;
}
.media-toolbar-primary {
  float: right;
  height: 100%;
  position: relative;
}
.media-frame-toolbar .button.button-large {
  min-height: 32px;
  line-height: 2.30769231;
  padding: 0 12px;
  float: left;
  background: #2271b1;
  border-color: #2271b1;
  color: #fff;
  text-decoration: none;
  text-shadow: none;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  margin: 15px 0 0 10px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: none;
  border-radius: 3px;
  white-space: nowrap;
  box-sizing: border-box;
}
</style>
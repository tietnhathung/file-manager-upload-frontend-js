<template>
  <div class="media-sidebar">
    <div class="media-uploader-status" style="display: none;">
      <h2>Uploading</h2>
      <button type="button" class="button-link upload-dismiss-errors"><span
          class="screen-reader-text">Dismiss Errors</span></button>
      <div class="media-progress-bar">
        <div></div>
      </div>
      <div class="upload-details">
        <span class="upload-count">
          <span class="upload-index"></span> / <span class="upload-total"></span>
        </span>
        <span class="upload-detail-separator">–</span>
        <span class="upload-filename"></span>
      </div>
      <div class="upload-errors"></div>
    </div>
    <div class="attachment-details save-ready">
      <h2>
        Attachment Details <span class="settings-save-status" role="status">
				<span class="spinner"></span>
				<span class="saved">Saved.</span>
			</span>
      </h2>
      <div class="attachment-info">
        <div class="thumbnail thumbnail-image">
          <img src="http://127.0.0.1:81/wp-content/uploads/2021/04/2021-03-08-6-300x169.png" draggable="false" alt="">
        </div>
        <div class="details">
          <div class="filename">2021-03-08-6.png</div>
          <div class="uploaded">April 3, 2021</div>
          <div class="file-size">462 KB</div>
          <div class="dimensions"> 1920 by 1080 pixels</div>
          <button type="button" class="button-link delete-attachment">Delete permanently</button>
          <div class="compat-meta">
          </div>
        </div>
      </div>
      <span class="setting has-description" data-setting="alt">
				<label for="attachment-details-alt-text" class="name">Alt Text</label>
				<input type="text" id="attachment-details-alt-text" value="" aria-describedby="alt-text-description">
			</span>
      <p class="description" id="alt-text-description">
        <a href="https://www.w3.org/WAI/tutorials/images/decision-tree" target="_blank" rel="noopener">Describe the purpose of the image
          <span class="screen-reader-text"> (opens in a new tab)</span>
        </a>. Leave empty if the image is purely decorative.
      </p>
      <span class="setting" data-setting="title">
			<label for="attachment-details-title" class="name">Title</label>
			<input type="text" id="attachment-details-title" value="2021-03-08">
		</span>

      <span class="setting" data-setting="caption">
			<label for="attachment-details-caption" class="name">Caption</label>
			<textarea id="attachment-details-caption"></textarea>
		</span>
      <span class="setting" data-setting="description">
			<label for="attachment-details-description" class="name">Description</label>
			<textarea id="attachment-details-description"></textarea>
		</span>
      <span class="setting" data-setting="url">
			<label for="attachment-details-copy-link" class="name">File URL:</label>
			<input type="text" class="attachment-details-copy-link" id="attachment-details-copy-link" value="http://127.0.0.1:81/wp-content/uploads/2021/04/2021-03-08-6.png" readonly="">
			<div class="copy-to-clipboard-container">
				<button type="button" class="button button-small copy-attachment-url" data-clipboard-target="#attachment-details-copy-link">Copy URL to clipboard</button>
				<span class="success hidden" aria-hidden="true">Copied!</span>
			</div>
		</span>
    </div>
    <form class="compat-item"></form>
  </div>
</template>

<script>
export default {
  name: "MediaSidebar"
}
</script>

<style scoped lang="css">
.media-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 267px;
  padding: 0 16px;
  z-index: 75;
  background: #f6f7f7;
  border-left: 1px solid #dcdcde;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.attachment-details {
  position: relative;
  overflow: auto;
}
.media-sidebar h2 {
  position: relative;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  color: #646970;
  margin: 24px 0 8px;
}
.attachment-info {
  overflow: hidden;
  min-height: 60px;
  margin-bottom: 16px;
  line-height: 1.5;
  color: #646970;
  border-bottom: 1px solid #dcdcde;
  padding-bottom: 11px;
}
.attachment-info .thumbnail {
  position: relative;
  float: left;
  max-width: 120px;
  max-height: 120px;
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
}
.attachment-info .thumbnail img {
  display: block;
  max-width: 120px;
  max-height: 120px;
  margin: 0 auto;
}
.attachment-info .details {
  float: left;
  font-size: 12px;
  max-width: 100%;
}
.attachment-info .delete-attachment{
  display: inline;
  padding: 0;
  margin: 0;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background: 0 0;
  cursor: pointer;
  text-align: left;
  transition-property: border,background,color;
  transition-duration: .05s;
  transition-timing-function: ease-in-out;
  color: #d63638;
}
.attachment-details .setting, .media-sidebar .setting {
  display: block;
  float: left;
  width: 100%;
  margin: 0 0 10px;
}
.attachment-details .setting .name, .attachment-details .setting .value, .attachment-details .setting span, .compat-item label span, .media-sidebar .checkbox-label-inline, .media-sidebar .setting .name, .media-sidebar .setting .value, .media-sidebar .setting span {
  float: left;
  min-height: 22px;
  padding-top: 8px;
  max-width: 80px;
  min-width: 30%;
  margin-right: 4%;
  font-size: 12px;
  text-align: right;
  word-wrap: break-word;
  line-height: 1.33333333;
  font-weight: 400;
  color: #646970;
}
.attachment-details .setting input[type="text"]{
  box-sizing: border-box;
  margin: 1px;
  width: 65%;
  float: right;
  padding: 0 8px;
  line-height: 2.15384615;
  box-shadow: 0 0 0 transparent;
  border-radius: 4px;
  border: 1px solid #8c8f94;
  background-color: #fff;
  color: #2c3338;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  font-size: 13px;
}
.attachment-details .setting textarea, .compat-item .field textarea, .media-sidebar .setting textarea {
  height: 62px;
  resize: vertical;
}
.attachment-details .setting input[readonly]{
  background-color: #f0f0f1;
}
.attachment-details .copy-to-clipboard-container, .media-sidebar .copy-to-clipboard-container {
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: calc(35% - 1px);
  padding-top: 10px;
}
.copy-to-clipboard-container {
  display: flex;
  align-items: center;
  clear: both;
}
.copy-attachment-url {
  min-height: 26px;
  line-height: 2.18181818;
  padding: 0 8px;
  font-size: 11px;
  white-space: normal;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: none;
  border-radius: 3px;
  box-sizing: border-box;
  color: #2271b1;
  border-color: #2271b1;
  background: #f6f7f7;
  vertical-align: top;
}
.attachment-details .copy-to-clipboard-container .success, .media-sidebar .copy-to-clipboard-container .success {
  padding: 0;
  min-height: 0;
  line-height: 2.18181818;
  text-align: left;
  color: #008a20;
}
.attachment-details .setting+.description {
  clear: both;
  font-size: 12px;
  font-style: normal;
  margin: 0 1px;
  box-sizing: border-box;
  width: 65%;
  float: right;
  color: #646970;
  text-align: left;
  margin-bottom: 10px;
}
.attachment-details .setting+.description a{
  border-bottom: none;
  color: #2271b1;
}
</style>
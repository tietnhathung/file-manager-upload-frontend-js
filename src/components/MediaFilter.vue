<template>
  <div class="media-toolbar">
    <div class="media-toolbar-secondary">
      <h2 class="media-attachments-filter-heading">Filter media</h2>
      <select id="media-attachment-filters" class="attachment-filters">
        <option value="all">Images</option>
        <option value="uploaded">Uploaded to this page</option>
        <option value="unattached">Unattached</option>
        <option value="mine">Mine</option>
      </select>
      <select id="media-attachment-date-filters" class="attachment-filters">
        <option value="all">All dates</option><option value="0">April 2021</option>
        <option value="1">March 2021</option>
      </select>
      <span class="spinner"></span>
    </div>
    <div class="media-toolbar-primary search-form">
      <label for="media-search-input" class="media-search-input-label">Search</label>
      <input type="search" id="media-search-input" class="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaFilter"
}
</script>

<style scoped lang="css">
.media-toolbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 300px;
  z-index: 100;
  height: 72px;
  background: #fff;
  padding: 0 16px;
  border: 0 solid #dcdcde;
  overflow: hidden;
}
.media-toolbar .media-toolbar-secondary{
  max-width: 66%;
  float: left;
  height: 100%;
}
.media-attachments-filter-heading{
  position: absolute;
  top: 10px;
  left: 16px;
  margin: 0;
  font-size: 13px;
  line-height: 1;
  z-index: 151;
}
.media-toolbar select.attachment-filters {
  margin-top: 32px;
  margin-right: 2%;
  width: calc(48% - 12px);
  max-width: calc(48% - 12px);
  font-size: 14px;
  line-height: 2;
  color: #2c3338;
  border-color: #8c8f94;
  box-shadow: none;
  border-radius: 3px;
  padding: 0 24px 0 8px;
  -webkit-appearance: none;
  background: #fff url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23555%22%2F%3E%3C%2Fsvg%3E) no-repeat right 5px top 55%;
  background-size: 16px 16px;
  cursor: pointer;
}
.media-toolbar .media-toolbar-primary {
  max-width: 33%;
  float: right;
  height: 100%;
  position: relative;
  box-sizing: content-box;
}
.media-toolbar .media-search-input-label {
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 13px;
  margin: 0;
  line-height: 1;
}
#media-search-input {
  -webkit-appearance: textfield;
  width: 100%;
  box-shadow: 0 0 0 transparent;
  border-radius: 4px;
  border: 1px solid #8c8f94;
  background-color: #fff;
  color: #2c3338;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  font-size: 13px;
  padding: 0 8px;
  margin: 32px 0 0;
  max-width: 100%;
  line-height: 2.15384615;
}
</style>
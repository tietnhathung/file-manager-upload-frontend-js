<template>
  <div class="attachments-browser">
    <MediaFilter/>
    <ListAttachments/>
<!--    <UploaderInline/>-->
    <MediaSidebar/>
  </div>
</template>

<script>
import MediaFilter from "./MediaFilter.vue";
import ListAttachments from "./ListAttachments.vue";
import UploaderInline from "./UploaderInline.vue";
import MediaSidebar from "./MediaSidebar.vue";
export default {
  name: "AttachmentsBrowser",
  components:{MediaFilter, UploaderInline, MediaSidebar,ListAttachments}
}
</script>

<style scoped lang="css">

</style>
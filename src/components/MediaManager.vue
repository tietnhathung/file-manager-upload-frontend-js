<template>
  <div class="muf-root" style={modalStyle}>
    <div class="muf-modal">
      <Header ></Header>
      <Body ho="tieest" dem="nhat" ten="hung"></Body>
      <Footer></Footer>
    </div>
    <div class="muf-modal-backdrop"></div>
  </div>
</template>

<script>
export default {
  name: "app"
  }
</script>

<style scoped lang="css">
  .muf-modal{
    background:#ffffff;
    position: fixed;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    z-index: 160000;
  }
  .muf-modal-backdrop{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 360px;
    background: #000;
    opacity: .7;
    z-index: 159900;
  }
</style>
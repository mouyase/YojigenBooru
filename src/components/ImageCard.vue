<template>
  <div class="imagecard">
    <el-image :src="imageData.preview_url" referrerPolicy='no-referrer'>
    </el-image>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    imageData: {}
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.el-image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

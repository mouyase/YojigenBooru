<template>
  <div class="imagecardlist">
    <ImageCard v-for="(imageData,index) in imageArray" :imageData="imageData"
               @click.native="showImageViewer(index)"/>
    <YojigenImageViewer v-if="isShowImageViewer"
                        :onClose="closeImageViewer"
                        :urlList="largeImageArray"
                        :initialIndex="imageViewerIndex"
                        :onSwitch="onImageViewerSwitch"
                        :onImageClick="routeLargePage"/>
  </div>
</template>

<script>
import ImageCard from "@/components/ImageCard";
import YojigenImageViewer from "@/components/YojigenImageViewer";

export default {
  name: 'ImageCardList',
  components: {
    ImageCard,
    YojigenImageViewer,
  },
  props: {
    imageArray: {},
  },
  data() {
    return {
      isShowImageViewer: false,
      largeImageArray: [],
      imageViewerIndex: 0,
      nowIndex: 0,
    }
  },
  mounted() {
  },
  watch: {
    imageArray: {
      handler(newValue, oldVallue) {
        if (newValue !== oldVallue) {
          newValue.forEach((value, index) => {
            this.largeImageArray.push(value.sample_url)
          })
        }
      },
      immediate: true,
    }
  },
  methods: {
    closeImageViewer() {
      this.isShowImageViewer = false
    },
    showImageViewer(index) {
      this.isShowImageViewer = true
      this.nowIndex = index
      this.imageViewerIndex = index
    },
    onImageViewerSwitch(index) {
      this.nowIndex = index
    },
    routeLargePage() {
      window.open(this.imageArray[this.nowIndex].file_url, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
.imagecardlist {
  column-count: 8;
  column-gap: 0;
}
</style>

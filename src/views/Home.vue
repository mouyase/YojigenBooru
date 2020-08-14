<template>
  <div class="home">
    <ImageCardList :imageArray="imageArray"/>
  </div>
</template>

<script>
import ImageCardList from "@/components/ImageCardList";

export default {
  name: 'Home',
  components: {
    ImageCardList,
  },
  data() {
    return {
      imageArray: []
    }
  },
  mounted() {
    this.$http.get('https://yande.re/post.json?limit=100&tags=rating%3As').then((response) => {
      this.imageArray = response.data
    })
  }
}
</script>

<style lang="scss" scoped>
</style>

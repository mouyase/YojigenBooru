<template>
  <div id="app">
    <Header/>
    <el-row>
      <el-col :span="3">
        <TagsPad/>
      </el-col>
      <el-col :span="21">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from '@/components/Header'
import TagsPad from '@/components/TagsPad'

export default {
  name: 'App',
  components: {
    Header,
    TagsPad,
  }
}
</script>
<style lang="scss">
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0;
  background-color: #333;
}
</style>

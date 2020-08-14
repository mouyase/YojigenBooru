<template>
  <div class="header">
    <el-row>
      <el-col :span="3">
        <div>Logo</div>
      </el-col>
      <el-col :span="8">
        <div class="header-search">
          <el-input placeholder="请输入关键词" v-model="keyword">
            <el-button slot="append" icon="el-icon-search" type="primary" plain></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;


  .header-search {
    height: 60px;
    display: flex;
    align-items: center
  }
}
</style>

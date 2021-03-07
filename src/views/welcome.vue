<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in Images" :key="item">
      <el-image :src="item" class="rightulliimg"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      Images: [
        require('@/assets/erji1.jpg'),
        require('@/assets/erji1.jpg'),
        require('@/assets/erji1.jpg'),
        require('@/assets/erji1.jpg')
      ]
    }
  }
}
</script>

<style>
    .rightulliimg {
      height: 100%;
      width: 100%;
    }
</style>

<template>

          <el-upload class="upload-demo"
            :action="null"
            :before-upload="beforeUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            list-type="audio">
            <el-button size="small" type="primary" :disabled="isdisabled">点击上传</el-button>
          </el-upload>
</template>
<script>
export default {
  data () {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    }
  },
  methods: {
    // 上传图片
    async beforeUpload (image) {
      const pic = new FormData()
      pic.append('audio', image)
      const { data: res } = await this.axios.post('/upaudio', pic)
      console.log(res)
      if (res.status !== '1') return this.$message.error('上传失败')
      this.$message.success('成功')
      this.addForm.image_url = res.url
      return false
    }
  }
}
</script>

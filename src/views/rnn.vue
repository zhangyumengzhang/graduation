<template>
<div>
   <el-upload
  class="upload-demo"
  drag
  :action="null"
  :before-upload="beforeUpload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  list-type="audio"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传wav/mp3格式文件</div>
</el-upload>
</div>
</template>
<script>
export default {
  data () {
    return {
      fileList: [{ name: '', url: '' }]
    }
  },
  created () {
    this.getBookList()
  },
  methods: {
    // 上传音频
    async beforeUpload (file) {
      const pic = new FormData()
      pic.append('audio', file)
      pic.append('filename', file.name)
      pic.append('username', window.sessionStorage.getItem('username'))
      const { data: res } = await this.axios.post('/Upaudio', pic)
      console.log(res)
      if (res.status !== '1') return this.$message.error('上传失败')
      this.$message.success('成功')
      this.addForm.image_url = res.url
      return false
    },

    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    //
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

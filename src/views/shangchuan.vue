<template>
  <div class="box">
    <div class="upload">
      <el-upload
        class="upload-demo"
        drag
        action="null"
        multiple
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeUpload">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传mp3/wav文件</div>
      </el-upload>
      <audio :src="audioUrl"  controls muted="muted"></audio>
    </div>
    <div>
    </div>
    <div class="search_button">
      <el-button type="primary"> 降噪处理 </el-button>
    </div>
    <div class="bottom">
      <h4>北京市海淀区 ｜ 北京交通大学 ｜ 软件工程1704 ｜ 张雨梦</h4>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      audioUrl: '',
      fileList: []
    }
  },
  methods: {
    // 上传音频
    async beforeUpload (file) {
      // 文件类型进行判断
      const isAudio = file.type === 'audio/mp3' || file.type === 'audio/wav'
      // 限制上传文件大小 2M
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isAudio) {
        this.fileList = []
      } else {
        if (!isLt2M) {
          this.fileList = []
        }
      }
      if (isAudio) {
        if (isLt2M) {
          const pic = new FormData()
          pic.append('audio', file)
          pic.append('filename', file.name)
          pic.append('username', window.sessionStorage.getItem('username'))
          const { data: res } = await this.axios.post('/Upaudio', pic)
          console.log(res)
          if (res.status !== '1') return this.$message.error('上传失败')
          this.$message.success('成功')
          this.audioUrl = res.url
          console.log(this.audioUrl)
        } else {
          this.$message.error('上传文件大小不能超过 2MB!')
        }
      } else {
        this.$message.error('上传文件只能是Mp3或者Wav格式!')
      }
    },
    handleAvatarSuccess (res, file) {
      this.audioUrl = URL.createObjectURL(file.raw)
      console.log(this.audioUrl)
    },
    getTimes (file) {
      var content = file
      // 获取录音时长
      var url = URL.createObjectURL(content)
      // 经测试，发现audio也可获取视频的时长
      var audioElement = new Audio(url)
      audioElement.addEventListener('loadedmetadata', (_event) => {
        this.audioDuration = parseInt(audioElement.duration)
        console.log(this.audioDuration)
      })
    }

  }
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.upload {
  background-color: #E9EEF3;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.search_button {
  background-color: #E9EEF3;
  text-align: center;
  padding-top: -500px;
}
.bottom {
  background-color: #E9EEF3;
  text-align: right;
  padding-top: 100px;
  padding-right: 50px;
  padding-bottom: 20px;
}
</style>

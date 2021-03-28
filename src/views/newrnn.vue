<template>
  <div class="box">
      <!-- 面包屑导航区域
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }" @click="savenav">首页</el-breadcrumb-item>
      <el-breadcrumb-item>音频降噪</el-breadcrumb-item>
    </el-breadcrumb> -->
    <!-- 卡片视图区域 -->
 <el-card class="box-card">
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
      <div class="audio">
        {{this.filename}}
      </div>
      <audio class="audio" :src="audioUrl"  controls muted="muted"></audio>
      <div class="button">
      <el-button type="primary" round @click="rnn()"> 降噪处理 </el-button>
    </div>
    <div class="audio">
       <audio class="audio" :src="newaudioUrl"  controls muted="muted"></audio>
    </div>
    </div>
 </el-card>
     <div class="bottom">
      <h4>北京市海淀区 ｜ 北京交通大学 ｜ 软件工程1704 ｜ 张雨梦</h4>
    </div>
  </div>
</template>

<script type="text/javascript">
var audios = document.getElementsByTagName('audio')
// 暂停函数
function pauseAll () {
  var self = this;
  [].forEach.call(audios, function (i) {
    // 将audios中其他的audio全部暂停
    i !== self && i.pause()
  })
}
// 给play事件绑定暂停函数
[].forEach.call(audios, function (i) {
  i.addEventListener('play', pauseAll.bind(i))
})
</script>
<script>
export default {
  data () {
    return {
      audioUrl: '',
      newaudioUrl: '',
      fileList: [],
      filename: ''
    }
  },

  methods: {
    // 上传音频
    async beforeUpload (file) {
      // 文件类型进行判断
      const isAudio = file.type === 'audio/mp3' || file.type === 'audio/wav'|| file.type === 'audio/mpeg'
      // 限制上传文件大小 4M
      const isLt4M = file.size / 1024 / 1024 < 4
      if (!isAudio) {
        this.fileList = []
      } else {
        if (!isLt4M) {
          this.fileList = []
        }
      }
      if (isAudio) {
        if (isLt4M) {
          const audiofile = new FormData()
          this.filename = file.name
          audiofile.append('audio', file)
          audiofile.append('filename', file.name)
          audiofile.append('username', window.sessionStorage.getItem('username'))
          const { data: res } = await this.axios.post('/Upaudio', audiofile)
          console.log(res)
          if (res.status !== '1') return this.$message.error('上传失败')
          this.$message.success('成功')
          this.audioUrl = res.url
          console.log(this.audioUrl)
        } else {
          this.$message.error('上传文件大小不能超过 2MB!')
        }
      } else {
        this.$message.error(file.type)
        // this.$message.error('上传文件只能是Mp3或者Wav格式')
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
    },

    // 降噪处理
    async rnn () {
      const audio = new FormData()
      audio.append('path', this.audioUrl)
      audio.append('username', window.sessionStorage.getItem('username'))
      const { data: res } = await this.axios.post('/rnn', audio)
      if (res.status !== '1') return this.$message.error('降噪失败')
      this.$message.success('成功')
      this.newaudioUrl = res.url
      console.log(this.newaudioUrl)
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
  padding-top: 50px;
  padding-bottom: 50px;
}
.button {
  background-color: #E9EEF3;
  text-align: center;
  margin-top: -5px;
}
.bottom {
  background-color: #E9EEF3;
  text-align: right;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
}
.audio {
  background-color: #E9EEF3;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align:center
}
</style>

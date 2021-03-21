<template>
  <div >
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>收藏夹</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->

    <el-card class="box-card">
       <!-- 搜索与添加区域 -->
       <el-row gutter="20">
         <el-col :span="8">
           <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable
           @clear="getstarmusicList">
             <el-button slot="append" icon="el-icon-search" @click="querystaraudio"></el-button>
          </el-input>
          </el-col>
       </el-row>
         <!-- 播放进度条 -->
       <div id='playMusic'>
          <audio ref='audio'
            @pause="onPause"
            @play='onplay'
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
            controls muted="muted"></audio>
          <!-- 进度条 -->
          <!-- <el-slider v-model="sliderTime" :format-tooltip="formatProcessToolTip" @change="changeCurrentTime" class="slider"></el-slider>
          <span>{{audio.currentTime | formartSecond}} / </span>
          <span>{{audio.maxTime | formartSecond}}</span> -->
        </div>
       <!-- 类别列表区 -->
       <el-table :data="musiclist" border stripe>
         <el-table-column type="index" width="50"></el-table-column>
         <el-table-column label="用户名称">{{this.queryInfo.username}}</el-table-column>
         <el-table-column label="音乐名称" prop="audiotitle"></el-table-column>
         <el-table-column label="音乐类型" prop="type"></el-table-column>play
          <el-table-column label="播放" width="160px">
            <template slot-scope="scope">
             <!-- 播放 -->
            <el-button type='primary' size="mini" icon="el-icon-video-play" @click='startPlayOrPause(scope.row.audiotitle)'></el-button>
             <!-- <el-button type="primary" icon="el-icon-video-play" size="mini" @click="handlePlay('audio')"></el-button> -->
           </template>
         </el-table-column>
         <el-table-column label="取消收藏" width="160px">
            <template slot-scope="scope">
             <!-- 收藏 -->
             <el-button type="primary" icon="el-icon-star-on" size="mini" @click="changestar(scope.row.audiotitle)"></el-button>
           </template>
         </el-table-column>
         <el-table-column label="删除" width="160px">
            <template slot-scope="scope">
             <!-- 删除 -->
             <el-button type="primary" icon="el-icon-delete" size="mini" @click="deleteaudio(scope.row.audiotitle)"></el-button>
           </template>
         </el-table-column>
       </el-table>
    </el-card>
  </div>
</template>

<script>
// 将整数转换成 时：分：秒的格式
function realFormatSecond (second) {
  var secondType = typeof second

  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)

    var hours = Math.floor(second / 3600)
    second = second - hours * 3600
    var mimute = Math.floor(second / 60)
    second = second - mimute * 60

    return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '0:00:00'
  }
}
export default {
  data () {
    return {
      src: '',
      sliderTime: 0,
      audio: {
        maxTime: 0, /* 音频最大播放时长 */
        currentTime: 0, /* 当前播放时长 */
        playing: false /* 音频当前处于播放/暂停状态 */
      },
      musiclist: [],
      queryInfo: {
        username: window.sessionStorage.getItem('username'),
        query: ''
      }
    }
  },
  name: 'playMusic',
  created () {
    this.getstarmusicList()
  },
  methods: {

    /* 进度条格式化toolTip */
    formatProcessToolTip (index = 0) {
      index = parseInt(this.audio.maxTime / 100 * index)
      return '时长：' + realFormatSecond(index)
    },
    /* 拖动进度条，改变当前时间 index是进度条改变时的回调函数的参数 值为0~100之间，需要换算成实际时间 */
    changeCurrentTime (index) {
      this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
    },
    /* 音频加载完成后的回调函数 */
    onLoadedmetadata (res) {
      console.log(111)
      this.audio.maxTime = parseInt(res.target.duration)
    },
    /* 每秒触发一次 用来更新当前播放时间 */
    onTimeupdate (res) {
      this.audio.currentTime = res.target.currentTime
      /* 当音频播放时 进度条也要随之改变 */
      this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
    },
    /* 控制音频播放、暂停 */
    startPlayOrPause (audiotitle) {
      if (this.audio.playing) {
        this.pause()
      } else {
        this.$refs.audio.src = 'http://localhost:8900/static/' + audiotitle
        this.play()
      }
    },
    /* 播放音频 */
    play () {
      this.$refs.audio.play()
    },
    /* 暂停音频 */
    pause () {
      this.$refs.audio.pause()
    },
    /* 当音频播放 */
    onplay () {
      this.audio.playing = true
    },
    /* 当音频暂停 */
    onPause () {
      this.audio.playing = false
    },

    // 获取音频
    async getstarmusicList () {
      const { data: res } = await this.axios.post('/getstar', {
        username: window.sessionStorage.getItem('username')
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)

      if (res.status === '1') {
        this.$message.success(res.message)
        this.musiclist = res.songlists
      };
    },
    // 改变收藏状态
    async changestar (audiotitle) {
      const { data: res } = await this.axios.post('/canclestar', {
        username: this.queryInfo.username,
        audiotitle: audiotitle
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)
      this.$message.success(res.message)
      this.getstarmusicList()
    },
    // 模糊查询音频
    async querystaraudio () {
      // 获取的请求
      const { data: res } = await this.axios.post('/querystaraudio', {
        username: this.queryInfo.username,
        query: this.queryInfo.query
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error('模糊获取音频列表失败')
      this.$message.success('模糊获取音频列表成功')
      this.musiclist = res.songlists
    },

    // 删除音频
    async deleteaudio (musicname) {
      // 弹框询问用户
      const confirmresult = await this.$confirm('此操作将永久删除该音频, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmresult !== 'confirm') {
        return this.$message.info('已取消删除')
      }

      console.log(musicname)
      const { data: res } = await this.axios.post('/delete', {
        username: window.sessionStorage.getItem('username'),
        musicname: musicname
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)
      if (res.status === '1') {
        this.$message.success(res.message)
        this.getmusicList()
      }
    }
  },
  filters: {
    /* 使用vue过滤器动态改变按钮的显示 */
    transPlayPause (value) {
      return value ? '暂停' : '播放'
    },
    /* 整数转换时分秒 */
    formartSecond (second = 0) {
      return realFormatSecond(second)
    }
  }
}
</script>

<style lang="less" scoped>
#playMusic {
  display: flex;
  align-items: center;
  margin-left: 570px;
  // .slider {
  //   width: 150px;
  //   margin-left: 570px;
  // }
  // > span:nth-of-type(2) {
  //   margin-left: 5px;
  // }
}
</style>

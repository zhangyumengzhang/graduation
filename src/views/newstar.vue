<template>
  <div >
    <!-- 面包屑导航区域
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>收藏夹</el-breadcrumb-item>
    </el-breadcrumb> -->
    <!-- 卡片视图区域 -->

    <el-card class="box-card">
       <!-- 搜索与添加区域 -->
       <el-row gutter="20">
         <el-col :span="8">
           <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable
           @clear="getlist">
             <el-button slot="append" icon="el-icon-search" @click="queryaudio"></el-button>
          </el-input>
          </el-col>
           <el-button @click="changenumto1" type="text" icon="el-icon-star-on" class="star">已收藏文件</el-button>
            <el-button @click="changenumto2" type="text" icon="el-icon-star-off"  class="notstar">未收藏文件</el-button>
       </el-row>
         <!-- 播放进度条 -->
       <div id='playMusic'>
          <audio ref='audio'
            @pause="onPause"
            @play='onplay'
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
            controls muted="muted"></audio>
        </div>
       <!-- 类别列表区 -->
       <el-table :data="musiclist" v-show="num==1" border stripe>
         <el-table-column type="index" width="50"></el-table-column>
         <el-table-column label="用户名称">{{this.queryInfo.username}}</el-table-column>
         <el-table-column label="音乐名称" prop="title"></el-table-column>
          <el-table-column label="创建时间" prop="audiotime"></el-table-column>
         <el-table-column label="音乐类型" prop="type"></el-table-column>
          <el-table-column label="播放" width="160px">
            <template slot-scope="scope">
             <!-- 播放 -->
            <el-button type='primary' size="mini" icon="el-icon-video-play" @click='startPlayOrPause(scope.row.title)'></el-button>
             <!-- <el-button type="primary" icon="el-icon-video-play" size="mini" @click="handlePlay('audio')"></el-button> -->
           </template>
         </el-table-column>
         <el-table-column label="取消收藏" width="160px">
            <template slot-scope="scope">
             <!-- 收藏 -->
             <el-button type="primary" icon="el-icon-star-on" size="mini" @click="changestar(scope.row.title)"></el-button>
           </template>
         </el-table-column>
         <el-table-column label="删除" width="160px">
            <template slot-scope="scope">
             <!-- 删除 -->
             <el-button type="primary" icon="el-icon-delete" size="mini" @click="deleteaudio(scope.row.title)"></el-button>
           </template>
         </el-table-column>
       </el-table>
              <!-- 类别列表区 -->
       <el-table :data="notstarlist" v-show="num==2" border stripe>
         <el-table-column type="index" width="50"></el-table-column>
         <el-table-column label="用户名称">{{this.queryInfo.username}}</el-table-column>
         <el-table-column label="音乐名称" prop="title"></el-table-column>
          <el-table-column label="创建时间" prop="audiotime"></el-table-column>
         <el-table-column label="音乐类型" prop="type"></el-table-column>play
          <el-table-column label="播放" width="160px">
            <template slot-scope="scope">
             <!-- 播放 -->
            <el-button type='primary' size="mini" icon="el-icon-video-play" @click='startPlayOrPause(scope.row.title)'></el-button>
             <!-- <el-button type="primary" icon="el-icon-video-play" size="mini" @click="handlePlay('audio')"></el-button> -->
           </template>
         </el-table-column>
         <el-table-column label="收藏" width="160px">
            <template slot-scope="scope">
             <!-- 收藏 -->
             <el-button type="primary" icon="el-icon-star-on" size="mini" @click="addstar(scope.row.title)"></el-button>
           </template>
         </el-table-column>
         <el-table-column label="删除" width="160px">
            <template slot-scope="scope">
             <!-- 删除 -->
             <el-button type="primary" icon="el-icon-delete" size="mini" @click="deleteaudio(scope.row.title)"></el-button>
           </template>
         </el-table-column>
       </el-table>
    </el-card>
    <div class="bottom" v-show="num==1">
      <h4>北京市海淀区 ｜ 北京交通大学 ｜ 软件工程1704 ｜ 张雨梦</h4>
    </div>
    <div class="bottom" v-show="num==2">
      <h4>北京市海淀区 ｜ 北京交通大学 ｜ 软件工程1704 ｜ 张雨梦</h4>
    </div>
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
      num: 1,
      src: '',
      sliderTime: 0,
      audio: {
        maxTime: 0, /* 音频最大播放时长 */
        currentTime: 0, /* 当前播放时长 */
        playing: false /* 音频当前处于播放/暂停状态 */
      },
      musiclist: [],
      notstarlist: [],
      queryInfo: {
        username: window.sessionStorage.getItem('username'),
        query: ''
      }
    }
  },
  name: 'playMusic',
  created () {
    this.getstarmusicList()
    this.getnotstarmusicList()
  },
  methods: {
    changenumto1 () {
      this.num = 1
    },
    changenumto2 () {
      this.num = 2
    },
    queryaudio () {
      if (this.num === 1) {
        this.querystaraudio()
      } else {
        this.querynotstaraudio()
      }
    },
    getlist () {
      this.getstarmusicList()
      this.getnotstarmusicList()
    },
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
    startPlayOrPause (title) {
      if (this.audio.playing) {
        this.pause()
      } else {
        this.$refs.audio.src = 'http://localhost:8900/static/' + title
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

    // 获取收藏音频
    async getstarmusicList () {
      const { data: res } = await this.axios.post('/getstar', {
        username: window.sessionStorage.getItem('username')
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)

      if (res.status === '1') {
        console.log(res.message)
        // this.$message.success(res.message)
        this.musiclist = res.songlists
      };
    },
    // 获取未收藏音频
    async getnotstarmusicList () {
      const { data: res } = await this.axios.post('/getnotstar', {
        username: window.sessionStorage.getItem('username')
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)

      if (res.status === '1') {
        console.log(res.message)
        // this.$message.success(res.message)
        this.notstarlist = res.songlists
      };
    },
    // 取消收藏状态
    async changestar (title) {
      const { data: res } = await this.axios.post('/canclestar', {
        username: this.queryInfo.username,
        title: title
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)
      console.log(res.message)
      // this.$message.success(res.message)
      this.getlist()
    },
    // 增加收藏状态
    async addstar (title) {
      const { data: res } = await this.axios.post('/star', {
        username: this.queryInfo.username,
        title: title
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error(res.message)
      console.log(res.message)
      // this.$message.success(res.message)
      this.getlist()
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
      console.log(res.message)
      // this.$message.success(res.message)
      this.musiclist = res.songlists
    },
    // 模糊查询未收藏音频
    async querynotstaraudio () {
      // 获取的请求
      const { data: res } = await this.axios.post('/querynotstaraudio', {
        username: this.queryInfo.username,
        query: this.queryInfo.query
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error('模糊获取音频列表失败')
      console.log(res.message)
      // this.$message.success(res.message)
      this.notstarlist = res.songlists
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
        console.log(res.message)
        // this.$message.success(res.message)
        this.getlist()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom {
  background-color: #E9EEF3;
  text-align: right;
  position: fixed;
  bottom:0;
  right: 5%;
}
.bottom1 {
  background-color: #E9EEF3;
  text-align: right;
  top:0px;
  right: 5%;
}
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
.star {
  width: 200px;
  position: fixed;
  left: 77%;
}
.notstar {
  width: 200px;
  position: fixed;
  left: 83%;
}
</style>

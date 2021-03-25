<template>
  <div>
     <!-- 面包屑导航区域
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的音频</el-breadcrumb-item>
    </el-breadcrumb> -->
    <!-- 卡片视图区域 -->
 <el-card class="box-card">
    <div style="padding:10px 0;">
         <!-- 搜索与添加区域 -->
       <el-row gutter=20>
         <el-col :span="8">
           <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable
           @clear="init">
             <el-button slot="append" icon="el-icon-search" @click="queryaudio"></el-button>
          </el-input>
          </el-col>
       </el-row>
        <aplayer ref="player"  :music="musiclist[0]" :list="musiclist" :v-if="flag"  listMaxHeight='400px' ></aplayer>
    </div>
 </el-card>
     <div class="bottom">
      <h4>北京市海淀区 ｜ 北京交通大学 ｜ 软件工程1704 ｜ 张雨梦</h4>
    </div>
  </div>
</template>

<script>
import aplayer from 'vue-aplayer'
export default {
  name: 'Aplayer',
  components: {
    // 别忘了引入组件
    aplayer: aplayer
  },
  data () {
    return {
      star: '',
      queryInfo: {
        username: window.sessionStorage.getItem('username'),
        query: ''
      },
      flag: false,
      musiclist: []
    }
  },
  async mounted () {
    // 异步加载，先加载出player再使用
    this.init()
    const aplayer = this.$refs.player.control
    aplayer.play()
  },
  methods: {
    async init () {
      const { data: res } = await this.axios.post('/getaudio', {
        username: window.sessionStorage.getItem('username')
      })

      console.log(res)
      this.musiclist = []
      if (res.status !== '1') {
        return this.$message.error(res.message)
      }
      if (res.status === '1') {
        this.$message.success(res.message)
        this.temp = res.songlists

        for (let i = 0; i <= this.temp.length; i++) {
          const obj = {}
          // url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词
          // 其中url必须有，其他的都是非必须
          obj.title = this.temp[i].title
          obj.artist = window.sessionStorage.getItem('username')
          obj.src = 'http://localhost:8900/static/' + this.temp[i].title
          if (this.temp[i].isstar === '1') {
            obj.isstar = '已收藏'
          } else {
            obj.isstar = '未收藏'
          }
          // 把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了
          this.musiclist.push(obj)
        }
      };
    },
    // 模糊查询音频
    async queryaudio () {
      // 获取的请求
      const { data: res } = await this.axios.post('/queryaudio', {
        username: this.queryInfo.username,
        query: this.queryInfo.query
      })
      console.log(res)
      this.musiclist = []
      if (res.status !== '1') {
        return this.$message.error(res.message)
      }
      if (res.status === '1') {
        this.$message.success(res.message)
        this.temp = res.songlists

        for (let i = 0; i <= this.temp.length; i++) {
          const obj = {}
          // url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词
          // 其中url必须有，其他的都是非必须
          obj.title = this.temp[i].title
          obj.artist = window.sessionStorage.getItem('username')
          obj.src = 'http://localhost:8900/static/' + this.temp[i].title
          if (this.temp[i].isstar === '1') {
            obj.isstar = '已收藏'
          } else {
            obj.isstar = '未收藏'
          }
          // 把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了
          this.musiclist.push(obj)
        }
      };
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
    .shoucang{
        font-size: 32px;
    }
    .shoucang.active{
        color: red;
    }
.bottom {
  background-color: #E9EEF3;
  text-align: right;
  position:fixed;
  bottom:0;
  right: 5%;
}
</style>

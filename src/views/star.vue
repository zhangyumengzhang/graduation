<template>
  <div>
    <div style="padding:10px 0;">
          <!-- 搜索与添加区域 -->
       <el-row gutter="20">
         <el-col :span="8">
           <el-input placeholder="请输入内容" clearable
           @clear="getBookList">
             <el-button slot="append" icon="el-icon-search" @click="selectBookQuery"></el-button>
          </el-input>
          </el-col>
       </el-row>
      <aplayer :autoplay='false' :music="song" :list="musiclist"></aplayer>
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
      flag: false,
      musiclist: [],
      song: { title: '', artist: '', src: '' }
    }
  },
  mounted () {
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
      if (res.status !== '1') return this.$message.error(res.message)

      if (res.status === '1') {
        this.$message.success(res.message)
        this.temp = res.songlists

        this.song.title = this.temp[0].audiotitle
        this.song.artist = window.sessionStorage.getItem('username')
        this.song.src = 'http://localhost:8900/static/' + this.temp[0].audiotitle

        for (let i = 0; i <= this.temp.length; i++) {
          const obj = {}
          // url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词
          // 其中url必须有，其他的都是非必须
          obj.title = this.temp[i].audiotitle
          obj.artist = window.sessionStorage.getItem('username')
          obj.src = 'http://localhost:8900/static/' + this.temp[i].audiotitle
          // 把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了
          this.musiclist.push(obj)
          console.log(this.musicList)
        }
        // 因为是异步请求，所以一开始播放器中是没有歌曲的，所有给了个v-if不然会插件默认会先生成播放器，导致报错(这个很重要)
        this.flag = true
      };
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
</style>

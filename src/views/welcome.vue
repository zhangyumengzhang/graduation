<template>
  <div class="home">
    <!--    轮播图   -->
    <div class="index">
      <el-carousel :interval="4000"  height="460px" indicator-position="outside" type="card">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView"  class="rightulliimg">
          <div style="padding: 25px;">
            <span>{{ item.text }}</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider></el-divider>
    <div>
      <div class="activity-panel">
        <el-row>
          <el-col class="title">
            <h1>技术科普</h1>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col class="content" :span="8" v-for="o in imgList2" :key="o.id">
            <el-card :body-style="{ padding: '0px' }" >
              <img :src="o.idView" class="i">
             <a :href="o.page" class="cover-link" target="_blank"></a>
              <div style="padding: 5px;">
                <span>{{ o.text }}</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

    </div>
    <div class="bottom">
      <h4>北京市海淀区 ｜ 北京交通大学 ｜ 软件工程1704 ｜ 张雨梦</h4>
    </div>
    </div>

</template>

<script>

// 主要逻辑
export default {
  data () {
    return {
      imgurl: require('@/assets/erji1.jpg'),
      banner: [],
      homeList: [],
      imgList: [
        { id: 0, idView: require('@/assets/erji.jpg') },
        { id: 1, idView: require('@/assets/info1.jpg') },
        { id: 2, idView: require('@/assets/erji1.jpg') }
      ],
      imgList2: [
        { id: 0, idView: require('@/assets/jiagou.png'), text: 'RNNoise是一个采用音频特征抽取+深度神经网络结合的降噪方案', page: 'https://www.pianshen.com/article/58811157704/' },
        { id: 1, idView: require('@/assets/jingdianjiagou.png'), text: 'Rnnoise是一种实时（低复杂度）全频带的语音增强（噪声抑制）方法', page: 'https://blog.csdn.net/qq249356520/article/details/100582644' },
        { id: 2, idView: require('@/assets/liucheng.png'), text: '噪声抑制原理（RNN模拟部分） 原声 - 噪声 = 降噪', page: 'https://blog.csdn.net/qq249356520/article/details/100582644' },
        { id: 3, idView: require('@/assets/pindai.png'), text: '介绍如何进行RNNoise的训练和测试的步骤文章参考', page: 'https://blog.csdn.net/dakeboy/article/details/88065399' }
      ],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,
      fileList: []
    }
  },
  methods: {
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = 400 / 1920 * this.screenWidth
    }

  },
  mounted () {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.setSize()
    }
  }
}
</script>

<style lang="scss" scoped>

.index{
  background: #c8cfd8;
  width: 90%;
  text-align: center;
  margin-left: 110px;
  width: 85.6%;

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.home {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.activity-panel {
  width: 1220px;
  margin: 0 auto;
  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .title {
    text-align: center;
    font-size: 20px;
    color: #1a1a1a;
    padding-bottom: 10px;
  }
  .content {
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 25%;
    height: 200px;
    text-align: center;
  }
  .content ::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    border-left: 1px solid #f2f2f2;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    content: "";
    pointer-events: none;
  }
  .i {
    width: 305px;
    height: 200px;
  }
  .cover-link {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
    repeat;
  }
  a {
    color: #5079d9;
    cursor: pointer;
    transition: all 0.15s ease-out;
    text-decoration: none;
  }
  a:hover {
    box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
    transition: all 0.15s ease;
  }
}

.box {
  overflow: hidden;
  position: relative;
  z-index: 0;
  margin-top: 29px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}

.bottom {
  background-color: #E9EEF3;
  text-align: right;
  padding-top: 100px;
  padding-right: 50px;
  padding-bottom: 20px;
}
.rightulliimg {
      height: 100%;
      width: 100%;
    }
</style>

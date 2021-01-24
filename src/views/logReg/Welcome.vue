<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="10">
      <audio src="../../assets/yan.mp3" ></audio>
      </el-col>
      <el-col :span="12">
        <el-row :gutter="20">
          <el-col :span="15">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>

                <div class="grid-cont-right">
                  <div class="grid-num">{{ userlook }}</div>

                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="15">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>

                <div class="grid-cont-right">
                  <div class="grid-num">{{ bookadd }}</div>

                  <div>图书增加量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="15">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>

                <div class="grid-cont-right">
                  <div class="grid-num">{{ booksum }}</div>

                  <div>图书总数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: window.sessionStorage.getItem('username'),
      bookadd: '',
      booksum: '',
      userlook: ''
    }
  },

  mounted () {
    this.getdata()
  },
  methods: {
    async getdata () {
      // 获取的请求
      const { data: res } = await this.axios.post('/information', {
        store_id: window.sessionStorage.getItem('storeid')
      })
      console.log(res)
      if (res.status !== '1') return this.$message.error('获取数据失败')
      this.$message.success('获取数据成功')
      this.bookadd = parseInt(res.NewBooks)
      this.booksum = parseInt(res.booksNum)
      this.userlook = parseInt(res.look_mount)
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;

  align-items: center;

  height: 100px;
}

.grid-cont-right {
  flex: 1;

  text-align: center;

  font-size: 14px;

  color: #999;
}

.grid-num {
  font-size: 30px;

  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;

  width: 100px;

  height: 100px;

  text-align: center;

  line-height: 100px;

  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;

  align-items: center;

  padding-bottom: 20px;

  border-bottom: 2px solid #ccc;

  margin-bottom: 20px;
}

.user-avator {
  width: 120px;

  height: 120px;

  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;

  flex: 1;

  font-size: 14px;

  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;

  float: center;

  color: #222;
}

.user-info-list {
  font-size: 20px;

  color: #999;

  line-height: 25px;
}

.user-info-list span {
  margin-left: 45px;
}

.mgb20 {
  margin-bottom: 20px;
}
</style>

<template>
  <div class="register_container">
    <!-- 注册 -->
    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
       <img src="../../assets/logo.png">
      </div>
      <!-- 注册表单区域 -->
      <el-form ref="registertwoFormRef" :model="registertwoForm" :rules="registertwoFormRules" label-width="0px" class="register_form">
        <!-- 用户名 -->
        <el-form-item prop="shopaddr">
          <el-input v-model="registertwoForm.shopaddr"  placeholder="店铺地址" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="mobile" >
          <el-input v-model="registertwoForm.mobile"  placeholder="移动电话" prefix-icon="el-icon-s-shop"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="telephone">
          <el-input v-model="registertwoForm.telephone"  placeholder="固定电话" prefix-icon="el-icon-chat-line-round"></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="register()">注册</el-button>
          <el-button type="info" @click=resetRegisterForm()>重置</el-button>
        </el-form-item>
        <!-- 返回登陆链接 -->
        <div class='link'>
          <el-link type="info" @click="changeType()">已有账号请点击登录</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这是注册表单数据
      registertwoForm: {
        shopaddr: '',
        mobile: '',
        telephone: ''
      },
      registertwoFormRules: {
        // 验证用户名是否合法
        shopaddr: [
          { required: true, message: '请输入店铺地址', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入店铺移动电话', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入店铺固定电话', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置注册表单
    resetRegisterForm () {
      console.log(this.$refs)
      this.$refs.registertwoFormRef.resetFields()
    },
    // 改变表单
    changeType () {
      this.$router.push('/login')
    },
    // 注册第二步
    register () {
      this.$refs.registertwoFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.axios.post('/addStore', {
          email: window.sessionStorage.getItem('email'),
          store_phone_num: this.registertwoForm.mobile,
          store_telephone: this.registertwoForm.telephone,
          store_name: window.sessionStorage.getItem('storename'),
          store_position: this.registertwoForm.shopaddr
        })
        console.log(res)
        if (res.status !== '1') return this.$message.error('注册失败！')
        // console.log(res)
        this.$message.success('注册成功')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang='less' scoped>
.register_container{
  background-color: #2b4b6b;
  height: 122%;
}

.register_box{
  width: 450px;
  height: 350px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%,-50%);

  .avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position :absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
  height: 70%;
  margin-bottom: 1%;
  margin-left: 1px
}
.link {
  margin-bottom: 1%;
  margin-left: 1px;
  text-align: right;
}
.register_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>

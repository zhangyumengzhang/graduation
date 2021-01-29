<template>
   <div class="login-container">
    <!--走马灯-->
    <div class="carousel-form" :inline="true">
      <img :src='imgurl' class="rightulliimg">
    </div>
    <!--登录-->
    <div class="login-form">
      <div class="title-container">
          <h3 class="title">欢迎使用音频降噪系统</h3>
        </div>
        <!-- 注册表单区域 -->
      <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules" label-width="0px" class="register_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="registerForm.username"  placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password" >
          <el-input v-model="registerForm.password"  placeholder="密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="repassword">
          <el-input v-model="registerForm.repassword"  placeholder="确认密码" prefix-icon="el-icon-lock"></el-input>
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
      imgurl: require('@/assets/erji1.jpg'),
      // 这是注册表单数据
      registerForm: {
        username: '',
        password: '',
        repassword: ''
      },
      isLogin: true,
      registerFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置注册表单
    resetRegisterForm () {
      console.log(this.$refs)
      this.$refs.registerFormRef.resetFields()
    },
    // 改变表单
    changeType () {
      this.$router.push('/login')
    },
    // 注册
    register () {
      this.$refs.registerFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.axios.post('/register', {
          username: this.registerForm.username,
          password: this.registerForm.password
        })
        console.log(res)
        if (res.status !== '1') return this.$message.error(res.message)
        this.$message.success(res.message)
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang='less' scoped>
.btns {
  display: flex;
  justify-content: flex-end;
  height: 70%
}
// 登录内容样式
.login-container{
  height: 550px;
  width: 1170px;
  margin: 120px auto;
  // 边框
  // border: 2px solid red;
  background-color: #eaecf0;
  -webkit-align-items: center;
align-items: center;
justify-content: center;

  -webkit-appearance: none;
  // 元素添加圆角的边框：
  border-radius: 10px;

  // 走马灯样式
  .carousel-form{
    width: 680px;
    margin-top: 55px;
    margin-left: 22px;
    border-radius: 10px;

    float: left;
    // 设定走马灯样式
    .rightulliimg {
      height: 440px;
      width: 680px;
      border-radius: 10px;
    }
  }
  // 登录表单样式
  .login-form{
    width: 360px;
    height: 440px;
    background-color:white;
    float: right;
    margin: 55px 25px 0px 0px;
    // 边框圆角
    border-radius: 10px;
    padding: 10px 25px;
    // 边框
    // border: 2px solid greenyellow;

    .title-container{
      position: relative;

      .title {
        font-size: 26px;
        color: black;
        margin: 15px auto 40px auto;
        // 居中
        text-align: center;
        font-weight: bold;
      }
    }
    // SVG样式
    .svg-container {
      // 内边距
      padding: 6px 5px 6px 15px;
      // 颜色
      color: #889aa4;
      // 居中
      vertical-align: middle;
      // 宽度
      width: 30px;
      // 显示
      display: inline-block;
    }
    // 密码样式
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: #889aa4;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>

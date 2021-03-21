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
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="密码" prefix-icon="el-icon-lock"
          type="password" ></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-button type="primary" @click=login()>登录</el-button>
          <el-button type="info" @click="resetLoginForm()">重置</el-button>
        </el-form-item>
        <!-- 注册链接 -->
        <div>
          <el-link type="info" @click="changeType">注册</el-link>
          <el-link type="info" @click="changeType1">忘记密码</el-link>
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
      // 这是登陆表单的数据
      loginForm: {
        username: 'zym',
        password: '123456'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

    // 点击重置按钮，重置登陆表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
      // this.$nextTick(() => { this.$refs.loginFormRef.resetFields() })
    },
    // 登录请求
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.axios.post('/login', this.loginForm)
        console.log(res)
        if (res.status !== '1') return this.$message.error(res.message)
        // console.log(res)
        this.$message.success(res.message)
        window.sessionStorage.setItem('username', this.loginForm.username)
        // 获取token
        // console.log(res)
        this.$router.push('/home')
      })
    },
    // 显示密码/隐藏密码
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 改变表单
    changeType () {
      this.$router.push('/register')
    },
    // 改变表单
    changeType1 () {
      this.$router.push('/forget')
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

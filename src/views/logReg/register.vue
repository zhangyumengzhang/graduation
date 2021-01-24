<template>
  <div class="register_container">
    <!-- 注册 -->
    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
       <img src="../../assets/logo.png">
      </div>
      <!-- 注册表单区域 -->
      <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules" label-width="0px" class="register_form">
        <!-- 用户名 -->
        <el-form-item prop="email">
          <el-input v-model="registerForm.email"  placeholder="邮箱名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="store_name" >
          <el-input v-model="registerForm.store_name"  placeholder="店铺名" prefix-icon="el-icon-s-shop"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="check">
          <el-input v-model="registerForm.check"  placeholder="验证码" prefix-icon="el-icon-chat-line-round" style="width: 270px"></el-input>
           <el-button type="primary" style="float: right" @click=getcode() >获取验证码</el-button>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="changePage()">确定</el-button>
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
      registerForm: {
        email: '',
        store_name: '',
        check: ''
      },
      isLogin: true,
      registerFormRules: {
        // 验证用户名是否合法
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' }
        ],
        store_name: [
          { required: true, message: '请输入注册店铺名称', trigger: 'blur' }
        ],
        check: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
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
    // 注册第二步
    changePage () {
      this.$refs.registerFormRef.validate(async valid => {
        if (!valid) return
        if (this.registerForm.check !== window.sessionStorage.getItem('check')) return this.$message.error('验证码不正确')
        await this.$router.push('/registertwo')
      })
    },
    // 获取验证码
    getcode () {
      this.axios.post('/check', {
        email: this.registerForm.email,
        store_name: this.registerForm.store_name
      }
      ).then(res => {
        console.log(res)
        if (res.data.status !== '1') return this.$message.error('获取验证码失败！')
        this.$message.success('获取验证码成功')
        window.sessionStorage.setItem('check', res.data.check)
        window.sessionStorage.setItem('storename', this.registerForm.store_name)
        window.sessionStorage.setItem('email', this.registerForm.email)
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

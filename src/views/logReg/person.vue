<template>
  <div>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="changeType">修改</el-button>
      </div>
    <!-- 内容主体区域-->
      <el-form :model="personForm" :rules="personFormRules" ref="personFormRef" label-width="80px">
         <el-form-item label="用户名称" prop="username">
          <el-input v-model="personForm.username" disabled></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="password">
          <el-input v-model="personForm.password" :disabled="isdisabled"></el-input>
        </el-form-item>
         <el-form-item label="电话" prop="phone">
          <el-input v-model="personForm.phone" :disabled="isdisabled"></el-input>
        </el-form-item>
         <el-form-item label="性别" prop="gender">
          <el-input v-model="personForm.gender" :disabled="isdisabled"></el-input>
        </el-form-item>
         <el-form-item label="年龄" prop="age">
          <el-input v-model="personForm.age" :disabled="isdisabled"></el-input>
        </el-form-item>
          <el-form-item label="邮箱" prop="email">
          <el-input v-model="personForm.email" :disabled="isdisabled"></el-input>
        </el-form-item>
          <el-form-item label="国家" prop="country">
          <el-input v-model="personForm.country" :disabled="isdisabled"></el-input>
        </el-form-item>
      </el-form>
      <span class="bottombtn" :hidden="isdisabled">
        <el-button  type="info"  @click="changeType()">取 消</el-button>
        <el-button  type="primary" @click="editperson()">保 存</el-button>
      </span>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // const email = (rule, value, callback) => {
    //   if (value !== '') {
    //     const reg = /^([a-zA-Z0-9]+[_|\\_|-|\-|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    //     if (!reg.test(value)) {
    //       callback(new Error('电子邮箱格式形如：xx-xx@x-xx.ab或xx-xx@x-xx.abc'))
    //     }
    //   }
    // }
    // const phone = (rule, value, callback) => {
    //   if (value !== '') {
    //     const reg = /^1[34578]\d{9}$/
    //     if (!reg.test(value)) {
    //       callback(new Error('请输入正确的手机号'))
    //     }
    //   }
    // }
    return {
      // 获取用户列表的参数对象
      isdisabled: true,
      // 添加用户的表单数据
      personForm: {
        username: '',
        password: '',
        phone: '',
        gender: '',
        age: '',
        email: '',
        country: ''
      },
      // 添加表单的验证规则对象
      personFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
        // email: [
        //   { validator: email, trigger: 'blur' }
        // ]
        // phone: [
        //   { validator: phone, trigger: 'blur' }
        // ]
      }
    }
  },

  created () {
    this.getpersonInfo()
  },
  methods: {
    async getpersonInfo () {
      // 获取用户信息请求
      const { data: res } = await this.axios.post('/getuser', { username: window.sessionStorage.getItem('username') })
      if (res.status !== '1') {
        return this.$message.error(res.message)
      }
      this.$message.success(res.message)
      this.personForm = res.userlists[0]
    },
    changeType () {
      this.getpersonInfo()
      this.isdisabled = !this.isdisabled
    },
    async editperson () {
      this.$message.success('ceshi')
      this.$refs.personFormRef.validate(async valid => {
        this.$message.success('ceshi2')
        if (!valid) return
        const { data: res } = await this.axios.post('/modifyuser', {
          username: this.personForm.username,
          password: this.personForm.password,
          phone: this.personForm.phone,
          gender: this.personForm.gender,
          age: this.personForm.age,
          email: this.personForm.email,
          country: this.personForm.country
        })
        console.log(res)
        if (res.status !== '1') {
          this.$message.error(res.message)
          this.isdisabled = !this.isdisabled
          this.getpersonInfo()
        } else {
          this.$message.success(res.message)
          this.isdisabled = !this.isdisabled
          this.getpersonInfo()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bottombtn {
  float: right;
  margin-bottom: 10px;
}
</style>

<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="changeType">修改</el-button>
      </div>
    <!-- 内容主体区域-->
      <el-form :model="personForm" :rules="personFormRules" ref="personFormRef" label-width="80px">
         <el-form-item label="用户名称" prop="username">
          <el-input v-model="personForm.username" :disabled="isdisabled"></el-input>
        </el-form-item>
         <el-form-item label="昵称" prop="nickname">
          <el-input v-model="personForm.nickname" :disabled="isdisabled"></el-input>
        </el-form-item>
         <el-form-item label="性别" prop="gender">
          <el-input v-model="personForm.gender" :disabled="isdisabled"></el-input>
        </el-form-item>
         <el-form-item label="年龄" prop="age">
          <el-input v-model="personForm.age" :disabled="isdisabled"></el-input>
        </el-form-item>
          <el-form-item label="邮箱" prop="email">
          <el-input v-model="personForm.email" disabled></el-input>
        </el-form-item>
          <el-form-item label="国家" prop="country">
          <el-input v-model="personForm.country" :disabled="isdisabled"></el-input>
        </el-form-item>
          <el-form-item label="地区" prop="location">
          <el-input v-model="personForm.location" :disabled="isdisabled"></el-input>
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
    return {
      // 获取用户列表的参数对象
      isdisabled: true,
      // 添加用户的表单数据
      personForm: {
        username: '',
        nickname: '',
        gender: '',
        age: '',
        email: '',
        country: '',
        location: ''
      },
      // 添加表单的验证规则对象
      personFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请输入性别', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getpersonInfo()
  },
  methods: {
    async getpersonInfo () {
      // 获取用户信息请求
      const { data: res } = await this.axios.post('/selectUserDetail', { email: window.sessionStorage.getItem('email') })
      console.log(res)
      if (res.status !== '1') {
        return this.$message.error('获取用户信息失败')
      }
      this.$message.success('获取用户信息成功')
      this.personForm = res.data[0]
      console.log(res)
    },
    changeType () {
      this.isdisabled = !this.isdisabled
    },
    async editperson () {
      const { data: res } = await this.axios.post('/modifyUserDetail', {
        email: this.personForm.email,
        username: this.personForm.username,
        nickname: this.personForm.nickname,
        gender: this.personForm.gender,
        age: this.personForm.age,
        country: this.personForm.country,
        location: this.personForm.location
      })
      console.log(res)
      if (res.status !== '1') {
        this.$message.error('修改个人信息失败')
        this.isdisabled = !this.isdisabled
        this.getpersonInfo()
      }
      this.$message.success('修改个人信息成功')
      this.isdisabled = !this.isdisabled
      this.getpersonInfo()
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

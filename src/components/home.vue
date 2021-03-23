<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img class="logo" src="../assets/shoplogo.png" alt="" />
        <span> 音频降噪系统</span>
      </div>
      <!--头部导航栏区域-->
      <el-menu
        router :default-active="activePath"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened :collapse-transition="false"
      >
       <el-menu-item index="/welcome" @click="saveNavState('/welcome')">首页 <i class="el-icon-s-home"></i> </el-menu-item>
        <el-menu-item index="/rnn" @click="saveNavState('/rnn')" >音频降噪<i class="el-icon-setting"></i></el-menu-item>
        <el-menu-item index="/myaudio" @click="saveNavState('/myaudio')">我的音频 <i class="el-icon-document"></i> </el-menu-item>
        <el-menu-item index="/star" @click="saveNavState('/star')" >收藏夹  <i class="el-icon-star-off"></i> </el-menu-item>
        <el-submenu index="4">
        <template slot="title">语言</template>
         <el-menu-item index="/chinese" @click="saveNavState('/chinese')" >中文</el-menu-item>
         <el-menu-item index="/english" @click="saveNavState('/english')" >English</el-menu-item>
        </el-submenu>
      </el-menu>
       <!-- 用户名下拉菜单 -->
            <el-dropdown class="user-name" trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                {{username}}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <a>
                  <el-dropdown-item divided command="person" >个人中心</el-dropdown-item>
                </a>
                  <el-dropdown-item divided command="logout" >退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
    </el-header>
    <!-- 页面主体区域 -->
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activePath: '/welcome'
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
    this.username = window.sessionStorage.getItem('username')
  },
  methods: {
    // 保存链接激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
    // 用户名下拉菜单选择事件,退出登录
    handleCommand (command) {
      if (command === 'logout') {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
      if (command === 'person') {
        this.$router.push('/person')
        this.saveNavState('/person')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 17px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
    }
  }
}
.logo {
  // display: block;
  width: 120px;
  height: 40px;
  // border-radius: 50%;
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}

.user-name {
  margin-left: 1px;
  color: #fff;
  font-size: 17px;
}
</style>

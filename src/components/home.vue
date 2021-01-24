<template>
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
          <div>
              <img class="shoplogo" src="../assets/shoplogo.png" alt="">
              <span> 图书店铺管理系统</span>
          </div>
          <div>
            <!-- 用户名下拉菜单 -->
            <el-dropdown class="user-name" trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                {{username}}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <a>
                  <el-dropdown-item divided command="person">个人中心</el-dropdown-item>
                </a>
                  <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
           </div>
      </el-header>
      <!-- 页面主体区域 -->
    <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <!-- 收起展开 -->
          <div class="toggle-button" @click="toggleCollapse">|||</div>
           <!-- 侧边栏菜单区域 -->
          <el-menu :collapse="isCollapse" background-color="#333744" text-color="#fff" active-text-color="#409EFF"
          unique-opened :collapse-transition="false" router :default-active="activePath">
            <el-menu-item index="/welcome" @click="saveNavState('/welcome')">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
             <!-- 一级菜单 -->
            <el-submenu :index="1">
              <!-- 一级菜单模板 -->
              <template slot="title">
                   <!-- 图标 -->
                <i class="el-icon-s-operation"></i>
                 <!-- 文本 -->
                <span>图书管理</span>
              </template>
               <!-- 二级菜单 -->
                <el-menu-item index="/books" @click="saveNavState('/books')">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-reading"></i>
                    <!-- 文本 -->
                    <span>图书列表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="/bookcategory" @click="saveNavState('/bookcategory')">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-coin"></i>
                    <!-- 文本 -->
                    <span>图书分类</span>
                  </template>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/shop" @click="saveNavState('/shop')">
              <i class="el-icon-s-shop"></i>
              <span slot="title">店铺管理</span>
            </el-menu-item>
             <!-- 一级菜单 -->
            <el-submenu :index="2">
              <!-- 一级菜单模板 -->
              <template slot="title">
                   <!-- 图标 -->
                <i class="el-icon-s-operation"></i>
                 <!-- 文本 -->
                <span>订单管理</span>
              </template>
               <!-- 二级菜单 -->
                <el-menu-item index="/orders" @click="saveNavState('/orders')">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-reading"></i>
                    <!-- 文本 -->
                    <span>订单列表</span>
                  </template>
                </el-menu-item>
            </el-submenu>
             <!-- 一级菜单 -->
            <el-submenu :index="3">
              <!-- 一级菜单模板 -->
              <template slot="title">
                   <!-- 图标 -->
                <i class="el-icon-s-data"></i>
                 <!-- 文本 -->
                <span>数据统计</span>
              </template>
               <!-- 二级菜单 -->
                <el-menu-item index="/chart" @click="saveNavState('/chart')">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-date"></i>
                    <!-- 文本 -->
                    <span>数据报表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="/data" @click="saveNavState('/data')">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-date"></i>
                    <!-- 文本 -->
                    <span>图书排行</span>
                  </template>
                </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧内容主体 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
    this.username = window.sessionStorage.getItem('username')
  },
  methods: {
    // 点击按钮，切换菜单的折叠展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
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
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
    height: 100%;
}
.el-header {
    background-color: #373d41;
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
.shoplogo {
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

.toggle-button{
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}

.user-name {
    margin-left: 10px;
    color: #fff;
    font-size: 17px;
}
</style>

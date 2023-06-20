<template>
    <div class="title">
        <el-menu router :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="2">
                <template slot="title">笔记</template>
                <el-menu-item index="/All">所有</el-menu-item>
                <el-menu-item index="/Read">VUE</el-menu-item>
                <el-menu-item index="/Read">ELEMENT-UI</el-menu-item>
                <el-menu-item index="/Read">NODE.JS</el-menu-item>
                <el-submenu index="/Read">
                    <template slot="title">HTML</template>
                    <el-menu-item index="/Read">HTML3 </el-menu-item>
                    <el-menu-item index="/Read">HTML5</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/Write">写博客</el-menu-item>
            <el-menu-item index="/About">关于我</el-menu-item>
            <div class="block">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
            <el-button type="danger" @click.prevent="logout">退出</el-button>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            //获取用户信息到主页
            sname: localStorage.getItem('name'),
            smail: localStorage.getItem('mail'),
            stel: localStorage.getItem('tel'),
            isAuth: "",//是否保持登录状态
            activeIndex: '1',
            circleUrl: require("../assets/block.png"),//头像图片
        }
    },
    methods: {
    //当点击退出按钮，将不保存登录状态
    logout: function () {
      this.isAuth = "false";//修改登录状态
      localStorage.setItem('s', this.isAuth);
      this.$router.replace('/login');//页面跳转至登录页面
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>
.title {
    margin-left: 40px;
    font-size: 1em;
}

.el-menu-demo el-menu-item {
    font-size: 2em;
}

.el-carousel__item h3 {
    color: #050505;
    font-size: 14px;
    opacity: 0.75;
    line-height: 280px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.block {
    margin-top: 13px;
    display: flex;
    float: right;
}

button {
    display: flex;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
}
.section {
  box-align: center; 
  padding-top: 0;
  padding-bottom: 0;
  min-height: 37.5rem;
  height: 80vh;
}

header {
  position: absolute;
  margin-top: 200px;
  margin-left: 80px;
  width: 400px;
  color: white;
}
</style>
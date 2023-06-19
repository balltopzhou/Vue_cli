<template>
  <div id="bg">
    <div class="title">
      <el-menu router :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/Indexpage">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">博客</template>
          <el-menu-item index="/All">所有</el-menu-item>
          <el-menu-item index="2-1">VUE</el-menu-item>
          <el-menu-item index="2-2">ELEMENT-UI</el-menu-item>
          <el-menu-item index="2-3">NODE.JS</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">HTML</template>
            <el-menu-item index="2-4-1">HTML3 </el-menu-item>
            <el-menu-item index="2-4-2">HTML5</el-menu-item>
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
    <el-row :gutter="20">
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" :value="value2" title="浏览量"></el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-statistic title="用户男女比">
              <template slot="formatter"> 456/372 </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" decimal-separator="." :value="value1" :title="title">
              <template slot="prefix">
                <i class="el-icon-s-flag" style="color: red"></i>
              </template>
              <template slot="suffix">
                <i class="el-icon-s-flag" style="color: blue"></i>
              </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="tongji">
            <el-statistic :value="like ? 521 : 520" title="Feedback">
              <template slot="suffix">
                <span @click="like = !like" class="like">
                  <i class="el-icon-star-on" style="color:red" v-show="!!like"></i>
                  <i class="el-icon-star-off" v-show="!like"></i>
                </span>
              </template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>
    <div class="swiper" style="margin-top: 20px;">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in imglist" :key="item.id">
          <img :src="item.url" alt="" width="100%" height="350px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      
    </div>
    <div class="centerimg">
      <section class="section choose-design" id="choose-design" tabindex="0">
        <header>
          <div class="top-text">
            <h1>选择完美设计</h1>
            <p>创建符合个人风格的精美博客。我们精选了一些简单好用的模板，它们布局灵活并有数百种背景图片。您可以从中选择，也可以自己动手设计。</p>
          </div>
        </header>
      </section>

      <section class="section free-domain" id="choose-design" tabindex="0">
        <header style="margin-left: 50%;">
          <div class="top-text" >
            <h1>赚取收益</h1>
            <p>化创意为财富。Google AdSense 会自动在您的博客上显示相关的定位广告，您只需发布自己感兴趣的内容，即可赚取收益。</p>
          </div>
        </header>
      </section>


      <section class="section know-your-audience" id="choose-design" tabindex="0">
        <header>
          <div class="top-text">
            <h1>了解受众群体</h1>
            <p>利用 Blogger 内置的分析功能，了解哪些博客比较受欢迎。您可以了解受众群体来自哪里，以及他们对哪些内容感兴趣。此外，您还可以将博客直接关联到 Google Analytics（分析），进一步查看详细信息。</p>
          </div>
        </header>
      </section>

      <section class="section enjoy-yourselves" id="choose-design" tabindex="0">
        <header>
          <div class="top-text">
            <h1>留住美好记忆</h1>
            <p>保存重要时刻。利用 Blogger，您可以将成千上万的博文、照片以及更多内容妥善地存储在 Google 中。</p>
          </div>
        </header>
      </section>
      <Footer></Footer>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  name: 'Homepage',
  data() {
    return {//获取用户信息到主页
      sname: localStorage.getItem('name'),
      smail: localStorage.getItem('mail'),
      stel: localStorage.getItem('tel'),
      isAuth: "",//是否保持登录状态
      activeIndex: '1',
      circleUrl: require("../assets/block.png"),//头像图片
      imglist: [
        { id: 1, url: require("../assets/swiper/s-1.jpg") },
        { id: 2, url: require("../assets/swiper/s-2.jpg") },
        { id: 3, url: require("../assets/swiper/s-3.jpg") },
        { id: 4, url: require("../assets/swiper/s-4.jpg") },
        { id: 5, url: require("../assets/swiper/s-5.jpg") },
        { id: 6, url: require("../assets/swiper/s-6.jpg") },
      ],
      like: true,
      value1: 456,
      value2: 232,
      title: '用户数',
    };
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
  components:{
    Footer
  }
}
</script>


//css
<style scoped>
.block {
  margin-top: 13px;
  display: flex;
  float: right;
}

.title {
  margin-left: 40px;
}

button {
  display: flex;
  float: right;
  margin-right: 20px;
  margin-top: 20px;
}

.el-carousel__item h3 {
  color: #475669;
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
.choose-design {
  width: 100%;
  height: 80vh;
  background: url("../assets/block-1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.free-domain{
  width: 100%;
  height: 80vh;
  background: url("../assets/block-2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.know-your-audience{
  width: 100%;
  height: 80vh;
  background: url("../assets/block-3.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.enjoy-yourselves{
  width: 100%;
  height: 80vh;
  background: url("../assets/block-4.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>

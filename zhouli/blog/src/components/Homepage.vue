<template>
  <div id="bg">

    <div id="thediv" ref="thediv" @mouseover="clearFdAd" @mouseout="starFdAd">
      <div>
        <h2>想要学习更多vue知识吗</h2>
        <h3>快来siki学院一起探索吧</h3>
      </div>
      <span @click="close">X</span>
    </div>



    <Header style="margin: 0;"></Header>

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
import Header from '../components/Header.vue'

export default {
  name: 'Homepage',
  data() {
    return {
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
      xPos: 300,
      yPos: 200,
      step: 1,
      delay: 8,
      height: 0,
      Hoffset: 0,
      Woffset: 0,
      yon: 0,
      xon: 0,
      pause: true


    };
  },

  components:{
    Header,Footer
  },
  mounted () {
    interval = setInterval(this.changePos, 10)
  },
  methods: {
    changePos () {
      let width = document.documentElement.clientWidth
      let height = document.documentElement.clientHeight
      this.Hoffset = this.$refs.thediv.offsetHeight
      this.Woffset = this.$refs.thediv.offsetWidth
      this.$refs.thediv.style.left =
        this.xPos +
        document.body.scrollLeft +
        document.documentElement.scrollLeft +
        'px'
      this.$refs.thediv.style.top =
        this.yPos +
        document.body.scrollTop +
        document.documentElement.scrollTop +
        'px'
      if (this.yon) {
        this.yPos = this.yPos + this.step
      } else {
        this.yPos = this.yPos - this.step
      }
      if (this.yPos < 0) {
        this.yon = 1
        this.yPos = 0
      }
      if (this.yPos >= height - this.Hoffset) {
        this.yon = 0
        this.yPos = height - this.Hoffset
      }
      if (this.xon) {
        this.xPos = this.xPos + this.step
      } else {
        this.xPos = this.xPos - this.step
      }
      if (this.xPos < 0) {
        this.xon = 1
        this.xPos = 0
      }
      if (this.xPos >= width - this.Woffset) {
        this.xon = 0
        this.xPos = width - this.Woffset
      }
    },
    clearFdAd () {
      clearInterval(interval)
    },
    starFdAd () {
      interval = setInterval(this.changePos, 10)
    },
    close(){
      this.$refs.thediv.style.display='none'
    }
  }
}
</script>


//css
<style scoped>
#thediv{
  color: white;
  background-image: url('../assets/images/top-block.png');
  background-size:100%;
}
.block {
  margin-top: 13px;
  display: flex;
  float: right;
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

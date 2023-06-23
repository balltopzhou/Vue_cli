<template>
  <div class="about">

    <vue-particles
   color="#fff"
  :particleOpacity="0.7" 
  :particlesNumber="80"
  shapeType="circle"
  :particleSize="4"
  linesColor="#fff"
  :linesWidth="1"
  :lineLinked="true"
  :lineOpacity="0.8"
  :linesDistance="150"
  :moveSpeed="2"
  :hoverEffect="true"
  hoverMode="grab"
  :clickEffect="true"
  clickMode="push"
  class="lizi"
>
</vue-particles> 
    <router-view></router-view> 
      <!-- 如果想做背景图片 可以给标签一个class 直接添加背景图 -->
      <Header style="margin: 0;"></Header>
      <div class="block">
        <div class="top">
          <h2>关于我的创作时间线</h2>
        </div>
        <el-timeline>
          <div v-for="item in cardlist" :key="item.id" :color="item.color">
            <el-timeline-item placement="top" :timestamp="item.id" :color="item.color">
              <el-card class="card">
                <h4>{{ item.title }}</h4>
                <p>{{ item.info }}</p>
              </el-card>
            </el-timeline-item>
          </div>

          <div class="time">
            <h2>今天也是努力创作的一天!</h2>
            <el-calendar v-model="value">
            </el-calendar>
          </div>
        </el-timeline>
      </div>
      <Footer></Footer>
      
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "About",
  data() {
    return {
      cardlist: [
        { id: 1, title: '建立项目，开始创作', info: '完成于 2023/6/07 20:46', color: '#0083a5' },
        { id: 2, title: '登录注册页面及功能完成', info: '完成于 2023/6/12 22:46', color: '#0083a5' },
        { id: 3, title: '主页面设计编写完成', info: '完成于 2023/6/18 17:46', color: '#0083a5' },
        { id: 4, title: 'About页面编写完成', info: '完成于 2023/6/18 20:39', color: '#0083a5' },
        { id: 5, title: 'All页面完成，进入博客详情页的编写', info: '完成于 2023/6/19 15:46', color: '#0083a5' },
        { id: 6, title: 'Read页面完成，进入写博客页的编写', info: '完成于 2023/6/20 17:46', color: '#0083a5' },
      ],
      value: new Date()
    }
  },
  components: {
    Header,Footer
  },
}
</script>

<style scoped>
.about {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0px;
  background-image: url('../assets/About-block.png');

}

.lizi{
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  /* z-index: -1; */
  /* background-image:radial-gradient(#002953, #041222); //添加渐变背景颜色 */
}

.top h2 {
  padding-bottom: 20PX;
  color: white;
}

.time {
  padding-top: 40px;
}

.time h2 {
  padding-bottom: 20PX;
  color: white;
}

.block {
  padding-top: 40px;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 20%;
}

.card {
  transition: all 0.5s;
}

.card:hover {
  background-color: rgba(51, 121, 253, 0.3);
  color: white;
  transform: translate(0, -5px);
}
</style>
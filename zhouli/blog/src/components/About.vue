<template>
  <div class="about">
    <el-page-header class="topbar" @click.prevent="goBack">
    </el-page-header>
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
import Footer from '../components/Footer.vue'

export default {
  name: "About",
  data() {
    return {
      cardlist: [
        { id: 1, title: '建立项目，开始创作', info: '完成于 2023/6/07 20:46', color: '#0bbd87' },
        { id: 2, title: '登录注册页面及功能完成', info: '完成于 2023/6/12 22:46', color: '#0bbd87' },
        { id: 3, title: '主页面设计编写完成', info: '完成于 2023/6/18 17:46', color: '#0bbd87' },
        { id: 4, title: 'About页面编写完成', info: '完成于 2023/6/18 20:39', color: '#0bbd87' },
        { id: 5, title: '建立项目，开始创作', info: '完成于 2023/6/07 20:46', color: '#0bbd87' },

      ],
      value: new Date()
    }
  },
  components: {
    Footer
  },
  methods: {
      goBack() {
        this.$router.replace('/Homepage');
      }
    }
}
</script>

<style scoped>
.about {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f8e8bc;
}
.topbar{
  padding-left: 40px;
  color: white;
  font-weight: bolder;
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
  background-color: #fceeca;
  transform: translate(0, -5px);
}</style>
<template>
    <div>
        <Header></Header>
    <div class="cationar">
        <h1>所有博客尽在此页</h1>
        <el-row class="cardlist">
            <el-col :span="8" v-for="item in titlelist" :key="item.id">
                <el-card shadow="hover" class="card">
                    <img :src="item.url" class="image" >
                    <div style="padding: 14px;">
                        <span>{{ item.title }}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button" @click.prevent="look">查看全文</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <p style="color: rgb(0, 0, 0);margin-bottom: 20px;">没有你喜欢的内容吗，快来加入你的话题吧</p>
        <el-button type="primary" class="jump" @click.prevent="add">添加博客</el-button>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
    name: 'All',
    data() {
        return {
            currentDate: new Date(),
            titlelist:[
                {id:1,title:'初步认识vue',url: require("../assets/swiper/s-1.jpg")},
                {id:2,title:'什么是vuex',url: require("../assets/swiper/s-2.jpg")},
                {id:3,title:'前端html的发展史',url: require("../assets/swiper/s-3.jpg")},
                {id:4,title:'node.js的使用方法',url: require("../assets/swiper/s-4.jpg")},
                {id:5,title:'js的多种用法',url: require("../assets/swiper/s-5.jpg")},
                {id:6,title:'css的逐步发展',url: require("../assets/swiper/s-6.jpg")},
                {id:7,title:'初步认识vue',url: require("../assets/swiper/s-1.jpg")},
                {id:8,title:'什么是vuex',url: require("../assets/swiper/s-2.jpg")},
                {id:9,title:'前端html的发展史',url: require("../assets/swiper/s-3.jpg")},
                {id:10,title:'node.js的使用方法',url: require("../assets/swiper/s-4.jpg")},
                {id:11,title:'js的多种用法',url: require("../assets/swiper/s-5.jpg")},
                {id:12,title:'css的逐步发展',url: require("../assets/swiper/s-6.jpg")},
        ]
            
        };
    },
    methods: {

    look: function () {
      this.$router.replace('/Read');//页面跳转至博客详情页面
    },
    add: function () {
      this.$router.replace('/Write');//页面跳转至写博客页面
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
    components:{
    Header,Footer
  }
   
}
</script>

<style scoped>
.cationar{
    background: url("../assets/All-block.png");
    margin-top: 10px;
}
.cationar h1{
    padding-top: 20px;
    padding-bottom: 20px;
}
.card{
    width: 400px;
    height: 350px;
    left: 50%;
	top: 50%;
    margin-left: 10%;
	/* transform: translate(-50%,-50%); */
    margin-bottom: 40px;
    transition: all 0.5s;
}
.card:hover {
  background-color: rgb(255, 255, 255);
  transform: translate(0, -5px);
}
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding-top: 20px;
    float: right;
}

.image {
    width:350px;
    height:200px;
}

.clearfix:before,.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
.jump{
    margin-bottom: 20px;
}
</style>
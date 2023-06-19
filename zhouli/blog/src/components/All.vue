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
                            <el-button type="text" class="button">查看全文</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            
        </el-row>
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
                {id:1,title:'初始vue',url: require("../assets/swiper/s-1.jpg")},
                {id:2,title:'初始vue',url: require("../assets/swiper/s-2.jpg")},
                {id:3,title:'初始vue',url: require("../assets/swiper/s-3.jpg")},
                {id:4,title:'初始vue',url: require("../assets/swiper/s-4.jpg")},
                {id:5,title:'初始vue',url: require("../assets/swiper/s-5.jpg")},
                {id:6,title:'初始vue',url: require("../assets/swiper/s-6.jpg")},
                {id:1,title:'初始vue',url: require("../assets/swiper/s-1.jpg")},
                {id:2,title:'初始vue',url: require("../assets/swiper/s-2.jpg")},
                {id:3,title:'初始vue',url: require("../assets/swiper/s-3.jpg")},
                {id:4,title:'初始vue',url: require("../assets/swiper/s-4.jpg")},
                {id:5,title:'初始vue',url: require("../assets/swiper/s-5.jpg")},
                {id:6,title:'初始vue',url: require("../assets/swiper/s-6.jpg")},
        ]
            
        };
    },
    components:{
    Header,Footer
  }
   
}
</script>

<style scoped>
.cationar{
    background: url("../assets/All-block.png");
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
</style>
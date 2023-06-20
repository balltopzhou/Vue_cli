<template>
    <div>
        <Header></Header>
        <div class="wrap_w">
            <div class="content read">
                <div class="tit">初步认识Vue</div>
                <div class="des">
                    <span>2017.06.15</span>
                    <span>字数152</span>
                    <span>阅读459</span>
                    <span>评论1</span>
                    <span>喜欢5</span>
                </div>
                <div class="con">
                    <h3>1、vue是一套用于构建用户界面的渐进式JavaScript框架</h3><br />
                    渐进式——易用、灵活、高效<br />
                    易用：易于上手<br />
                    灵活：拥有强大的生态系统<br />
                    高效：文件大小20kb 加载速度快 DOM操作优化<br /><br />
                    <h3>2、基于vue实现前后端分离 双向绑定机制(MVVM)</h3> <br />
                    bootstrap是一个css框架 封装css<br />
                    vue是一个JavaScript框架 简化页面js操作 <br /><br />
                    <br />
                    <h3>3、JavaScript 框架</h3><br>
                    jQuery：大家熟知的JavaScript框架，优点是简化了DOM操作，缺点是DOM操作太频繁，影响前端性能；在前端眼里使用它仅仅是为了兼容IE6、7、8；<br />
                    Angular：Google收购的前端框架，由一群Java程序员开发，其特点是将后台的MVC模式搬到了前端并增加了模块化开发的理念，与微软合作，采用TypeScript语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如：1代->2代，除了名字，基本就是两个东西；截止发表博客时已推出了Angular6）<br />
                    React：Facebook出品，一款高性能的JS前端框架；特点是提出了新概念【虚拟DOM】用于减少真实DOM操作，在内存中模拟DOM操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一门【JSX】语言；<br />
                    Vue：一款渐进式JavaScript框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是综合了Angular（模块化）和React（虚拟DOM）的优点；<br /><br />
                    <h3>4、了解前后分离的演变史</h3><br>
                    3.1、后端为主的MVC时代<br><br>
                    为了降低开发的复杂度，以后端为出发点，比如：Struts、SpringMVC等框架的使用，就是后端的MVC时代；
                    <img src="../assets/images/code.png" width="90%">
                    发起请求到前端控制器（DispatcherServlet）<br />
                    前端控制器请求HandlerMapping查找Handler，可以根据xml配置、注解进行查找<br />
                    处理器映射器HandlerMapping向前端控制器返回Handler<br />
                    前端控制器调用处理器适配器去执行Handler<br />
                    处理器适配器去执行Handler<br />
                    Handler执行完成给适配器返回ModelAndView<br />
                    处理器适配器向前端控制器返回ModelAndView，ModelAndView是SpringMVC框架的一个底层对象，包括Model和View<br />
                    前端控制器请求视图解析器去进行视图解析，根据逻辑视图名解析成真正的视图（JSP）<br />
                    视图解析器向前端控制器返回View<br />
                    前端控制器进行视图渲染，视图渲染将模型数据（在ModelAndView对象中）填充到request域<br />
                    前端控制器向用户相应结果<br /><br />
                    <h3>优点</h3><br />
                    MVC是一个非常好的协作模式，能够有效降低代码的耦合度，从架构上能够让开发者明白代码应该写在哪里。为了让View更纯粹，还可以使用Thymeleaf、Freemarker等模板引擎，使模板里无法写入Java代码，让前后端分工更加清晰。<br /><br />
                    <h3>缺点</h3><br />
                    前端开发重度依赖开发环境，开发效率低，这种架构下，前后端协作有两种模式：
                    第一种是前端写DEMO，写好后，让后端去套模板。好处是DEMO可以本地开发，很高效。不足是还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大；
                    另一种协作模式是前端负责浏览器端的所有开发和服务器端的View层模板开发。好处是UI相关的代码都是前端去写好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。
                    前后端职责纠纷不清：模板引擎功能强大，依旧可以通过拿到的上下文变量来实现各种业务逻辑。这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码。还有一个很大的灰色地带是Controller，页面路由等功能本应该是前端最关注的，但却是由后端来实现。Controller本身与Model往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在Controller层。这些问题不能全归结于程序员的素养，否则JSP就够了。
                    对前端发挥的局限性：性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作，但由于后端框架限制，我们很难使用【Comet】、【BigPipe】等技术方案来优化性能。<br>
                    <br />
                </div>
            </div>
            <div class="content">
                <div class="clearfix comments">
                    <span class="blue_block l"></span>
                    评论<span> ( 已有{{ comments_l }}条评论 ) </span>
                </div>
                <div class="my_comment_n" v-if="!islogin">
                    <div class="login_btn">登录 以后才能发表评论</div>
                </div>
                <div class="my_comment" v-else>
                    <div class="input_area clearfix">
                        <img :src="login_info.photo">
                        <textarea placeholder="你想说什么..."></textarea>
                        <div class="send_comment">发表评论</div>
                    </div>
                </div>
                <div class="all_comments" v-if="comments_l != 0">
                    <div class="commit_item clearfix" v-for="item in comments" :key="item.id">
                        <img :src="item.photo" class="l">
                        <div class="commit_con l">
                            <div class="name">{{ item.name }}</div>
                            <div class="text">{{ item.content }}</div>
                            <div class="time">{{ item.time }}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
    data() {
        return {
            like: false,
            likenum: 7,
            islogin: true,
            login_info: {
                photo: require("../assets/images/user_photo.jpg")
            },
            comments: [
                {
                    id: 1,
                    name: "用户一",
                    photo: require("../assets/images/user_photo1.jpg"),
                    content: "这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
                    time: "2017.03.12 15:12:00"
                },
                {
                    id: 2,
                    name: "用户二",
                    photo: require("../assets/images/user_photo2.jpg"),
                    content: "这是通过纯css，扩展性强，可以随意增加减少数量，兼容性ie6",
                    time: "2017.03.12 15:12:00"
                },
                {
                    id: 3,
                    name: "用户二",
                    photo: require("../assets/images/user_photo3.jpg"),
                    content: "这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
                    time: "2017.03.12 15:12:00"
                },
                {
                    id: 4,
                    name: "用户二",
                    photo: require("../assets/images/user_photo1.jpg"),
                    content: "这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
                    time: "2017.03.12 15:12:00"
                },
                {
                    id: 5,
                    name: "用户二",
                    photo: require("../assets/images/user_photo2.jpg"),
                    content: "这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
                    time: "2017.03.12 15:12:00"
                },

            ],
            comments_l: 5
        }
    },
    methods: {
        like_handle: function () {
            if (!this.like) {
                this.like = !this.like;
            }
        }
    },
    components: {
        Header, Footer
    }
}
</script>
<style scoped>
.wrap_w {
    padding-left: 10%;
    padding-right: 10%;
}

.tit {
    font-size: 36px;
    color: #000;
    font-weight: 700;
    margin-bottom: 10px;
    padding-top: 20px
}

.read {
    text-align: left;
}

.des {
    font-size: 12px;
}

.des span {
    padding-right: 5px;
}

.con {
    font-size: 14px;
    line-height: 22px;
    padding: 20px 0
}

.con img {
    display: block;
    margin: 10px 0
}

.comments {
    text-align: left;
}

.comments span {
    color: #999;
    font-size: 12px
}

.my_comment_n {
    border: 1px solid #eee;
    margin: 20px 0;
    padding: 30px 0;
}

.login_btn {
    width: 500px;
    background-color: #eee;
    margin: 0 auto;
    font-size: 14px;
    line-height: 30px;
}

.input_area {
    position: relative;
    margin: 40px 0 20px;
    padding-left: 20px;
}

.input_area>img {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: -25px;
    left: -5px;
}

.input_area textarea {
    width: 1136px;
    height: 50px;
    padding: 20px;
    border: 1px solid #eee;
    resize: none;
    outline: none;
}

.send_comment {
    width: 100px;
    line-height: 35px;
    background-color: #007AFF;
    text-align: center;
    color: #fff;
    float: right;
    border-radius: 3px;
    cursor: pointer;
}

.input_area textarea:focus {}

.all_comments {
    text-align: left;
    padding-bottom: 20px;
}

.all_comments img {
    width: 60px;
    height: 60px;
}

.commit_con {
    padding-left: 10px;
}

.commit_item {
    margin-bottom: 20px;
    
}

.all_comments .name,
.all_comments .time {
    color: #999;
    font-size: 12px;
}

.all_comments .text {
    font-size: 14px;
    margin: 3px 0;
    width: 1100px;
    
}

.all_comments .no_co {
    margin: 30px auto 10px;
    width: 300px;
}
</style>
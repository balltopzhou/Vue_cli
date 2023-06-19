<template>
    <div id="background">
        <div class="container">
            <el-form action="">
                <div class="logintext">
                    <h2>Welcome to blogger</h2>
                    <h6>欢迎你的到来~</h6>
                </div>
                <div class="form">
                    <div class="item">
                        <!-- <label>用户名：</label> -->
                        <img src="../assets/person.png" alt="">
                        <input type="text" name="username" v-model.trim="name" placeholder="请输入用户名">
                        <!-- v-model把输入的值传输给name变量 -->
                        <br />
                    </div>
                    <div class="item">
                        <!-- <label>密码：</label> -->
                        <img src="../assets/password.png" alt="">
                        <input type="password" name="password" v-model.trim="password" placeholder="请输入密码">
                        <br />
                    </div>
                    <div class="keep">
                        <input @click="handlesave" id="yes" type="radio" value="0"><!-- 点击选中 -->
                        <label for="yes">保持登录状态</label>
                    </div>
                </div>

            </el-form>
            <el-button type="submit" @click.prevent="handlelogin">登录</el-button>
            <!-- <button  type="submit" @click.prevent="handlelogin">登录			</button> -->
            <!-- v-on点击按钮触发handlelogin方法 -->
            <el-button @click.prevent="handleregister">注册</el-button>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
            password: "",//密码
            st: "false",//false为不保存登录
        };
    },
    methods: {
        handlelogin: function () {
            if (this.name === localStorage['name'] && this.password === localStorage['password']) {
                this.$router.replace('/Homepage');//如果输入的名字以及密码正确路由跳转至个人页面
            }
            else if (this.name === '')//名字为空
            {
                alert('用户名不为空');
            }
            else if (this.password === '')//密码为空
            {
                alert('密码不为空');
            }
            else {
                alert('账号不存在，请注册后登录');//查无此号
            }
        },
        handleregister: function () {
            this.$router.replace('/register')//点击注册按钮，跳转至注册页面
        },
        //点击保持登录状态触发handlesave
        handlesave: function () {
            this.st = "true";//修改登录状态为true
            localStorage.setItem('s', this.st);
            console.log(localStorage.s);
        }
    }
};
</script>


    //css
<style scoped>
img {
    margin-left: 90px;
    margin-right: 10px;
    margin-top: -15px;
    object-fit: contain;
    width: 30px;
    height: 30px;
}

#background {
    width: 100%;
    height: 100%;
    background: url("../assets/login.png");
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.container {
    width: 560px;
    height: 400px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background: #130c4d90; */
    text-align: center;
    border-radius: 20px;
}
.item {
    color: rgb(250, 249, 249);
    margin-top: 35px;
    font-size: 20px;
    text-align: left;
}

.item label {
    float: left;
    width: 5em;
    /* margin-right: 1em; */
    text-align: right;
}

input {
    border: solid 1px #fafafc;
    /* outline: 0; */
    font: normal 13px/100% Verdana, Tahoma, sans-serif;
    border-radius: 5px;
    width: 230px;
    height: 40px;
}
.logintext {
  margin-left: -60px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
button {

    /* position: relative;
      height: 33px; */
    width: 100px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: none;
    color: rgb(0, 0, 0);
    margin-left: -60px;
    margin-right: 10px;

}

.keep {
    color: rgb(246, 245, 247);
}

.keep input {
    width: 15px;
    height: 15px;
    margin-top: 7px;
    margin-left: -140px;
    margin-right: 10px;
}
</style>
    
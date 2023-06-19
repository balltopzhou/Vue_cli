<template>
    <div id="background">
      <div id="contain">
        <div class="regitertext">
                    <h2>Regiter time</h2>
                    <h6>快来加入我们！！</h6>
                </div>
<el-form>
        <div class="form">
          <!-- <label>用户名：</label> -->
          <img src="../assets/person.png" alt="">
          <input type="text" v-model.trim="name" placeholder="请输入用户名"><br/>
        </div>
        <div class="form">
          <!-- <label>密码：</label> -->
          <img src="../assets/password.png" alt="" >
          <input type="password" v-model.trim="password" placeholder="请输入密码"><br/>
        </div>
        <div class="form">
          <!-- <label>邮箱：</label> -->
          <img src="../assets/emali.png" alt="">
          <input type="email" v-model.trim="mail" placeholder="请输入邮箱"><br/>
        </div>
        <div class="form">
          <!-- <label>手机号：</label> -->
          <img src="../assets/tem.png" alt="">
          <input type="tel" v-model.trim="tel" placeholder="请输入电话"><br/>
        </div>
        <el-button @click.prevent="handlefinish">提交</el-button>
    </el-form>
      </div>
    </div>
</template>

<script>
export default {
    name:'register',
    props: {
    msg: String
  },
  data(){
    return{
      name:"",
      password:"",
      mail:"",
      tel:""
  };
  },methods:{
  //点击完成按钮触发handlefinish
    handlefinish:function()
    {
      if(localStorage['name']===this.name)
      {
        alert("用户名已存在");//如果用户名已存在则无法注册
      }
      else if(this.name==='')
      {
        alert("用户名不能为空");
      }
      else{//将新用户信息存储到localStorage
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        localStorage.setItem('mail',this.mail);
        localStorage.setItem('tel',this.tel);
        localStorage.setItem('s',"false");
        alert("注册成功");
        this.$router.replace('/Login');//完成注册后跳转至登录页面
      }
    }
  }
};
</script>


//css
<style scoped>
img {
    object-fit:contain;
    width: 30px;
    height: 30px;
}
#background{
  width: 100%;
    height: 100%;
    background: url("../assets/login.png");
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}
#contain{
  width: 580px;
  height: 560px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* background:#f399ff90; */
  text-align: center;
  border-radius: 20px;
}
.regitertext {
  margin-left: 20px;
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.form{
  color: white;
  margin-left: 28%;
  margin-top: 60px;
  font-size: 20px;
  text-align: left;
}
label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #fcfdfd;
  /* outline: 0; */
  border-radius: 5px;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 20px;
  background:white;

  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px; */
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  /* position: relative;
  height: 33px; */
  width: 150px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: rgb(0, 0, 0);
  margin-left: 40px;
}
</style>

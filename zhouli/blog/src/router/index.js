import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../components/Homepage' //主页
import Login from "../components/Login" //登陆
import Register from "../components/Register"; //注册
import Indexpage from '../components/Indexpage'//首页
import About from '../components/About'//关于我
import Write from '../components/Write'//写博客
import All from '../components/All'

Vue.use(VueRouter)

const routes = [
  {
  //这里需要将根目录默认为Home，方便实现用户在保持登录 状态下再次登录时直接跳转至主页面
    path:"/",
    redirect:{
      name:"Homepage"
    }
  },
  {
    path: "/Homepage",
    name: "Homepage",
    component: Homepage,
   
  },
  {
    name: 'Indexpage',
    path: '/Indexpage',
    component: Indexpage
},
{
  name: 'All',
  path: '/All',
  component: All
},
{
  name: 'Write',
  path: '/Write',
  component: Write
},
{
  name: 'About',
  path: '/About',
  component: About
},
  {
    path: "/login",
    name: "login",
    component:Login
    
  }
  ,{
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  mode:'history',
  routes
});

router.beforeEach((to,from,next)=>
{
  //登录及注册页面可以直接进入,而主页面需要分情况
  if(to.path=='/login')
  {
    next();
    console.log(localStorage.s);
  }
  else if(to.path=='/register')
  {
    next();
  }
  else
  {
    if(from.path=="/login")//从登录页面可以直接通过登录进入主页面
    {
      next();
    }
    else{
    	//从/进入,如果登录状态是true，则直接next进入主页面
	      if(localStorage.s === "true")
		    {
		      next();
		      console.log(localStorage['s'])
		    }
	    else {//如果登录状态是false，那么跳转至登录页面,需要登录才能进入主页面
	      next('/login');
	      console.log("需要登录")
	    }
    }
  }
})
export default router;


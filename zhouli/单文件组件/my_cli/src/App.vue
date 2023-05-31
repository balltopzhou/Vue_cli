<template>
  <div class="main">
    <img src="./assets/cqwu.png" style="width:80px; height:80px; margin-left: 50%;">
			<!-- 头部组件 -->
      <Header :addTodo="addTodo"></Header>
      <!-- 数据组件 -->
      <List :todo="todo" :delTodo="delTodo" :editDone="editDone"></List>
      <!-- 底部组件 -->
      <Footer :todo="todo" :editAll="editAll" :delAll="delAll"></Footer>
		</div>
</template>
 
<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
 
export default {
  name: 'App',
  data(){
    return {
      todo:[
        {id:1,name:'7:00起床',done:false},
        {id:2,name:'8:00接见小张',done:false},
        {id:3,name:'9:00喝茶',done:false},
        {id:4,name: '10:00活动活动',done:true},
      ]
    }
  },
  methods:{
    addTodo(name){
      const item={id:new Date().getTime(),name,done:false};
      this.todo.unshift(item);
      console.log('app',item);
    },
    delTodo(id){
      this.todo=this.todo.filter((item)=>{
        return item.id!=id;
      })
    },
    //修改状态
    editDone(id){
			this.todo.forEach((item)=>{
				if(item.id==id){
					item.done = !item.done;
				}
			})
		},
    //全选/全不选
    editAll(checked){
      this.todo.forEach((item)=>{
        item.done=checked;
      })
    },
    //清除所有已完成任务
    delAll(){
      this.todo=this.todo.filter((item)=>{
        return item.done!=true;
      })
    }
  },
  components:{
    Header,
    List,
    Footer
},
  
}
</script>
 
<style>
*{
	margin: 0px;
	padding: 0px;
}
li{
	list-style: none;
}
.main{
	width: 600px;
	margin: auto;
}
.btn{
	 position: absolute;
	 right: 0px;
	 background: red;
	 color: #fff;
	 width: 90px;
	 height: 33px;
	 border: none;
	 border-radius: 5px;
	 cursor: pointer;
	 display:none;
}
 
 
 
</style>
<template>
    <div class="list">
		<ul>
			<Item v-for="item in todo" :key="item.id" :item="item" :delTodo="delTodo" :editDone='editDone'></Item>
		</ul>
	</div>
</template>
 
<script>
import Item from '../components/Item'
 
export default{
    name:'List',
	props:['todo','delTodo','editDone'],
	//测试是否拿到了todo数组的值
	mounted(){
		//console.log(this.todo);
	},
	components:{
        Item,
    },
}
</script>
 
<style>
/* list样式 */
.list{
	border: 1px solid #999999;
	padding: 15px;
	margin-top: 15px;
}
.list li{
	height: 40px;line-height: 40px;
	color: #060606;
	border-bottom: 1px solid #999999;
	position: relative;
}
.list li .btn{
		 top:2px;
}
 
.list li:hover .btn{
	display: block;
}
 
</style>
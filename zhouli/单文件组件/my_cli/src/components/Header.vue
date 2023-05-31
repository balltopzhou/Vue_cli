<template>
    <div class="header">
		<input type="text" placeholder="输入你的项目名称，按回车键确认" @keyup.enter="pressAdd"/>
	</div>
</template>
 
<script>
export default{
    name:'Header',
	props:['addTodo'],
	methods:{
		pressAdd(e){
			this.addTodo(e.target.value);
			console.log('111');
		}
	},
}
</script>
 
<style >
/* 头部文件 */
.header{
	border: 1px solid #999999;
	padding: 15px;
}
.header input{
	width: 100%;
	height: 40px;
	line-height: 40px;
}
</style>
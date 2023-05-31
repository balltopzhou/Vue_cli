<template>
    <div class="footer">
		<input type="checkbox" :checked="checkall" @change="changeAll"/> 已完成({{alldone}}) / 总任务({{alltodo}})	
		<input type="button" value="清除所有已完成任务" class="btn" @click="pressDelAll"/>
	</div>
</template>
 
<script>
export default{
    name:'Footer',
	props:['todo','editAll','delAll'],
	computed:{
		alldone(){
			return this.todo.reduce((total,current)=>{
				return total+(current.done?1:0)
			},0);
		},
		alltodo(){
			return this.todo.length;
		},
		checkall(){
			return this.alldone!=0 && this.alltodo==this.alldone;
		}
	},
	methods:{
		changeAll(e){
			this.editAll(e.target.checked);
		},
		pressDelAll(){
			this.delAll();
		}
	}
}
 
</script>
 
<style >
/* 底部 */
.footer{
	border: 1px solid #999999;
	padding: 15px;
	margin-top: 15px;
	position: relative;
}
.footer .btn{
	display: block;
	padding: 10px 20px;
	width: auto;
	height: auto;
	padding-bottom: 9px;
	top:6px;
	right: 5px;
}
</style>
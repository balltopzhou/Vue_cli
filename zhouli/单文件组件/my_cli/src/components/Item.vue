<template>
    <div>
        <li><input type="checkbox" v-model="changedone" />{{item.name}}<input type="button" value="删除" class="btn" @click="pressDel(item.id)"/></li>
    </div>
</template>
 
<script>
export default {
    name:'Item',
    props:['item','delTodo','editDone'],
    methods:{
        pressDel(id){
            this.delTodo(id);//调用父组件回调函数 并传递id
        }
    },
    computed:{
        changedone:{
            get(){
                // return true;
                return this.item.done;
            },
            set(done){
                console.log(done);
                this.editDone(this.item.id);
            }
        }
    }
}
</script>
 
<style scoped>
 
</style>
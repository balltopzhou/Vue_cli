<template>
   <div>
                <h2> 班级信息</h2>
        <h2>班级姓名：{{classesName}}</h2>
        <hr width="80%">
       <stu></stu>
       <stu></stu>
        </div >
</template>

<script>
export default {
    name:"Class",
    data: function () {
                return {
                    classesName: '软件工程1班',

                }
            }

}
</script>

<style>

</style>
<template>
    <div class="demo">
        <h2>学生信息</h2>
        <h2>学生姓名：{{ stuName }}</h2>
        <h2>学生年龄:{{ age }}</h2>
    </div>
</template>

<script>
export default {
    name: "Student",
    data: function () {
        return {
            stuName: '张三',
            age: 18
        }
    },
    methods: {
        showDom() {
            console.log(this.stuName)
        }
    }

}
</script>

<style>
.demo {
    background-color: aqua;
}
</style>

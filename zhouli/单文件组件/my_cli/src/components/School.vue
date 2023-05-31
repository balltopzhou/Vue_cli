<template>
    <div>
        <h2>学校信息</h2>
        <h2>学校姓名：{{ schoolName }}</h2>
        <h2>学校地址:{{ schoolAddress }}</h2>
    </div>
</template>

<script>
export default {
    name:"School",
    data: function () {
                return {
                    schoolName: '重庆物理学院',
                    schoolAddress: '#重庆永川区红河大道319#',
                }
            }

}
</script>

<style></style>
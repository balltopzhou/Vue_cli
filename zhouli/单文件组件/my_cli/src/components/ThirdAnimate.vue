<template>
    <div>
      <button @click="isShow = !isShow">进场/离开</button>
      <!-- appear 是:apper="true" 的简写形式 -->
      <transition
        name="animate__animated animate__bounce"
        appear
        enter-active-class="animate__heartBeat"
        leave-active-class="animate__backOutDown"
      >
        <h1 v-show="isShow">Vue脚手架动画呈现一个节点</h1>
      </transition>
    </div>
  </template>
   
  <script>
  import "animate.css";
  export default {
    name: "ThirdAnimate",
    data() {
      return {
        isShow: true,
      };
    },
  };
  </script>
   
  <style scoped>
  h1 {
    text-align: centerp;
    height: 100px;
    background-color: rgb(49, 52, 216);
  }
  </style>
<template>
    <div>
      <button @click="isShow = !isShow">进场/离开</button>
      <!-- appear 是:apper="true" 的简写形式 -->
      <transition name="test1" appear> 
        <h1 v-show="isShow">Vue脚手架动画呈现一个节点</h1>
      </transition>
    </div>
  </template>
   
  <script>
  export default {
    name: "Child",
    data() {
      return {
        isShow: true,
      };
    },
  };
  </script>
   
  <style scoped>
  h1 {
    height: 100px;
    text-align: center;
    background-color: rgb(9, 164, 102);
  }
  .test1-enter-active {
    animation: hello 0.5s linear;
  }
  .test1-leave-active {
    animation: hello 0.5s linear reverse;
  }
   
  @keyframes hello {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  </style>
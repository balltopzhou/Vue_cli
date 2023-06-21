<template>
  <div class="top">
    <Header style="margin: 0;"></Header>
    <div id="add-blog">

      <h1 class="showtit">添加博客</h1><br />
      <hr>
      <form v-if="!submited"><br />
        <p>博客标题</p><br />
        <input type="text" name="" id="" value="" v-model="blog.title" required="" /><br />
        <p>博客内容</p><br />
        <mavon-editor v-model='blog.preview' :ishljs="true" @change='updateDoc'></mavon-editor>
        <div id="checkboxes">
          <label for="Vue.js">Vue.js</label>
          <input type="checkbox" name="" id="Vue.js" value="Vue.js" v-model="blog.categories" />
          <label for="Node.js">Node.js</label>
          <input type="checkbox" name="" id="Node.js" value="Node.js" v-model="blog.categories" />
          <label for="React.js">React.js</label>
          <input type="checkbox" name="" id="React.js" value="React.js" v-model="blog.categories" />
          <label for="Angular4">Angular4</label>
          <input type="checkbox" name="" id="Angular4" value="Angular4" v-model="blog.categories" />
        </div><br />
        <p>作者：</p><br />
        <input type="text" name="" id="" value="" v-model="blog.author" /><br />
        <el-button class="add" type="primary" @click.prevent="adding">添加博客</el-button>

      </form>



      <div id="preview">
        <h2 style="display: flex;">博客预览</h2><br />
        <br />
        <p>博客标题：{{ blog.title }}</p><br />
        <p>作者：{{ blog.author }}</p><br />
        <el-tag v-for="(item, index) in blog.categories" :key="index">{{ item }}</el-tag>
        <hr class="ad" noshade color="#CCCCCC">
        <p v-html="blog.content"></p>



      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'Wirte',
  components: {
    Header, Footer, mavonEditor
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
        preview: "",
        time: ""
      },
      submited: false,

    }
  },
  methods: {
    post() {
      this.blog.time = this.getNowFormatDate()
      this.$axios.post("https://myblog-9d6a6-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        this.blog)
        .then((res) => {
          console.log(res);
          this.submited = true;
          this.$Message['success']({
            background: true,
            content: '发布成功'
          });
        })
    },
    updateDoc(value, render) {
      this.blog.content = render;
    },


    adding: function () {
      this.$router.replace('/All');//页面跳转至所有博客页面

    },
  }
}
</script>

<style scoped>
.top {
  background: url("../assets/All-block.png");
}

#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 80%;
  padding: 20px;
}

label {
  display: block;
  margin-top: 20px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

input[type="checkbox"] {

  width: 20px;
  margin-right: 50px;
  margin-top: 20px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes input {
  display: inline-block;
  margin-left: 10px;
}

.add {
  margin-top: 10px;
  font-size: 18px;
  width: auto;
  padding: 10px;
  height: auto;
  border-radius: 15px;

}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h2 {
  margin-top: 10px;
}

.ad {
  margin: 5px 0;
}

p {
  display: flex;

}
</style>
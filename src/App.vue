<!-- use dispatch to call fetchPosts actions from store -->

<template>
  <div id="app">
    <PostForm/>
    <h1>Posts count: {{postsCount}}</h1>
    <div class="post" v-for="post in validPost" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import PostForm from "./components/PostForm";

export default {
  name: 'VuexStart',
  computed: mapGetters(['validPost', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  components:{
    PostForm
  },
  async mounted() {
    await this.fetchPosts(9)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid cornflowerblue;
  margin: 5px auto;
  padding: 15px;
  color: beige;
  background-color: dodgerblue;
}
</style>

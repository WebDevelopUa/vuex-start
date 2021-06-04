<!-- use dispatch to call fetchPosts actions from store -->

<template>
  <div id="app">
    <h1>Posts count: {{postsCount}}</h1>
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'VuexStart',
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    await this.fetchPosts(3)
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
  color: beige;
  background-color: dodgerblue;
}
</style>

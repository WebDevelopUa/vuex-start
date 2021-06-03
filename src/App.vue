<template>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Vuex start',
  data() {
    return {posts: []}
  },
  async mounted() {
    const res = await fetch('https://stream-json-server.herokuapp.com/posts')
    this.posts = await res.json()
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

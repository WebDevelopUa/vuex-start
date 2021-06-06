<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Enter Title" v-model="title"/>
    <input type="text" placeholder="Enter Body Text" v-model="body"/>
    <button type="submit">Add new post</button>
  </form>
</template>

<script>

import {mapActions} from "vuex"

export default {
  name: "PostForm",
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {

    // using action to create post on remote JSON server
    ...mapActions(['addPost']),
    onSubmit() {
      this.addPost({
            title: this.title,
            body: this.body
          }
      )
      this.title = this.body = ''
    }


    // using mutation to create post to App state
    // ...mapMutations(['createPost']),
    // onSubmit() {
    //   this.createPost({
    //     title: this.title,
    //     body: this.body,
    //     id: Date.now()
    //   })
    //   this.title = this.body = ''
    // }


  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid dodgerblue;
  padding: 10px;
  margin-bottom: 10px;
}

input:hover,
input:focus,
input:active {
  display: block;
  width: 100%;
  border: 1px solid green;
  border-radius: unset;
  padding: 10px;
  margin-bottom: 10px;
}

input:focus-visible {
  background-color: antiquewhite;
  outline: none;
}

button {
  border: 2px solid dodgerblue;
  color: dodgerblue;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}


button:hover {
  background-color: dodgerblue;
  color: white;
}
</style>

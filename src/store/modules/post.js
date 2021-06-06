/**
 * App logic for Posts
 * actions can use async methods
 * mutations can use sync methods
 * state changes through mutations (mutations - changes state)
 * apply mutation through context (ctx.commit()) in actions
 */

const baseUrl = `https://json-server-posts.herokuapp.com/posts`;

export default {
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(`${baseUrl}?_limit=${limit}`);
      const posts = await res.json();

      ctx.commit("fetchPosts", posts);
      console.log(`All Posts are Fetched!`);
    },
    async addPost(ctx, { title, body }) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
        }),
      };
      const response = await fetch(baseUrl, requestOptions).then((response) =>
        response.json()
      );

      ctx.commit("createPost", response);

      console.log(
        `New Post with title: "${title}" | body: "${body}" is Created!`
      );
    },
  },
  mutations: {
    fetchPosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    validPost(state) {
      return state.posts.filter((post) => post.title && post.body);
    },
    allPosts(state) {
      console.log(`All posts state:`);
      console.log(state.posts);
      return state.posts;
    },
    postsCount(state, getters) {
      console.log(`Valid posts count: ${getters.validPost.length}`);
      return getters.validPost.length;
    },
  },
};

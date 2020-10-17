<template>
  <Layout>
    <div class="return-link">
      <g-link to="/posts">Go back to the list of posts</g-link>
    </div>
    <div class="post-container">
      <p class="title has-text-weight-bold post-title">{{ $page.post.name }}</p>
      <vue-markdown>
        {{ $page.post.content }}
      </vue-markdown>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
    };
  },
};
</script>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    name
    date
    image
    content
  }
}
</page-query>

<style scoped>
.return-link {
  height: 10px;
  margin-bottom: 10px;
}
.post-container {
  height: calc(100% - 10px - 10px);
  overflow: scroll;
}
.post-title {
  margin-bottom: 0.5rem;
}
</style>

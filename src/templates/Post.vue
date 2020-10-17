<template>
  <Layout>
    <g-link to="/posts">Go back to the list of posts</g-link>
    <h1 class="title has-text-weight-bold">{{ $page.post.name }}</h1>
    <div>
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

<style>
.posts {
  background-size: cover;
}
.icon-and-text {
  display: flex;
  align-items: center;
}
</style>

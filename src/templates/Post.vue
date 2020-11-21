<template>
  <Layout>
    <section class="section">
      <!-- <div class="container"> -->
        <div class="post-container">
          <div class="return-link">
            <g-link to="/posts">Go back to the list of posts</g-link>
          </div>
          <p class="title has-text-weight-bold post-title is-primary">{{ $page.post.name }}</p>
          <vue-markdown>
            {{ $page.post.content }}
          </vue-markdown>
        </div>
      <!-- </div> -->
    </section>
  </Layout>
</template>

<script>
export default {
  name: "post",
  data() {
    return {};
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
.post-container {
  height: 100%;
  /* overflow: scroll; */
}
.return-link {
  height: 10px;
  margin-bottom: 10px;
}
.post-title {
  margin-bottom: 0.5rem;
}
.post-container img {
  max-width: 40%;
  display: block;
  margin: auto;
  border: 1px solid black;
}
</style>

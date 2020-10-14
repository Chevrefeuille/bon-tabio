<template>
  <Layout>
    <g-link to="/posts">Go back to the list of posts</g-link>
    <h1 class="title has-text-weight-bold">{{ $page.post.name }}</h1>
    <div v-for="(section, i) in $page.post.sections" :key="i">
      {{ section.content }}
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
    sections {
      content
      image
    }
  }
}
</page-query>

<style>
.posts {
  background-image: url("../assets/image_6.jpg");
  background-size: cover;
}
.icon-and-text {
  display: flex;
  align-items: center;
}
</style>

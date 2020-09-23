<template>
  <Layout>
    <!-- <img src="../assets/image_1.jpg"> -->
    <!-- <section
      class="hero is-fullheight recipes"
    >-->
    <div class="recipe-main-container">
      <div class="columns is-multiline is-mobile is-centered recipe-grid">
        <div class="column is-4" v-for="edge in $page.allRecipe.edges" :key="edge.node.id">
          <article class="tile is-child box">
            <p class="title">
              <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
            </p>
            <figure class="image is-square">
              <img :src="edge.node.image" />
            </figure>
          </article>
        </div>
      </div>
      <Pager :info="$page.allRecipe.pageInfo"/>
    </div>
    <!-- </section> -->
  </Layout>
</template>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
};
</script>

<page-query>
query ($page: Int) {
  allRecipe(perPage: 9, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        name
        image
      }
    }
  }
}
</page-query>

<style scoped>
img {
  object-fit: cover;
}

.recipe-main-container {
  background-image: url("../assets/image_9.jpg");
  background-size: contain;
  padding-left: 10%;
  padding-right: 10%;
}
</style>


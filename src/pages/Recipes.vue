<template>
  <Layout>
    <div class="recipes-main-container">
      <div class="columns is-multiline is-mobile recipes-grid">
        <div
          class="column is-3 recipe"
          v-for="edge in $page.allRecipe.edges"
          :key="edge.node.id"
        >
          <article class="box">
            <p class="title is-5 recipe-title">
              <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
            </p>
            <figure class="image is-2by1">
              <img :src="edge.node.image" />
            </figure>
          </article>
        </div>
      </div>
      <div class="pager">
        <Pager :info="$page.allRecipe.pageInfo" />
      </div>
    </div>
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
  allRecipe(perPage: 12, page: $page) @paginate {
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
.recipes-main-container {
  /* background-image: url("../assets/image_9.jpg"); */
  height: 100%;
  /* overflow: scroll; */
  background-size: contain;
  padding-left: 10%;
  padding-right: 10%;
}

.recipes-grid {
  margin-top: 2px;
  height: 90%;
}

.recipe {
  height: 33%;
  overflow: hidden;
  /* margin: 0 0 0 0; */
}

.recipe-title {
  margin-bottom: 0.5rem;
}

.pager {
  height: 10%;
}

.box {
  height: 100%;
  overflow: hidden;
}
</style>


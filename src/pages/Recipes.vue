<template>
  <Layout>
    <div class="recipes-main-container">
      <div class="columns is-multiline is-mobile recipes-grid">
        <div
          class="column is-4 recipe"
          v-for="edge in $page.allRecipe.edges"
          :key="edge.node.id"
        >
          <RecipeCard
            :recipeImage="edge.node.image"
            :recipeName="edge.node.name"
            :recipePath="edge.node.path"
          ></RecipeCard>
        </div>
      </div>
      <div class="pager">
        <Pager :info="$page.allRecipe.pageInfo" />
      </div>
    </div>
  </Layout>
</template>

<script>
import RecipeCard from "~/components/RecipeCard.vue";
import { Pager } from "gridsome";

export default {
  components: {
    RecipeCard,
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
.recipes-main-container {
  height: 100%;
  /* overflow: scroll; */
  background-size: contain;
  padding-left: 10%;
  padding-right: 10%;
}

.recipes-grid {
  margin-bottom: 0px;
  height: 90%;
}

.recipe {
  height: 33%;
  overflow: hidden;
  /* margin: 0 0 0 0; */
}

.pager {
  height: 10%;
}
</style>


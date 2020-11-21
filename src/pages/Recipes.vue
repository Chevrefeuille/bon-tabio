<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile">
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
    </section>
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


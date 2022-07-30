<template>
  <Layout>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <p class="title">
          Medium hero
        </p>
        <p class="subtitle">
          Medium subtitle
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column is-4 recipe"
            v-for="recipe in recipes"
            :key="recipe.id"
          >
            <RecipeCard
              :recipeImage="recipe.image"
              :recipeName="recipe.name"
              :recipePath="recipe.path"
            ></RecipeCard>
          </div>
        </div>
        <div class="pager">
          <Pagination
            :ressourceName="'recipes'"
            :perPage="9"
            :ressourceData="$page.recipes"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import RecipeCard from "~/components/RecipeCard.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    RecipeCard,
    Pagination,
  },
  computed: {
    recipes() {
      return this.$page.recipes.edges.map(({ node }) => node);
    },
  },
};
</script>

<page-query>
query ($page: Int) {
  recipes: allRecipe(perPage: 9, page: $page) @paginate {
    totalCount
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


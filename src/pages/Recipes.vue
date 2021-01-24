<template>
  <Layout>
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
          <b-pagination
            :total="$page.recipes.totalCount"
            :current="currentPage"
            :per-page="3"
          >
            <template #default="props">
              <b-pagination-button
                :page="props.page"
                :id="props.page.number"
                tag="router-link"
                :to="`/recipes/${sanitize(props.page.number)}`"
              >
              </b-pagination-button>
            </template>

            <template #previous="props">
              <b-pagination-button
                :page="props.page"
                tag="router-link"
                :to="`/recipes/${sanitize(props.page.number)}`"
              >
              </b-pagination-button>
            </template>

            <template #next="props">
              <b-pagination-button
                :page="props.page"
                tag="router-link"
                :to="`/recipes/${sanitize(props.page.number)}`"
              >
              </b-pagination-button>
            </template>
          </b-pagination>
          <!-- <b-pagination
            
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
          >
          </b-pagination> -->
        </div>
      </div>
      <pagination/>
    </section>
  </Layout>
</template>

<script>
import RecipeCard from "~/components/RecipeCard.vue";
import { Pager } from "gridsome";
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    RecipeCard,
    Pager,
    Pagination
  },
  computed: {
    currentPage() {
      return this.$page.recipes.pageInfo.currentPage;
    },
    recipes() {
      return this.$page.recipes.edges.map(({ node }) => node);
    },
  },
  methods: {
    // because recipes/1 gives a 404
    sanitize(pageID) {
      if (pageID == 1) {
        return '';
      }
      return pageID;
    }
  }
};
</script>

<page-query>
query ($page: Int) {
  recipes: allRecipe(perPage: 3, page: $page) @paginate {
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


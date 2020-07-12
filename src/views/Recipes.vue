<template>
  <div class="recipes">
    <h1>This is our recipe page</h1>
    <!-- <div class="ingredients">
      Ingredients
      <li>
        <ul v-for="(ingredient, i) in recipes[0].ingredients" :key="i">
          {{ ingredient.name }} -- {{ ingredient.quantity }}
        </ul>
      </li>
    </div>
    <div class="steps">
      Steps
      <li>
        <ul v-for="(step, i) in recipes[0].steps" :key="i">
          {{ step.name }} -- {{ step.action }}
        </ul>
      </li>
    </div> -->
    <div class="columns is-multiline is-mobile">
      <div class="column is-one-third" v-for="(recipe, i) in recipes" :key="i">
        <article class="tile is-child box">
          <p class="title">{{ recipe.name }}</p>
          <figure class="image is-4by3">
            <img :src="recipe.image">
          </figure>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import recipes from '../assets/recipes/recipes.json'

export default {
  name: 'Recipes',
  data() {
    return {
      recipes: recipes.recipes
    }
  }
}
</script>

<style scoped>
.recipes {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
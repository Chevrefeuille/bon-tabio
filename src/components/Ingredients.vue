<template>
  <div class="ingredients">
    <h3>Ingredients</h3>
    <ul class="ingredients">
      <li
        v-for="(ingredient, i) in $page.recipe.ingredients"
        :key="i"
      >{{ ingredient.name }} : {{ ingredient.quantity }} {{ ingredient.unit }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  data() {
    return {
      quantity: 1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

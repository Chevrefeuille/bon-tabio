<template>
  <Layout>
    <g-link to="/recipes">Go back to the list of recipes</g-link>
    <h2>{{ $page.recipe.name }}</h2>
    <div class="ingredients">
      Ingredients
      <div
        v-for="(ingredient, i) in $page.recipe.ingredients"
        :key="i"
      >{{ ingredient.name }} :-> {{ ingredient.quantity }}</div>
    </div>
    <div class="steps">
      Steps
      <div
        v-for="(step, i) in $page.recipe.steps"
        :key="i"
      >{{ step.name }} : {{ step.action }}</div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  recipe(id: $id) {
    name
    image
    ingredients {
      name
      quantity
    }
    steps {
      name
      action
    }
  }
}
</page-query>
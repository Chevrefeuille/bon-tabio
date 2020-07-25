<template>
  <Layout>
    <h2>{{ $page.recipe.name }}</h2>
    <div class="ingredients">
      <div
        v-for="(ingredient, i) in $page.recipe.ingredients"
        :key="i"
      >{{ ingredient.name }} : {{ ingredient.quantity }}</div>
    </div>
    <div class="steps">
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
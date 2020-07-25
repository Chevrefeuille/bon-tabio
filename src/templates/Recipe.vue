<template>
  <Layout>
    <div class="ingredients">
      {{ $page.recipe.name }}
    </div>
    <div class="steps">
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
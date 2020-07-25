<template>
  <Layout>
    <div>
      {{ $page.recipe.data[0].name }}
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  recipe(id: $id) {
    data {name}
  }
}
</page-query>
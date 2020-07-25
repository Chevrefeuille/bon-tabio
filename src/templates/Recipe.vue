<template>
  <div>
   {{ $page.recipe.data[0].name }}
  </div>
</template>

<page-query>
query ($id: ID!) {
  recipe(id: $id) {
    data {name}
  }
}
</page-query>
<template>
  <Layout>
    <div>
      <div v-for="edge in $page.allRecipe.edges" :key="edge.node.id">
        <h2>{{ edge.node.data[0].name }}</h2>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allRecipe {
    edges {
      node {
        id
        data {
          name
        }
      }
    }
  }
}
</page-query>
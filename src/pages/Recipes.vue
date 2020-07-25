<template>
  <Layout>
    <div>
      <div v-for="edge in $page.allRecipe.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.data[0].name }}</g-link>
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
        path
        data {
          name
        }
      }
    }
  }
}
</page-query>
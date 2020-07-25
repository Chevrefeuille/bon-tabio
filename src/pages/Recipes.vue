<template>
  <Layout>
    <div>
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-third" v-for="edge in $page.allRecipe.edges" :key="edge.node.id">
          <article class="tile is-child box">
            <p class="title"><g-link :to="edge.node.path">{{ edge.node.data[0].name }}</g-link></p>
            <figure class="image is-4by3">
              <img :src="edge.node.data[0].image">
            </figure>
          </article>
        </div>
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
          image
        }
      }
    }
  }
}
</page-query>
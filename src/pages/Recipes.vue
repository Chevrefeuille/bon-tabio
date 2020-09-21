<template>
  <Layout>
    <!-- <img src="../assets/image_1.jpg"> -->
    <!-- <section
      class="hero is-fullheight recipes"
    > -->
      <div class="columns is-multiline is-mobile is-centered recipes">
        <div class="column is-1"></div>
        <div class="column is-3" v-for="edge in $page.allRecipe.edges" :key="edge.node.id">
          <article class="tile is-child box">
            <p class="title">
              <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
            </p>
            <figure class="image is-square">
              <img :src="edge.node.image" />
            </figure>
          </article>
        </div>
        <div class="column is-1"></div>
      </div>
    <!-- </section> -->
  </Layout>
</template>
<page-query>
query {
  allRecipe {
    edges {
      node {
        id
        path
        name
        image
      }
    }
  }
}
</page-query>

<style scoped>
img {
  object-fit: cover;
}

.recipes {
  background-image: url('../assets/image_9.jpg');
  background-size: contain;
}
</style>


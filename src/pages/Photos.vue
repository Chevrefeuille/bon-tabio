<template>
  <Layout>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="tile is-ancestor is-vertical is-parent">
              <div
                v-for="edge in imagesSlice(3, 1)"
                :key="edge.node.id"
                class="tile is-child box"
              >
                <figure class="image" :class="[getRandomImageSizeClass()]">
                  <img :src="edge.node.image" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="tile is-ancestor is-vertical is-parent">
              <div
                v-for="edge in imagesSlice(3, 2)"
                :key="edge.node.id"
                class="tile is-child box"
              >
                <figure class="image" :class="[getRandomImageSizeClass()]">
                  <img :src="edge.node.image" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="tile is-ancestor is-vertical is-parent">
              <div
                v-for="edge in imagesSlice(3, 3)"
                :key="edge.node.id"
                class="tile is-child box"
              >
                <figure class="image" :class="[getRandomImageSizeClass()]">
                  <img :src="edge.node.image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="column is-8 post"
      v-for="edge in $page.allPhotos.edges"
      :key="edge.node.id"
    >
      <img :src="edge.node.image" />
    </div> -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  computed: {
    numberOfImages() {
      return this.$page.allPhotos.edges.length;
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomImageSizeClass() {
      const randomInt = this.getRandomInt(0, 4);
      switch (randomInt) {
        case 0:
          return "is-square";
          break;
        case 1:
          return "is-4by3";
          break;
        case 2:
          return "is-3by4";
          break;
        case 3:
          return "is-2by3";
          break;
        case 4:
          return "is-3by2";
          break;
      }
    },
    imagesSlice(n, i) {
      const start = (i - 1) * Math.floor(this.numberOfImages / n);
      let end;
      if (i < n) {
        end = i * Math.floor(this.numberOfImages / n);
      } else {
        end = this.numberOfImages;
      }
      console.log(start, end);
      return this.$page.allPhotos.edges.slice(start, end);
    }
  },
};
</script>

<page-query>
query {
  allPhotos {
    edges {
      node {
        id
        name
        date
        description
        image
      }
    }
  }
}
</page-query>

<style>
img {
  object-fit: cover;
}
</style>

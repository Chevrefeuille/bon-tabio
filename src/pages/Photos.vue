<template>
  <Layout>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="tile is-ancestor is-vertical is-parent">
              <div
                v-for="image in imagesSlice(3, 1)"
                :key="image.public_id"
                class="tile is-child box image-box"
              >
                <figure class="image" :class="[getRandomImageSizeClass()]">
                  <img :src="image.secure_url" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="tile is-ancestor is-vertical is-parent">
              <div
                v-for="image in imagesSlice(3, 2)"
                :key="image.public_id"
                class="tile is-child box image-box"
              >
                <figure class="image" :class="[getRandomImageSizeClass()]">
                  <img :src="image.secure_url" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="tile is-ancestor is-vertical is-parent">
              <div
                v-for="image in imagesSlice(3, 3)"
                :key="image.public_id"
                class="tile is-child box image-box"
              >
                <figure class="image" :class="[getRandomImageSizeClass()]">
                  <img :src="image.secure_url" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  computed: {
    images() {
      return this.$page.images.edges.map(({ node }) => node);
    },
    totalNumberOfImages() {
      return this.images.length;
    },
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
      let start = (i - 1) * Math.floor(this.totalNumberOfImages / n);
      console.log(start);
      let numberOfImages = Math.floor(this.totalNumberOfImages / n);
      const leftovers = this.totalNumberOfImages % n;
      if (leftovers != 0 && i <= leftovers) {
        start += (i - 1);
        numberOfImages += 1;
      } else {
        start += leftovers;
      }
      console.log(start, start + numberOfImages);
      return this.images.slice(start, start + numberOfImages);
    },
  },
};
</script>

<page-query>
query {
  images: allCldMedia {
    edges {
      node {
        secure_url
        public_id
      }
    }
  }
}
</page-query>

<style>
img {
  object-fit: cover;
}
.image-box {
  padding: 5px;
}
</style>

<template>
  <Layout>
    <div class="posts-main-container">
      <div class="columns is-multiline is-mobile posts-grid">
        <div
          class="column is-12 post"
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
        >
          <article class="box">
            <p class="title is-5 post-title">
              <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
            </p>
            <p class="subtitle is-5 post-subtitle">
              {{ getDate(edge.node.date) }}
            </p>
            <figure class="image is-2by1">
              <img :src="edge.node.image" />
            </figure>
          </article>
        </div>
      </div>
      <div class="pager">
        <Pager :info="$page.allPost.pageInfo" />
      </div>
    </div>
  </Layout>
</template>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
  methods: {
    getDate(datetime) {
      const d = new Date(datetime);
      let month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
};
</script>

<page-query>
query ($page: Int) {
  allPost(perPage: 4, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        date
        path
      }
    }
  }
}
</page-query>

<style scoped>
img {
  object-fit: cover;
}
.posts-main-container {
  height: 100%;
  background-size: contain;
  padding-left: 10%;
  padding-right: 10%;
}

.posts-grid {
  margin-top: 2px;
  height: 90%;
}

.post {
  height: 33%;
  overflow: hidden;
  /* margin: 0 0 0 0; */
}

.post-subtitle {
  margin-bottom: 0.5rem;
}

.pager {
  height: 10%;
}

.box {
  height: 100%;
  overflow: hidden;
}
</style>

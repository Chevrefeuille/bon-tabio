<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile posts-grid is-centered">
          <div
            class="column is-8 post"
            v-for="edge in $page.allPost.edges"
            :key="edge.node.id"
          >
            <article class="message is-dark">
              <div class="message-body">
                <p class="title is-5 post-title">
                  <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
                </p>
                <p class="subtitle is-5 post-subtitle">
                  {{ getDate(edge.node.date) }}
                </p>
                <!-- <figure class="image is-2by1">
                  <img :src="edge.node.image" />
                </figure> -->
              </div>
            </article>
          </div>
        </div>
        <div class="pager">
          <Pager :info="$page.allPost.pageInfo" />
        </div>
      </div>
    </section>
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
        image
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

.posts-grid {
  /* margin-top: 2px; */
  margin-bottom: 0px;
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
  height: 5%;
}

.box {
  height: 100%;
  overflow: hidden;
}
</style>

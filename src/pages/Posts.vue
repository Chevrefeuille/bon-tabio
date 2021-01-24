<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile posts-grid is-centered">
          <div
            class="column is-8 post"
            v-for="post in posts"
            :key="post.id"
          >
            <article class="message is-dark">
              <div class="message-body">
                <p class="title is-5 post-title">
                  <g-link :to="post.path">{{ post.name }}</g-link>
                </p>
                <p class="subtitle is-5 post-subtitle">
                  {{ getDate(post.date) }}
                </p>
                <!-- <figure class="image is-2by1">
                  <img :src="post.image" />
                </figure> -->
              </div>
            </article>
          </div>
        </div>
        <div class="pager">
          <Pagination
            :ressourceName="'posts'"
            :perPage="1"
            :ressourceData="$page.posts"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map(({ node }) => node);
    },
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
  posts: allPost(perPage: 1, page: $page) @paginate {
    totalCount
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

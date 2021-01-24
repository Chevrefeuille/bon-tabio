<template>
  <section>
    <b-pagination
      :total="$page.recipes.totalCount"
      :current="currentPage"
      :per-page="perPage"
    >
      <template #default="props">
        <b-pagination-button
          :page="props.page"
          :id="props.page.number"
          tag="router-link"
          :to="`/recipes/${sanitize(props.page.number)}`"
        >
        </b-pagination-button>
      </template>

      <template #previous="props">
        <b-pagination-button
          :page="props.page"
          tag="router-link"
          :to="`/${ressourceName}/${sanitize(props.page.number)}`"
        >
        </b-pagination-button>
      </template>

      <template #next="props">
        <b-pagination-button
          :page="props.page"
          tag="router-link"
          :to="`/${ressourceName}/${sanitize(props.page.number)}`"
        >
        </b-pagination-button>
      </template>
    </b-pagination>
  </section>
</template>

<script>
export default {
  props: ["ressourceName", "perPage"],
  computed: {
    currentPage() {
      return this.$page.recipes.pageInfo.currentPage;
    },
  },
  methods: {
    // because recipes/1 gives a 404
    sanitize(pageID) {
      if (pageID == 1) {
        return "";
      }
      return pageID;
    },
  },
};
</script>
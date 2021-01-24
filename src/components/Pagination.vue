<template>
  <section>
    <b-pagination
      :total="ressourceData.totalCount"
      :current="currentPage"
      :per-page="perPage"
      :rounded="true"
      order="is-centered"
    >
      <template #default="props">
        <b-pagination-button
          :page="props.page"
          :id="props.page.number"
          tag="router-link"
          :to="`/${ressourceName}/${sanitizeRoute(props.page.number)}`"
        >
        </b-pagination-button>
      </template>

      <template #previous="props">
        <b-pagination-button
          :page="props.page"
          tag="router-link"
          :to="`/${ressourceName}/${sanitizeRoute(props.page.number)}`"
        >
          <b-icon pack="fas" icon="chevron-left" size="is-small"></b-icon>
        </b-pagination-button>
      </template>

      <template #next="props">
        <b-pagination-button
          :page="props.page"
          tag="router-link"
          :to="`/${ressourceName}/${sanitizeRoute(props.page.number)}`"
        >
          <b-icon pack="fas" icon="chevron-right" size="is-small"></b-icon>
        </b-pagination-button>
      </template>
    </b-pagination>
  </section>
</template>

<script>
export default {
  props: ["ressourceName", "perPage", "ressourceData"],
  computed: {
    currentPage() {
      return this.ressourceData.pageInfo.currentPage;
    },
  },
  methods: {
    // because recipes/1 gives a 404
    sanitizeRoute(pageID) {
      if (pageID == 1) {
        return "";
      } else if (pageID == this.ressourceData.pageInfo.totalPages + 1) {
        return pageID - 1;
      }
      return pageID;
    },
  },
};
</script>
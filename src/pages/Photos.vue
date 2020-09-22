<template>
  <Layout>
    <section class="photos">
      <div>
        <h1>This is our GREAT photo page</h1>
      </div>
      <div class="container images">
        <figure class="is-clickable">
          <img src="../assets/shiba.jpg" />
        </figure>
      </div>
    </section>
  </Layout>
</template>

<style>
.photos {
  background-image: url("../assets/image_4.jpg");
  background-size: cover;
}
.images {
  display: flex;
  justify-content: center;
}
.is-clickable {
  cursor: pointer;
}
</style>

<template>
  <Layout>
    <h1>About us</h1>
    <p></p>
    <div class="columns is-mobile">
      <div class="column is-2">
      </div>
      <!-- Adochan info -->
      <div class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Ado</p>
                <p class="subtitle is-6">@ado</p>
              </div>
            </div>

            <div class="content">
              <a href="#">#french</a>
              <a href="#">#eatlover</a>
              <a href="#">#handsome</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>


      <!-- Seri info -->
      <div class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/seri.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Seri</p>
                <p class="subtitle is-6">@seri</p>
              </div>
            </div>

            <div class="content">
              <a href="#">#japanese</a>
              <a href="#">#eatlover</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    <div class="column is-2"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>
</style>

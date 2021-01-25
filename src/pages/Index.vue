<template>
  <Layout>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <figure>
            <img src="../assets/logo1_t.png">
          </figure>
          <!-- <h1 class="title is-1 has-text-weight-bold">
            World Travel
          </h1> -->
          <h2 class="subtitle has-text-weight-semibold">
            Would you like to go traveling with us?
          </h2>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-8">
              <div class="block">
                <h1 class="title is-1 has-text-weight-bold">
                  Our Concept
                </h1>
              </div>
              <div class="block is-size-4">
                <strong>"Bon"</strong>: good in French<br>
              <!-- </div>
              <div class="block is-size-2"> -->
                <strong>"Tabio"</strong>: Travel/Trip + o(wo) in Japanese
              </div>
              <div class="block">
                We love going traveling.<br>
                We love eating.<br>
                We love cooking.<br>
                And we love sharing them with you.
              </div>
              <div class="block">
                We hope you feel like traveling with our contents.
              </div>
              <button type="button"><i class="icon ion-md-lock"></i>sample button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
</script>

<style lang="scss" scoped>
$ruler: 16px;
$color-red: #AE1100;
$color-bg:#FFF1EB;
$color-shadow: #BABECC;
$color-white: #FFF;


button {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.2px;
    font-size: $ruler;
}

button{
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler*20;
  padding: $ruler;
  background-color:$color-bg;
  text-shadow: 1px 1px 0 $color-white;
}
button {
  color:#61677C;
  font-weight: bold;
  box-shadow: -5px -5px 20px $color-white,  5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
  }
  
  
  &.unit {
    border-radius: $ruler/2;
    line-height: 0;
    width: $ruler*3;
    height: $ruler*3;
    display:inline-flex;
    justify-content: center;
    align-items:center;
    margin: 0 $ruler/2;
    font-size: $ruler*1.2;
  }
  
  &.red {
    display: block;
    width: 100%;
    color:$color-red;
  }
}
</style>

<template>
  <Layout>
      <section>
        <h1 class="is-size-4 has-text-centered has-text-weight-bold text-color-curry">Curry Calendar</h1>
        <h2 class="is-size-4 has-text-centered has-text-weight-bold text-color-curry">2022</h2>
      </section>
      <section class="section">
          <div class="columns is-centered">
              <div class="column is-full">
                <div class="example2 sp">
                    <div class="has-text-centered text-color-curry font-size-currycount">3</div>
                </div>
                <div class="has-text-centered text-color-curry font-size-currycount">3</div>
            </div>
          </div>
      </section>
      <section>
        <h1 class="is-size-4 has-text-centered has-text-weight-bold text-color-curry">Gallery</h1>
        <ul>
            <li><img src="image1.jpg" width="300" height="300" alt="" /></li>
            <li><img src="image2.jpg" width="300" height="300" alt="" /></li>
            <li><img src="image3.jpg" width="300" height="300" alt="" /></li>
            <li><img src="image4.jpg" width="300" height="300" alt="" /></li>
        </ul>
        <div class="has-text-centered">
            <b-button type="is-primary is-rounded is-small">See more</b-button>
        </div>
      </section>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>
.text-color-curry {
    color: #614F43;
}
.text-color-curry.font-size-currycount {
    font-size: 200px;
}

ul {
display: flex;
justify-content: center;
}
li {
list-style: none;
}
li:nth-child(2) {
margin: 0 10px;
}

.plate-position {
    position: relative;
}
.plate-width {
    width: 50%;
}
.plate-text {
    position: absolute;
    left: 0;
    right: 0;
}

.example2{
    /*追加*/display: flex;
    /*追加*/justify-content: center;
    /*追加*/align-items: center;
    background: url("../assets/plate.png") no-repeat center center / cover;
    height: 400px;
    background-size: 400px 400px;
}

@media screen and (max-width: 520px) {
  /* 520px以下で表示させたいcssを記述していく */
    .sp{
    /*追加*/display: flex;
    /*追加*/justify-content: center;
    /*追加*/align-items: center;
    background: url("../assets/plate.png") no-repeat center center / cover;
    height: 400px;
    background-size: 300px 300px;
}
}

</style>

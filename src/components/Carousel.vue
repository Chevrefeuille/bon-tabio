<template>
  <div class="carousel">    
    <b-carousel :indicator-inside="false">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <span class="image">
          <img :src="carousel.imageUrl">
        </span>
      </b-carousel-item>
      <template slot="indicators" slot-scope="props">
        <span class="al image">
          <img :src="carousels[props.i].imageUrl" :title="props.i">
        </span>
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data(){
    return {
      carousels: [
          { text: 'Slide 1', imageUrl: 'https://picsum.photos/id/430/1230/500' },
          { text: 'Slide 2', imageUrl: 'https://picsum.photos/id/431/1230/500' },
          { text: 'Slide 3', imageUrl: 'https://picsum.photos/id/432/1230/500' },
          { text: 'Slide 4', imageUrl: 'https://picsum.photos/id/433/1230/500' },
          { text: 'Slide 5', imageUrl: 'https://picsum.photos/id/434/1230/500' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

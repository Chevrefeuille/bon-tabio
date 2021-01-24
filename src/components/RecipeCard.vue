<template>
  <g-link :to="recipePath">
    <div class="box">
      <div class="card">
        <div class="card-image">
          <figure class="image is-3by2 is-hidden-mobile">
            <img :src="recipeImage" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="title is-4 is-italic recipe-title has-text-centered has-text-weight-bold">
            {{ recipeName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </g-link>

  <!-- <article class="recipe-card-container">
    <g-link :to="recipePath">
      <div class="box">
        <figure
          class="image image is-3by2"
          @mouseover="showInfo = true"
          @mouseleave="showInfo = false"
        >
          <img :src="recipeImage" />
        </figure>
        <transition name="slide-fade">
          <div v-if="showInfo" class="recipe-info">
            <p class="title is-5 recipe-title">
              {{ recipeName }}
            </p>
          </div>
        </transition>
      </div>
    </g-link>
  </article> -->
</template>


<script>
export default {
  props: ["recipeImage", "recipeName", "recipePath"],
  data() {
    return {
      showInfo: false,
    };
  },
};
</script>

<style lang="scss" scoped>



.box {
  position: relative;
  overflow: hidden;
  padding: 0 0 0 0;
  border-radius: 10px;
}

// .recipe-info {
//   position: absolute;
//   z-index: 1;
//   top: 80%;
//   left: 0;
//   background-color: white;
//   width: 100%;
//   height: 20%;
// }

// .recipe-title {
//   margin-left: 0.5rem;
//   margin-top: 0.2rem;
//   color: black;
// }

img {
  object-fit: cover;
}

// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// .slide-fade-leave-active {
//   transition: all .8s ease;
// }

// .slide-fade-enter,
// .slide-fade-leave-to {
//   transform: translateY(50px);
//   // opacity: 0;
// }
</style>
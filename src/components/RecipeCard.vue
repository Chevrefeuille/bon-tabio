<template>
  <div class="recipe-card-container">
    <g-link :to="recipePath">
      <article class="box">
        <figure
          class="recipe-image"
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
      </article>
    </g-link>
  </div>
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

.recipe-card-container {
  height: 100%;
}

.box {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding: 0 0 0 0;
  /* box-shadow: none; */
  border-radius: 0px;
}

.recipe-info {
  position: absolute;
  z-index: 10;
  top: 75%;
  left: 0;
  background-color: $primary;
  // color: white;
  // box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  width: 100%;
  height: 25%;
}

.recipe-title {
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  color: black;
}

.recipe-image {
  height: 100%;
}

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  // position: absolute;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(50px);
  // opacity: 0;
}
</style>
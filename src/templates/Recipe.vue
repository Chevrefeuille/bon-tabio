<template>
  <Layout>
    <g-link to="/recipes">Go back to the list of recipes</g-link>
    <h1 class="title has-text-weight-bold">{{ $page.recipe.name }}</h1>
    <!-- <div class="icon-and-text">
    For {{ amount }} {{$page.recipe.amount.unit }} 
    <div class="icon-and-text">
    <a v-on:click="amount += 1" class="icon-and-text">
      <b-icon
        icon="plus-circle"
        size="is-medium">
      </b-icon>
    </a>
    <a v-on:click="amount = Math.max(1, amount - 1)" class="icon-and-text">
      <b-icon
        icon="minus-circle"
        size="is-medium">
      </b-icon>
    </a>
    </div>
    </div> -->
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column is-4">
        <div class="icon-and-text">
    For {{ amount }} {{$page.recipe.amount.unit }} 
    <div class="icon-and-text">
    <a v-on:click="amount += 1" class="icon-and-text">
      <b-icon
        icon="plus-circle"
        size="is-medium">
      </b-icon>
    </a>
    <a v-on:click="amount = Math.max(1, amount - 1)" class="icon-and-text">
      <b-icon
        icon="minus-circle"
        size="is-medium">
      </b-icon>
    </a>
    </div>
    </div>
        <!-- <div class="box" style="background-color:#ffc0cb"> -->
          <div class="icon-and-text">
            <b-icon
              icon="square"
              size="is-small">
            </b-icon>
            <h3>Ingredients</h3>
          </div>
          <div class="content">
            <div class="ingredients">
          <!-- <ul class="ingredients"> -->
            <li
              v-for="(ingredient, i) in $page.recipe.ingredients"
              :key="i"
            >{{ ingredient.name }} : {{ scaleQuantity(ingredient.quantity) }} {{ ingredient.unit }}</li>
          <!-- </ul> -->
          <!-- <ul class="ingredients"> -->
            <li
              v-for="(ingredient, i) in $page.recipe.otherIngredients"
              :key="i"
            >{{ ingredient.name }}</li>
          <!-- </ul> -->
            </div>
          </div>
        <!-- </div> -->
      </div>
      <div class="column is-6">
        <img :src="$page.recipe.image" />
      </div>
      <div class="column is-1"></div>
    </div>
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column is-10">
        <div class="icon-and-text">
            <b-icon
              icon="square"
              size="is-small">
            </b-icon>
            <h3>Steps</h3>
          </div>
          <div class="content">
          <!-- <ul class="steps"> -->
            <li v-for="(step, i) in $page.recipe.steps" :key="i">{{ step.action }}</li>
          <!-- </ul> -->
          </div>
      </div>
      <div class="column is-1"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      amount: 0,
    };
  },
  mounted() {
    this.amount = this.$page.recipe.amount.quantity;
  },
  methods: {
    scaleQuantity(quantity) {
      return this.amount * (quantity / this.$page.recipe.amount.quantity);
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  recipe(id: $id) {
    name
    image
    amount {
      quantity
      unit
    }
    ingredients {
      name
      quantity
      unit
    }
    otherIngredients {
      name
    }
    steps {
      name
      action
    }
  }
}
</page-query>

<style>
.recipes {
  background-image: url('../assets/image_6.jpg');
  background-size: cover;
}
.icon-and-text {
  display: flex;
  align-items: center;
}
</style>

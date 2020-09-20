<template>
  <Layout>
    <g-link to="/recipes">Go back to the list of recipes</g-link>
    <h2>{{ $page.recipe.name }}</h2>
    For {{ amount }} {{$page.recipe.amount.unit }}
    <a v-on:click="amount += 1">+</a>/
    <a v-on:click="amount = Math.max(1, amount - 1)">-</a>
    <div class="columns">
      <div class="column is-one-third">
        <div class="box">
          <h3>Ingredients</h3>
          <ul class="ingredients">
            <li
              v-for="(ingredient, i) in $page.recipe.ingredients"
              :key="i"
            >{{ ingredient.name }} : {{ scaleQuantity(ingredient.quantity) }} {{ ingredient.unit }}</li>
          </ul>
          <ul class="ingredients">
            <li
              v-for="(ingredient, i) in $page.recipe.otherIngredients"
              :key="i"
            >{{ ingredient.name }}</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3>Steps</h3>
          <ul class="steps">
            <li v-for="(step, i) in $page.recipe.steps" :key="i">{{ step.action }}</li>
          </ul>
        </div>
      </div>
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
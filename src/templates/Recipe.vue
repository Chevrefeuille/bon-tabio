<template>
  <Layout>
    <g-link to="/recipes">Go back to the list of recipes</g-link>
    <div class="recipe-content">
      <p class="title is-3 recipe-title">{{ $page.recipe.name }}</p>
      <div class="columns ingredients-and-image">
        <div class="column is-6">
          <div class="icon-and-text">
            For {{ amount }} {{ $page.recipe.amount.unit }}
            <a v-on:click="amount = Math.max(1, amount - 1)">
              <b-icon icon="minus-circle" size="is-small"> </b-icon>
            </a>
            <a v-on:click="amount += 1">
              <b-icon icon="plus-circle" size="is-small"> </b-icon>
            </a>
          </div>
          <p class="title is-4 ingredients-title">Ingredients</p>
          <div class="content">
            <ul class="ingredients">
              <li v-for="(ingredient, i) in $page.recipe.ingredients" :key="i">
                {{ ingredient.name }} : {{ scaleQuantity(ingredient.quantity) }}
                {{ ingredient.unit }}
              </li>
            </ul>
            <ul class="ingredients-no-amount">
              <li
                v-for="(ingredient, i) in $page.recipe.otherIngredients"
                :key="i"
              >
                {{ ingredient.name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-6">
          <img :src="$page.recipe.image" />
        </div>
      </div>
      <div class="columns steps">
        <div class="column is-10">
          <p class="title is-4 ingredients-title">Steps</p>
          <div class="content">
            <ul class="steps">
              <li v-for="(step, i) in $page.recipe.steps" :key="i">
                {{ step.action }}
              </li>
            </ul>
          </div>
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

<style scoped>
.recipe-title {
  margin-bottom: 0.2rem;
}
.recipe-content {
}
.icon-and-text {
  display: flex;
  align-items: center;
}

.ingredients-title {
  margin-bottom: 0.2rem;
}

ul.ingredients {
  list-style-type: disc;
  margin-top: 0px;
}

ul.ingredients-no-amount {
  list-style-type: disc;
  margin-top: 0.25em;
}

ul.steps {
  list-style-type: decimal;
}
</style>

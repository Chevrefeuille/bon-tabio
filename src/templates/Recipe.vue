<template>
  <Layout>
    <div class="recipe-content">
      <div class="return-link">
        <g-link to="/recipes">Go back to the list of recipes</g-link>
      </div>
      <p class="title is-3 recipe-title">{{ $page.recipe.name }}</p>
      <div class="columns ingredients-and-image">
        <div class="column is-5">
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
          <div class="ingredients">
            <ul class="ingredients-amount">
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
        <div class="column is-7">
          <img :src="$page.recipe.image" />
        </div>
      </div>
      <div class="columns steps">
        <div class="column is-12">
          <p class="title is-4 ingredients-title">Steps</p>
          <ul class="steps">
            <li v-for="(step, i) in $page.recipe.steps" :key="i">
              {{ step.action }}
            </li>
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

<style scoped>
.recipe-content {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.recipe-title {
  margin-bottom: 0.2rem;
}

.icon-and-text {
  display: flex;
  align-items: center;
}

.ingredients-title {
  margin-bottom: 0.2rem;
}

.ingredients {
  padding-left: 2rem;
}

.ingredients-amount {
  list-style-type: disc;
  margin-top: 0px;
}

.ingredients-no-amount {
  list-style-type: disc;
  margin-top: 0.15rem;
}

.steps {
  padding-left: 2rem;
  padding-right: 2rem;
  list-style-type: decimal;
}
</style>

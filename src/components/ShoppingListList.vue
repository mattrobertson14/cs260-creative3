<template>
  <div class="ShoppingListList">
    <h1>Shopping List</h1>
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
      <div class="header">
        <h2>{{ recipe.name }}</h2>
        <i class="fas fa-times" @click="removeFromList(recipe.id)" />
      </div>
      <hr />
      <ul>
        <li v-for="ingredient in getIngredients(recipe)" :key="ingredient.name">
          {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingListList',
    props: {
      recipes: Array
    },
    methods: {
      getIngredients(recipe){
        if (recipe.ingredient.length > 0) return recipe.ingredient
        let ingredients = []
        recipe.ingredientGroup.map(group => {
          ingredients = ingredients.concat(group.ingredient)
        })
        return ingredients
      },
      removeFromList(_id){
        this.$root.$data.recipes = this.$root.$data.recipes.map(rec => {
          if (rec.id === _id)
            rec.shoppingList = false
          return rec
        })
      }
    }
  }
</script>

<style scoped>
  .ShoppingListList {
    text-align: left;
  }
  li {
    text-transform: capitalize;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header i {
    cursor: pointer;
  }
</style>
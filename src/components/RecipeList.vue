<template>
  <div class="RecipeList">
    <div class="recipes" :class="{ empty : recipes.length === 0 }">
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id" @click="handleRecipeClick(recipe)">
        <img src="/images/default-recipe.png" :alt="recipe.name"/>
        <div class="info">
          <p class="name">{{ recipe.name }}</p>
          <p class="description">{{ recipe.description }}</p>
        </div>
        <div class="buttons" @click="stopBubbling">
          <i v-if="recipe.favorite" class="fas fa-heart" @click="removeFromFavorites(recipe.id)" />
          <i v-else class="far fa-heart hidden" @click="addToFavorites(recipe.id)" />
          <i v-if="recipe.shoppingList" class="fas fa-shopping-cart" @click="removeFromShoppingList(recipe.id)" />
          <i v-else class="fas fa-cart-plus hidden" @click="addToShoppingList(recipe.id)" />
        </div>
      </div>
      <p class="empty" v-show="recipes.length === 0">
        No recipes matching your search, try another.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeList',
  props: {
    recipes: Array
  },
  methods: {
    addToFavorites(_id) {
      this.$root.$data.recipes = this.$root.$data.recipes.map(rec => {
        if (rec.id === _id)
          rec.favorite = true
        return rec
      })
    },
    removeFromFavorites(_id) {
      this.$root.$data.recipes = this.$root.$data.recipes.map(rec => {
        if (rec.id === _id)
          rec.favorite = false
        return rec
      })
    },
    addToShoppingList(_id) {
      this.$root.$data.recipes = this.$root.$data.recipes.map(rec => {
        if (rec.id === _id)
          rec.shoppingList = true
        return rec
      })
    },
    removeFromShoppingList(_id) {
      this.$root.$data.recipes = this.$root.$data.recipes.map(rec => {
        if (rec.id === _id)
          rec.shoppingList = false
        return rec
      })
    },
    handleRecipeClick(recipe) {
      this.$root.$data.currentRecipe = recipe
      this.$root.$data.dialogOpen = true
    },
    stopBubbling(ev) {
      ev.stopPropagation()
    }
  }
}
</script>

<style scoped>
  .RecipeList {
    margin-top: 24px;
  }
  .recipes {
    width: 500px;
    margin: 0px auto;
    overflow-y: auto;
    box-shadow: 1px 1px 8px rgba(0,0,0,.6);
    border-radius: 4px;
  }
  .empty {
    box-shadow: none;
    padding: 0px 12px;
  }
  .recipe {
    display: flex;
    box-sizing: unset;
    height: 80px;
    padding: 8px 24px;
    cursor: pointer;
  }
  .recipe:not(:first-child){
    border-top: 1px solid rgba(0,0,0,.2);
  }
  .recipe:hover {
    background: rgba(0,0,0,.1);
  }
  .info {
    flex: 1;
  }
  .name {
    font-size: 16px;
    margin: 6px 0px;
  }
  .description {
    font-size: 12px;
    margin: 0;
    color: rgba(0,0,0,.6);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  img {
    height: 80px;
    width: 80px;
    margin-right: 16px;
  }
  .buttons {
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .buttons i {
    font-size: 20px;
    color: #23967F;
  }
  .hidden {
    color: rgba(0,0,0,.3)!important;
    opacity: 0;
  }
  .recipe:hover .hidden {
    opacity: 1;
  }
</style>
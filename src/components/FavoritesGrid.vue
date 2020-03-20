<template>
  <div class="FavoritesGrid">
    <h1>Favorites</h1>
    <div v-if="noFavorites" class="no-favorites">
      You have no favorites yet, go <router-link to="/" exact>Home</router-link> to add some.
    </div>
    <div v-else class="favorites" :class="{ empty : recipes.length === 0 }">
      <div class="favorite" v-for="favorite in recipes" :key="favorite.id" @click="handleRecipeClick(favorite)">
        <div class="image">
          <img :src="favorite.image? favorite.image : '/images/default-recipe.png'" :alt="favorite.name" />
          <i v-if="favorite.favorite" class="fas fa-times" @click="ev => removeFromFavorites(ev, favorite.id)" />
        </div>
        <div class="info">
          <p class="name">{{ favorite.name }}</p>
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
    name: 'FavoritesGrid',
    props: {
      recipes: Array,
      noFavorites: Boolean
    },
    methods: {
      removeFromFavorites(ev, _id) {
        ev.stopPropagation()
        this.$root.$data.recipes = this.$root.$data.recipes.map(rec => {
          if (rec.id === _id)
            rec.favorite = false
          return rec
        })
      },
      handleRecipeClick(recipe) {
        this.$root.$data.currentRecipe = recipe
        this.$root.$data.dialogOpen = true
      }
    }
  }
</script>

<style scoped>
  .FavoritesGrid {
    width: 1100px;
    margin: 24px auto;
  }
  .no-favorites {
    text-align: center;
    margin-top: 64px;
  }
  .favorites {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }
  h1 {
    font-size: 24px;
    margin-left: 36px;
    margin-right: 36px;
  }
  .favorite {
    width: 300px;
    position: relative;
    margin: 18px;
    box-shadow: 2px 2px 8px rgba(0,0,0,.4);
    border-radius: 4px;
  }
  .favorite img {
    width: 100%;
    height: 300px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .favorite i {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    background: rgba(0,0,0,.3);
    box-shadow: 2px 2px 20px rgba(0,0,0,.9);
    color: white;
    height: 24px;
    width: 24px;
    font-size: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }
  .favorite:hover i {
    opacity: 1;
  }
  .favorite i:hover {
    color: rgba(255,255,255,.8);
  }
  .favorite .name {
    margin: 16px;
  }
</style>
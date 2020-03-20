<template>
  <div class="Favorites">
    <div class="search">
      <div class="searchbox">
        <i class="fas fa-search"></i>
        <input v-model="searchText" placeholder="Search"/>
      </div>
    </div>
    <FavoritesGrid :recipes="recipes" :noFavorites="noFavorites" />
  </div>
</template>

<script>
  import FavoritesGrid from '../components/FavoritesGrid.vue'
  export default {
    name: 'Favorite',
    components: {
      FavoritesGrid
    },
    data() {
      return {
        searchText: '',
      }
    },
    computed: {
      recipes() {
        let search = this.searchText.toLowerCase()
        return this.$root.$data.recipes.filter(r => r.name.toLowerCase().includes(search) && r.favorite)
      },
      noFavorites() {
        const favorites = this.$root.$data.recipes.filter(r => r.favorite)
        if (favorites.length === 0) return true
        return false
      }
    },
  }
</script>

<style scoped>
  .search {
      margin-top: 100px;
      display: flex;
      justify-content: center;
    }
    .searchbox i {
      position: absolute;
      padding: 15px;
      color: rgba(0,0,0,.6);
    }
    .search input {
      margin: 0px auto;
      padding: 12px 24px 12px 46px;
      width: 500px;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: none;
      border: 2px solid rgba(0,0,0,.2);
      font-size: 16px;
      outline: none;
    }
</style>
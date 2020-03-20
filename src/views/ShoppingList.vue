<template>
  <div class="ShoppingList">
    <div class="empty" v-if="recipes.length === 0">
      You have no recipes in your shopping list yet, go <router-link to="/" exact>Home</router-link> to add some.
    </div>
    <ShoppingListList v-else :recipes="recipes"/>
  </div>
</template>

<script>
  import ShoppingListList from '../components/ShoppingListList'
  export default {
    name: 'ShoppingList',
    components: {
      ShoppingListList
    },
    computed: {
      recipes() {
        return this.$root.$data.recipes.filter(r => r.shoppingList)
      }
    }
  }
</script>

<style scoped>
  .ShoppingList {
    margin: 0px auto;
    margin-top: 100px;
    width: 1100px;
  }
  .empty {
    text-align: center;
    margin-top: 64px;
  }
</style>
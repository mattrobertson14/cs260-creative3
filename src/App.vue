<template>
  <div id="app">
    <div id="nav">
      <router-link class="title" to="/">
        <p>Recipe List!</p>
      </router-link>
      <span class="spacer" />
      <router-link class="header-link" to="/" exact>
        <i class="fas fa-home" />
      </router-link>
      <router-link class="header-link" to="/favorites">
        <i class="fas fa-heart" />
        <span v-show="favoritesLength > 0" class="count">{{ favoritesLength }}</span>
      </router-link>
      <router-link class="header-link" to="/shopping-list">
        <i class="fas fa-shopping-cart" />
        <span v-show="shoppingListLength > 0" class="count">{{ shoppingListLength }}</span>
      </router-link>
    </div>
    <router-view/>
    <span class="spacer" ></span>
    <div class='footer'>
      <a class='footer-link' href='https://github.com/mattrobertson14/cs260-creative3' target='_blank'>
        GitHub
      </a>
    </div>
    <Dialog v-if="dialogOpen" :onClose="closeDialog" />
  </div>
</template>

<script>
  import Dialog from './components/Dialog.vue'
  export default {
    components: {
      Dialog
    },
    methods: {
      closeDialog() {
        this.$root.$data.dialogOpen = false
        this.$root.$data.currentRecipe = null
      }
    },
    computed: {
      dialogOpen() {
        return this.$root.$data.dialogOpen
      },
      favoritesLength() {
        let arr = this.$root.$data.recipes || []
        return arr.filter(r => r.favorite).length
      },
      shoppingListLength() {
        let arr = this.$root.$data.recipes || []
        return arr.filter(r => r.shoppingList).length
      }
    }
  }
</script>

<style>
html, body {
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
#nav {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  background: #23967F;
  padding: 24px;
  padding-right: 36px;
  z-index: 10;
}
#nav p {
  margin: 0px;
  font-size: 24px;
  color: white;
}
.title {
  color: white;
  margin: 0;
  text-decoration: none;
}
.router-link-active:not(.title) {
  color: white;
}
.router-link-active:not(.title)::after {
  content: ' ';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 100%;
  height: 4px;
  background: white;
}
.header-link {
  color: rgba(255,255,255,.6);
  margin: 0;
  text-decoration: none;
  margin-left: 36px;
  position: relative;
}
.header-link i {
  font-size: 18px;
}
.header-link i:hover {
  color: rgba(255,255,255,.75);
}
.header-link i:active {
  color: rgba(255,255,255,.9);
}
.count {
  font-size: 12px;
  position: absolute;
  right: -16px;
  top: -10px;
  background: #F45B69;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
}
.spacer {
  flex: 1;
}
.footer {
  box-sizing: border-box;
  width: 100%;
  padding: 18px;
  margin-top: 24px;
  background-color: #363635;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-link {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.footer-link:hover {
  text-decoration: none;
  color: rgba(255,255,255,.8);
}
</style>

<template>
  <div class="container" @click="this.onClose">
    <div class="dialog" @click="handleBubbling">
      <i class="fas fa-times" @click="this.onClose" />
      <p v-if="!recipe" class="error">Error getting recipe info</p>
      <div v-else>
        <h2>{{recipe.name}}</h2>
        <div class="image-row">
          <img :src="recipe.image? recipe.image : '/images/default-recipe.png'" :alt="recipe.name" />
          <p class="description">{{ recipe.description }}</p>
        </div>
        <h3>Ingredients</h3>
        <hr/>
        <ol v-if="!recipe.ingredientGroup || recipe.ingredientGroup.length === 0">
          <li v-for="ingredient in recipe.ingredient" :key="ingredient.name">
            <span>
              {{ ingredient.amount? ingredient.amount : '' }}{{ ingredient.unit? ingredient.unit : '' }} {{ ingredient.name }}
            </span>
          </li>
        </ol>
        <div v-else v-for="group in recipe.ingredientGroup" :key="group.name">
          <h4>{{ group.name }}</h4>
          <ol>
            <li v-for="ingredient in group.ingredient" :key="ingredient.name">
              <span>
                {{ ingredient.amount? ingredient.amount : '' }}{{ ingredient.unit? ingredient.unit : '' }} {{ ingredient.name }}
              </span>
            </li>
          </ol>
        </div>
        <h3>Steps</h3>
        <hr />
        <ol class="steps">
          <li v-for="step in recipe.step" :key="step.description">
            <span>{{ step.description }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dialog',
    props: {
      onClose: { type : Function },
    },
    computed: {
      recipe() {
        return this.$root.$root.currentRecipe
      }
    },
    methods: {
      handleBubbling(ev) {
        ev.stopPropagation()
      },
    }
  }
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .dialog {
    background: white;
    width: 800px;
    max-height: 80vh;
    cursor: initial;
    padding: 24px;
    position: relative;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0,0,0,.6);
    overflow-y: auto;
  }
  .dialog > i {
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 24px;
  }
  .image-row {
    display: flex;
    margin-top: 16px;
  }
  img {
    width: 200px;
    margin-right: 24px;
  }
  li {
    text-transform: capitalize;
    padding: 6px;
  }
  li > span {
    margin-left: 24px;
  }
  .steps li span {
    font-size: 14px;
    margin-left: 0px;
    text-transform: initial;
  }
</style>
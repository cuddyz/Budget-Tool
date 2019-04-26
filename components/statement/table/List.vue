<template>
  <section>
    <h3 class="mt-1">{{ name }}</h3>
    <div class="m-75">
      <header class="flex bold mb-1">
        <p class="flex-3">Description</p>
        <p class="flex-1">Amount ($)</p>
      </header>
      <list-item v-for="(item, index) in data" :item="item" :key="index" />
    </div>
  </section>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'IncomeList',
  props: ['name', 'data'],
  components: {
    ListItem
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors.scss';

  header {
    border-bottom: 2px solid color(black);
  }
</style>

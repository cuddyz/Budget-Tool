<template>
  <section>
    <h3 class="mt-1">{{ name }}<span v-if="totalInHeader">: ${{ totalInHeader }}</span></h3>
    <div v-if="data && data.length > 0" class="m-75">
      <header class="flex bold mb-1">
        <p class="flex-3">Description</p>
        <p class="flex-1">Amount ($)</p>
      </header>
      <list-item v-for="(item, index) in data" :item="item" :key="index" />
    </div>
    <div v-else>
      <p>No information available</p>
    </div>
  </section>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'IncomeList',
  props: ['name', 'data', 'total'],
  computed: {
    totalInHeader() {
      if (!this.total) {
        return false
      }
      return Number(this.total).toLocaleString('en')
    }
  },
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

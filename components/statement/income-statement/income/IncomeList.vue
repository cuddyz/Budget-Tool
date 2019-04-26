<template>
  <section class="m-1">
    <h3>Income</h3>
    <div class="m-75">
      <header class="flex bold mb-1">
        <p class="flex-3">Description</p>
        <p class="flex-1">Cash Flow</p>
      </header>
      <income-list-item v-for="(item, index) in income" :item="item" :key="index" />
    </div>
  </section>
</template>

<script>
import IncomeListItem from './IncomeListItem'

export default {
  name: 'IncomeList',
  props: ['income'],
  components: {
    IncomeListItem
  },
  created() {
    console.log(this.income)
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors.scss';

  header {
    border-bottom: 2px solid color(black);
  }
</style>

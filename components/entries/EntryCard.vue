<template>
  <section class="card">
    <header>
      <h2>{{ entry.name }}</h2>
    </header>
    <list v-if="income.length > 0" :data="income" name="Income" />
    <list v-if="expenses.length > 0" :data="expenses" name="Expenses" />
    <list v-if="assets.length > 0" :data="assets" name="Assets" />
    <list v-if="liabilities.length > 0" :data="liabilities" name="Liabilities" />
    <footer class="flex">
      <button class="ml-a delete"><i class="fas fa-trash-alt" /></button>
      <button class="ml-1 edit"><i class="fas fa-pencil-alt" /></button>
    </footer>
  </section>
</template>

<script>
import List from '@/components/table/List'

export default {
  name: 'EntryCard',
  props: ['entry'],
  components: {
    List
  },
  computed: {
    income() {
      return [].concat.apply([], this.entry.income)
    },
    expenses() {
      return [].concat.apply([], this.entry.expenses)
    },
    assets() {
      return [].concat.apply([], this.entry.assets)
    },
    liabilities() {
      return [].concat.apply([], this.entry.liabilities)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  button {
    &.delete {
      color: color(red);

      &:hover {
        color: color(redDark);
      }
    }

    &.edit {
      color: color(blue);

      &:hover {
        color: color(blueDark);
      }
    }
  }
</style>

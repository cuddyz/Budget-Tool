<template>
  <section class="card">
    <header>
      <h2>{{ entry.name }}</h2>
    </header>
    <list v-if="entry.income.length > 0" :data="entry.income" name="Income" />
    <list v-if="entry.expenses.length > 0" :data="entry.expenses" name="Expenses" />
    <list v-if="entry.assets.length > 0" :data="entry.assets" name="Assets" />
    <list v-if="entry.liabilities.length > 0" :data="entry.liabilities" name="Liabilities" />
    <footer class="flex">
      <button @click="$emit('delete', entry)" class="ml-a delete"><i class="fas fa-trash-alt" /></button>
      <button @click="$emit('edit', entry)" class="ml-50 edit"><i class="fas fa-pencil-alt" /></button>
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
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  button {
    &.delete {
      color: color(red);
    }

    &.edit {
      color: color(blue);
    }

    &:hover {
      background-color: darken(color(white), 5%);

      &.delete {
        color: color(redDark);
      }

      &.edit {
        color: color(blueDark);
      }
    }
  }
</style>

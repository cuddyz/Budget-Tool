<template>
  <section class="dropform-container">
    <div class="backshade" @click="$emit('clickout')"/>
    <article class="dropform scroll">
      <header class="px-3 pt-2">
        <label>Name</label>
        <input v-model="entry.name" />
      </header>
      <section class="px-3">
        <list-edit :data="entry.income" name="Income" />
        <list-edit :data="entry.expenses" name="Expenses" />
        <list-edit :data="entry.assets" name="Assets" />
        <list-edit :data="entry.liabilities" name="Liabilities" />
      </section>
      <footer class="actions px-2 py-1">
        <button class="ml-a" @click="$emit('close')"><i class="mr-25 fas fa-times" />Close</button>
        <button class="ml-50" @click="$emit('save', entry)"><i class="mr-25 fas fa-save" />Save</button>
      </footer>
    </article>
  </section>
</template>

<script>
import ListEdit from '@/components/table/ListEdit'

export default {
  name: 'EntryDropform',
  props: ['entry'],
  components: {
    ListEdit
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  button {
    &.delete {
      color: color(red);
    }

    &:hover {
      background-color: darken(color(white), 5%);

      &.delete {
        color: color(redDark);
      }
    }
  }
</style>

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
  @import './assets/styles/colors.scss';

  .scroll {
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: scrollbar;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .dropform-container,
  .backshade,
  .dropform {
    top: 0;
    left: 0;
    right: 0;
  }
  .dropform-container,
  .backshade {
    z-index: 10;
    position: absolute;
    bottom: 0;
  }
  .backshade {
    background-color: rgba(0,0,0,0.2);
  }
  .dropform {
    position: fixed;
    background-color: color(white);
    top: 0;
    z-index: 20;
    max-height: 100vh;
    border-bottom: thin solid color(grey);
    box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  }
  .actions {
    display: flex;
    background: lighten(color(greyLight), 20%);
    position: sticky;
    bottom: 0;

    button {
      &:hover {
        background-color: darken(color(white), 5%);
      }
    }
  }
</style>

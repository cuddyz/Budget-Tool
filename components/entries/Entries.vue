<template>
  <article class="cards">
    <entry-dropform v-if="dropformEntry" :entry="dropformEntry" v-on:close="closeDropform" v-on:save="save" />
    <div class="flex mb-1">
      <button @click="create()" class="ml-a"><i class="fas fa-plus"/> Create</button>
    </div>
    <entry-card v-for="entry in entries" :key="entry.id" :entry="entry" v-on:edit="initDropform" v-on:delete="deleteEntry"/>
  </article>
</template>

<script>
import EntryCard from './EntryCard'
import EntryDropform from './EntryDropform'
import { data } from '~/localData.js'

export default {
  name: 'Entries',
  data() {
    return {
      entries: data,
      dropformEntry: null
    }
  },
  components: {
    EntryCard,
    EntryDropform
  },
  methods: {
    initDropform(entry) {
      this.dropformEntry = entry
    },
    closeDropform() {
      this.dropformEntry = null
    },
    create() {
      const emptyEntry = {
        name: '',
        income: [],
        expenses: [],
        assets: [],
        liabilities: []
      }

      this.initDropform(emptyEntry)
    },
    save(entry) {
      // if entry.id PUT/:ID else POST
      console.log(entry)
    },
    deleteEntry(entry) {
      // DELETE/:ID
      console.log(entry)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  button {
    &:hover {
      background-color: darken(color(white), 5%);
    }
  }
</style>

<template>
  <article v-if="!isLoading" class="cards">
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
import { entries as entryService } from '@/services/api'

export default {
  name: 'Entries',
  data() {
    return {
      entries: {},
      dropformEntry: null,
      isLoading: true
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
    async save(entry) {
      const body = {
        ...entry,
        username: 'cuddyz'
      }

      if (entry.id) {
        await entryService.update(entry.id, body)
      } else {
        await entryService.create(body)
        this.entries.push(body)
      }

      this.closeDropform()
    },
    async deleteEntry(entry) {
      await entryService.delete(entry.id)
      const index = this.entries.findIndex(e => entry.id === e.id)
      this.entries.splice(index, 1)
    },
    async getData() {
      this.entries = (await entryService.list()).data
      this.isLoading = false
    }
  },
  created() {
    this.getData()
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

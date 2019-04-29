<template>
  <article class="cards">
    <entry-dropform v-if="dropformEntry" :entry="dropformEntry" v-on:close="closeDropform" v-on:save="save" />
    <entry-card v-for="entry in entries" :key="entry.id" :entry="entry" v-on:edit="initDropform" />
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
    save(entry) {
      console.log(entry)
    }
  }
}
</script>

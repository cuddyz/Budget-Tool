<template>
  <article class="cards">
    <entry-card v-for="entry in entries" :key="entry.id" :entry="entry" />
  </article>
</template>

<script>
import EntryCard from './EntryCard'
import { data } from '~/localData.js'

export default {
  name: 'Entries',
  data() {
    return {
      entries: data
    }
  },
  components: {
    EntryCard
  }
}
</script>

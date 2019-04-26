<template>
  <section>
    <h2>Balance Sheet</h2>
    <div class="flex">
      <list name="Assets" :data="assets" class="flex-1" />
      <list name="Liabilities" :data="liabilities" class="flex-1" />
    </div>
  </section>
</template>

<script>
import List from '@/components/statement/table/List'

export default {
  name: 'BalanceSheet',
  props: ['data'],
  components: {
    List
  },
  computed: {
    assets() {
      const filteredAssets = this.data.map(entry => entry.assets)
      // Each entry is an array of income(s)
      return [].concat.apply([], filteredAssets)
    },
    liabilities() {
      const filteredLiabilities = this.data.map(entry => entry.liabilities)
      // Each entry is an array of expense(s)
      return [].concat.apply([], filteredLiabilities)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

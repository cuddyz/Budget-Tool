<template>
  <section>
    <h2>Balance Sheet</h2>
    <div class="flex">
      <list name="Assets" :data="assets" :total="totalAssets" class="flex-1" />
      <list name="Liabilities" :data="liabilities" :total="totalLiabilities" class="flex-1" />
    </div>
  </section>
</template>

<script>
import List from '@/components/table/List'

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
    totalAssets() {
      let total = 0
      this.assets.forEach(asset => {
        total += Number(asset.amount)
      })

      return total
    },
    liabilities() {
      const filteredLiabilities = this.data.map(entry => entry.liabilities)
      // Each entry is an array of expense(s)
      return [].concat.apply([], filteredLiabilities)
    },
    totalLiabilities() {
      let total = 0
      this.liabilities.forEach(liability => {
        total += Number(liability.amount)
      })

      return total
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

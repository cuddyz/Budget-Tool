<template>
  <section class="m-1">
    <h3>Balance Sheet Section</h3>
    <div class="flex">
      <assets class="flex-1" />
      <liabilities class="flex-1" />
    </div>
  </section>
</template>

<script>
import Assets from './assets/Assets'
import Liabilities from './liabilities/Liabilities'

export default {
  name: 'BalanceSheet',
  components: {
    Assets,
    Liabilities
  }
}
</script>

<style lang="scss" scoped>

</style>

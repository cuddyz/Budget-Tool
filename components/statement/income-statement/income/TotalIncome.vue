<template>
  <section class="flex align-center">
    <h3>Total Income: ${{ totalIncome }}</h3>
  </section>
</template>

<script>
export default {
  name: 'TotalIncome',
  props: ['income'],
  computed: {
    totalIncome() {
      let total = 0
      this.income.forEach(i => {
        total += i.amount
      })
      return Number(total).toLocaleString('en')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

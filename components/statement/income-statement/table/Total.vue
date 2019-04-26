<template>
  <section class="flex align-center">
    <h3>Total {{ name }}: ${{ total }}</h3>
  </section>
</template>

<script>
export default {
  name: 'Total',
  props: ['name', 'data'],
  computed: {
    total() {
      let total = 0
      this.data.forEach(i => {
        total += i.amount
      })
      return Number(total).toLocaleString('en')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

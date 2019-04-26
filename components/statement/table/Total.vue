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
      return Number(this.data).toLocaleString('en')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

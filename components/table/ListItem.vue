<template>
  <div class="flex mt-50">
    <p class="flex-3 mr-2">{{ item.name }}</p>
    <p class="flex-1">${{ cashFlow }}</p>
  </div>
</template>

<script>
export default {
  name: 'IncomeListItem',
  props: ['item'],
  computed: {
    cashFlow() {
      if (!this.item) {
        return ''
      }
      return Number(this.item.amount).toLocaleString('en')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors.scss';

  p {
    border-bottom: 1px solid gray(70);
  }
</style>

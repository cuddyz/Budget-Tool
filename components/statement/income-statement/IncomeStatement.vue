<template>
  <section>
    <h2>Income Statement</h2>
    <div class="flex">
      <list name="Income" :data="income" class="flex-3 mr-1"/>
      <total name="Income" :data="income" class="flex-1 ml-1" />
    </div>
    <div class="flex">
      <list name="Expenses" :data="expenses" class="flex-3 mr-1" />
      <total name="Expenses" :data="expenses" class="flex-1 ml-1" />
    </div>
    <div class="flex">
      <div class="flex-3 mr-1" />
      <cash-flow class="flex-1 ml-1" />
    </div>
  </section>
</template>

<script>
import List from './table/List'
import Total from './table/Total'
import CashFlow from './CashFlow'

export default {
  name: 'IncomeStatment',
  props: ['data'],
  components: {
    List,
    Total,
    CashFlow
  },
  computed: {
    income() {
      const filteredIncome = this.data.map(entry => entry.income)
      // Each entry is an array of income(s)
      return [].concat.apply([], filteredIncome)
    },
    expenses() {
      const filteredExpenses = this.data.map(entry => entry.expenses)
      // Each entry is an array of expense(s)
      return [].concat.apply([], filteredExpenses)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

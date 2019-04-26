<template>
  <section>
    <h2>Income Statement</h2>
    <div class="flex">
      <income-list :income="income" class="flex-3 mr-1"/>
      <total-income :income="income" class="flex-1 ml-1" />
    </div>
    <div class="flex m-1">
      <expenses-list class="flex-1" />
      <total-expenses class="flex-1" />
    </div>
    <cash-flow />
  </section>
</template>

<script>
import IncomeList from './income/IncomeList'
import TotalIncome from './income/TotalIncome'
import ExpensesList from './expenses/ExpensesList'
import TotalExpenses from './expenses/TotalExpenses'
import CashFlow from './CashFlow'

export default {
  name: 'IncomeStatment',
  props: ['data'],
  components: {
    IncomeList,
    TotalIncome,
    ExpensesList,
    TotalExpenses,
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

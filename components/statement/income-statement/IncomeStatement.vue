<template>
  <section class="m-1">
    <h3>Income Statement Section</h3>
    <div class="flex m-1">
      <income-list class="flex-1 "/>
      <total-income class="flex-1" />
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
  components: {
    IncomeList,
    TotalIncome,
    ExpensesList,
    TotalExpenses,
    CashFlow
  }
}
</script>

<style lang="scss" scoped>

</style>

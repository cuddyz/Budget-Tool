<template>
  <article class="grid">
    <income-statment :data="statementData" />
    <balance-sheet :data="statementData" />
  </article>
</template>

<script>
import IncomeStatment from './income-statement/IncomeStatement'
import BalanceSheet from './balance-sheet/BalanceSheet'
import { data } from '~/localData.js'

export default {
  name: 'Statement',
  data() {
    return {
      statementData: data
    }
  },
  components: {
    IncomeStatment,
    BalanceSheet
  }
}
</script>

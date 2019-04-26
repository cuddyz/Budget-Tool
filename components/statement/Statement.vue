<template>
  <article>
    <user-info />
    <income-statment />
    <balance-sheet />
  </article>
</template>

<script>
import UserInfo from './UserInfo'
import IncomeStatment from './income-statement/IncomeStatement'
import BalanceSheet from './balance-sheet/BalanceSheet'

export default {
  name: 'Statement',
  components: {
    UserInfo,
    IncomeStatment,
    BalanceSheet
  }
}
</script>

<style lang="scss" scoped>

</style>

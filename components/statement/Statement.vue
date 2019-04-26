<template>
  <article class="grid">
    <user-info :user-info="userInfo" />
    <income-statment :data="statementData" />
    <balance-sheet :data="statementData" />
  </article>
</template>

<script>
import UserInfo from './UserInfo'
import IncomeStatment from './income-statement/IncomeStatement'
import BalanceSheet from './balance-sheet/BalanceSheet'
import { data } from '~/localData.js'

export default {
  name: 'Statement',
  data() {
    return {
      userInfo: {
        name: 'Zack Cuddy',
        userName: 'cuddyz',
        profession: 'Web Developer'
      },
      statementData: data
    }
  },
  components: {
    UserInfo,
    IncomeStatment,
    BalanceSheet
  }
}
</script>

<style lang="scss" scoped>
  article {
    grid-template-rows: 5rem 1fr 1fr;

    > * {
      margin: 1rem 5rem;
    }
  }
</style>

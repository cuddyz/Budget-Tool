<template>
  <article v-if="!isLoading" class="grid">
    <income-statment :data="statementData" />
    <balance-sheet :data="statementData" />
  </article>
</template>

<script>
import IncomeStatment from './income-statement/IncomeStatement'
import BalanceSheet from './balance-sheet/BalanceSheet'
import { entries as entryService } from '@/services/api'

export default {
  name: 'Statement',
  data() {
    return {
      statementData: [],
      isLoading: true
    }
  },
  components: {
    IncomeStatment,
    BalanceSheet
  },
  methods: {
    async getData() {
      this.statementData = (await entryService.list()).data
      this.isLoading = false
    }
  },
  created() {
    this.getData()
  }
}
</script>

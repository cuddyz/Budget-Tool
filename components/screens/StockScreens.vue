<template>
  <article v-if="!isLoading">
    <screen-dropform v-if="dropformScreen" :screen="dropformScreen" v-on:close="closeDropform" v-on:save="save" />
    <h2>Stock Screens</h2>
    <section class="mt-1">
      <stock-screen v-for="screen in stockScreens" :key="screen.id" :screen="screen" v-on:edit="initDropform" v-on:remove="remove" />
      <new-stock-screen v-on:create="create" />
    </section>
  </article>
</template>

<script>
import StockScreen from './StockScreen'
import NewStockScreen from './NewStockScreen'
import ScreenDropform from './ScreenDropform'
import { screens as screenService } from '@/services/api'

export default {
  name: 'Stock Screens',
  data() {
    return {
      stockScreens: [],
      dropformScreen: null,
      isLoading: true
    }
  },
  components: {
    NewStockScreen,
    ScreenDropform,
    StockScreen
  },
  methods: {
    initDropform(screen) {
      this.dropformScreen = screen
    },
    closeDropform() {
      this.dropformScreen = null
    },
    create() {
      const emptyScreen = {
        name: '',
        startDate: new Date(),
        investment: 0,
        stocks: []
      }

      this.initDropform(emptyScreen)
    },
    async save(screen) {
      const body = {
        ...screen,
        username: 'cuddyz'
      }

      if (screen.id) {
        await screenService.update(screen.id, body)
      } else {
        await screenService.create(body)
        this.stockScreens.push(body)
      }

      this.closeDropform()
    },
    async remove(screen) {
      await screenService.delete(screen.id)
      const index = this.stockScreens.findIndex(s => screen.id === s.id)
      this.stockScreens.splice(index, 1)
    },
    async getData() {
      this.stockScreens = (await screenService.list()).data
      this.isLoading = false
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
</style>

<template>
  <article>
    <screen-dropform v-if="dropformScreen" :screen="dropformScreen" v-on:close="closeDropform" v-on:save="save" />
    <h2>Stock Screens</h2>
    <section class="mt-1">
      <stock-screen v-for="screen in stockScreens" :key="screen.id" />
      <new-stock-screen v-on:create="create" />
    </section>
  </article>
</template>

<script>
import NewStockScreen from './NewStockScreen'
import ScreenDropform from './ScreenDropform'

export default {
  name: 'Stock Screens',
  data() {
    return {
      stockScreens: [],
      dropformScreen: null
    }
  },
  components: {
    NewStockScreen,
    ScreenDropform
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
    save(screen) {
      console.log(screen)
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>

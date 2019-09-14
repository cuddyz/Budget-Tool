<template>
  <div class="card flex column">
    <h3>{{ screen.name }}</h3>
    <div class="flex mt-1">
      <div class="flex-1 pr-50">
        <label>Investment</label>
        <p>${{ investment }}</p>
      </div>
      <div class="flex-1">
        <label>Start Date</label>
        <p>{{ startDate }}</p>
      </div>
    </div>
    <div class="mt-1 flex-1">
      <label>Stocks</label>
      <p v-for="stock in screen.stocks.slice(0,10)" :key="stock">{{ stock }}</p>
      <p v-if="screen.stocks.length > 10">...</p>
    </div>
    <div class="ml-a">
      <button class="view"><i class="far fa-eye" /></button>
      <button class="ml-50 edit" @click="$emit('edit', screen)"><i class="fas fa-pencil-alt" /></button>
      <button class="ml-50 delete" @click="$emit('remove', screen)"><i class="fas fa-trash-alt" /></button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'StockScreen',
  props: ['screen'],
  data() {
    return {
      showLess: true
    }
  },
  computed: {
    startDate() {
      return moment(this.screen.startDate).format('MM/DD/YYYY')
    },
    investment() {
      return Number(this.screen.investment).toLocaleString('en')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors.scss';

  button {
    &.delete {
      color: color(red);
    }

    &.edit {
      color: color(blue);
    }

    &.view {
      color: color(green);
    }

    &:hover {
      background-color: darken(color(white), 5%);

      &.delete {
        color: color(redDark);
      }

      &.edit {
        color: color(blueDark);
      }

      &.view {
        color: color(greenDark);
      }
    }
  }
</style>

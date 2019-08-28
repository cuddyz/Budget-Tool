<template>
  <section>
    <h3 class="mt-1">{{ name }}</h3>
    <div class="m-75">
      <header class="flex bold mb-1">
        <p class="flex-3">Description</p>
        <p class="flex-1">Amount ($)</p>
      </header>
      <div class="flex mt-50 mb-1" v-for="(item, index) in data" :key="index">
        <input class="flex-3 mr-2" v-model="item.name" />
        <span class="flex flex-1 align-center">$<input type="number" class="ml-50" v-model="item.amount" /></span>
        <button class="ml-1 delete" @click="removeLine(index)"><i class="fas fa-trash-alt" /></button>
      </div>
      <div>
        <button @click="addLine"><i class="fas fa-plus" /> Add Line</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListEdit',
  props: ['data', 'name'],
  methods: {
    addLine() {
      const line = {
        name: '',
        amount: 0
      }
      this.data.push(line)
    },
    removeLine(index) {
      this.data.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  header {
    border-bottom: 2px solid color(black);
  }

  button {
    &:hover {
      background-color: darken(color(white), 5%);
    }

     &.delete {
      color: color(red);

      &:hover {
        color: color(redDark);
      }
    }
  }
</style>

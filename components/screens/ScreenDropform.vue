<template>
  <section class="dropform-container">
    <div class="backshade" @click="$emit('clickout')"/>
    <article class="dropform scroll">
      <section class="mx-5">
        <header class="my-2">
          <label>Name</label>
          <input v-model="screen.name" />
        </header>
        <section class="flex mb-2">
          <div class="flex-1 pr-1">
            <label>Investment</label>
            <input type="number" v-model="screen.investment" />
          </div>
          <div class="flex-1">
            <label>Start Date</label>
            <datepicker placeholder="Select Date" v-model="screen.startDate" format="MM/dd/yyyy" />
          </div>
        </section>
        <section class="mb-2">
          <div class="flex">
            <input v-model="newStock" placeholder="Enter stock symbol" v-on:keyup.enter="add" />
            <button @click="add"><i class="fas fa-plus p-25" /></button>
          </div>
          <div class="flex-flow mt-1">
            <div v-for="(stock, index) in screen.stocks" :key="stock" class="flex pill">
              <p>{{ stock }}</p>
              <i class="fas fa-times icon-fix pl-50" @click="remove(index)" />
            </div>
          </div>
        </section>
      </section>
      <footer class="actions px-2 py-1">
        <button class="ml-a" @click="$emit('close')"><i class="mr-25 fas fa-times" />Close</button>
        <button class="ml-50" @click="$emit('save', screen)"><i class="mr-25 fas fa-save" />Save</button>
      </footer>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ScreenDropform',
  props: ['screen'],
  data() {
    return {
      newStock: ''
    }
  },
  methods: {
    add() {
      this.screen.stocks.push(this.newStock)
      this.newStock = ''
    },
    remove(index) {
      this.screen.stocks.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors.scss';

  .pill {
    background-color: color(greyVLight);
    border-radius: 10px;
    border: 1px solid color(greyLight);
    padding: 0.5rem;
    margin: 0.25rem;
    width: max-content;

    i {
      &:hover {
        cursor: pointer;
        color: color(red);
      }
    }
  }

  .flex-flow {
    display: flex;
    flex-flow: row wrap;
  }
</style>

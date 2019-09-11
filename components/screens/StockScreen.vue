<template>
  <div class="card" @click="$emit('create')">
    <h3>{{ screen.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'StockScreen',
  props: ['screen']
}
</script>

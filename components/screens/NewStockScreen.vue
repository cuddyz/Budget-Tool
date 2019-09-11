<template>
  <div class="card flex column flex-center" @click="$emit('create')">
    <i class="fas fa-plus" />
  </div>
</template>

<script>
export default {
  name: 'NewStockScreen'
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors.scss';

  .card {
    min-height: 50vh;
    transition: all 150ms;

    i {
      font-size: 3em;
      color: color(blueDark);
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 150ms;

      i {
        color: color(blue);
      }
    }
  }
</style>

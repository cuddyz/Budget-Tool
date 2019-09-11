<template>
  <section class="dropform-container">
    <div class="backshade" @click="$emit('clickout')"/>
    <article class="dropform scroll">
      <header class="px-3 pt-2">
        <label>Name</label>
        <input v-model="screen.name" />
      </header>
      <section class="px-3">
        <h4>Todo, add stocks and fields</h4>
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
  props: ['screen']
}
</script>

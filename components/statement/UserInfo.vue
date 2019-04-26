<template>
  <section class="m-1 flex">
    <div class="flex-3">
      <label>Name</label>
      <h3>{{ userInfo.name }} ({{ userInfo.userName }})</h3>
    </div>
    <div class="flex-1">
      <label>Profession</label>
      <h3>{{ userInfo.profession }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['userInfo']
}
</script>

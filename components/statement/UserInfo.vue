<template>
  <section class="flex m-1">
    <div class="flex-3 mr-1">
      <label>Name</label>
      <h3>{{ userInfo.name }} ({{ userInfo.userName }})</h3>
    </div>
    <div class="flex-1 ml-1">
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

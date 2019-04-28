<template>
  <main>
    <sidebar />
    <section>
      <user-info class="user-info" :user-info="userInfo" />
      <nuxt />
    </section>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import UserInfo from '@/components/UserInfo'

export default {
  name: 'Default',
  data() {
    return {
      userInfo: {
        name: 'Zack Cuddy',
        userName: 'cuddyz',
        profession: 'Web Developer'
      }
    }
  },
  components: {
    Sidebar,
    UserInfo
  }
}
</script>

<style lang="scss" scoped>
  section {
    > * {
      margin: 1rem 5rem;

      &.user-info {
        margin: 1rem 5rem 3rem 5rem;
      }
    }
  }
</style>

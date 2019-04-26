<template>
  <main>
    <sidebar />
    <nuxt />
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Default',
  components: {
    Sidebar
  }
}
</script>

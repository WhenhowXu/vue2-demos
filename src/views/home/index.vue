<template>
  <section class="home-container">
    <ul>
      <li v-for="d in demos" :key="d.path">
        <router-link :to="d.path">{{ d.meta.title }}</router-link>
      </li>
    </ul>
  </section>

</template>
<script>
import { demos } from '@/router'
export default {
  name: 'HomePage',
  data() {
    return {
      demos
    }
  }
}
</script>

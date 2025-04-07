<template>
  <div>
    <div ref="ref1">我是一个div,BBB</div>
    <ChildDemo ref="ref2" />
  </div>
</template>
<script>
import ChildDemo from './ChildDemo.vue'
export default {
  name: 'RefDemo2',
  components: {
    ChildDemo
  },
  mounted() {
  }
}
</script>

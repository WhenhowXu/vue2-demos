<template>
  <div>
    <div ref="ref1">我是一个div,AAA</div>
    <ChildDemo ref="ref2" />
  </div>
</template>
<script>
import ChildDemo from './ChildDemo.vue'
export default {
  name: 'RefDemo1',
  components: {
    ChildDemo
  },
  mounted() {
    console.log(this.$refs.ref1)
    console.log(this.$refs.ref2)
  }
}
</script>

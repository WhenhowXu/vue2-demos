<template>
  <div>我是个子组件{{ index }}</div>
</template>
<script>
export default {
  name: 'ChildDemo',
  props: {
    index: { type: [Number, String], default: 1 }
  }
}
</script>

<template>
  <div>
    <span class="text">
      {{ text }}
    </span>
    <span class="remove" @click="$emit('removeItem', text)">x</span>
  </div>
</template>

<script>
export default {
  name: 'WidgetContainer',
  props: {
    text: {
      type: String,
      default: 'x'
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log('### ' + this.text + ' ready!')
  }
}
</script>

<style lang="less" scoped>
.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
}
</style>

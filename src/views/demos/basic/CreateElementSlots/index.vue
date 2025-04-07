<template>
  <div>
    <h3>1、createElement二次封装传递插槽</h3>
    <SlotDemo>
      <template #suffix>1233</template>
      <div>我是默认插槽</div>
    </SlotDemo>
    <h3>2、原组件</h3>
    <BaseParent>
      <template #suffix>1233</template>
      <div>我是默认插槽</div>
    </BaseParent>
  </div>
</template>
<script>
import SlotDemo from './SlotDemo'
import BaseParent from './BaseParent.vue'

export default {
  name: 'CreateElementSlots',
  components: {
    SlotDemo,
    BaseParent
  }
}
</script>

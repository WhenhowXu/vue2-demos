
import BaseParent from './BaseParent.vue'
function renderSuffix(h, _vm) {
  return h('span', {}, 'KK')
}
export default {
  name: 'SlotDemo',
  render(h) {
    const childs = []
    const { $slots } = this
    console.log(this, 'SlotDemo')
    const suffix = renderSuffix(h, this)
    if (suffix) {
      childs.push(suffix)
    }
    console.log(childs, $slots, '----')
    return h(BaseParent, { }, childs)
  }
}

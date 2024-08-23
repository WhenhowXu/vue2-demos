import { Pulldown, Input } from 'vxe-table'
import BaseTree from '../base-tree'

export default {
  name: 'BaseTreeSelect',
  render(h) {
    return h(Pulldown, {
      scopedSlots: {
        dropdown: () => h(BaseTree, {},),
        default: () => h(Input, {props: { placeholder: '请选择'}},)
      }
    })
  }
}
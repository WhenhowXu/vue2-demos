import BaseTree from './base-tree'
import BaseTreeSelect from './base-tree-select'
import BaseAntForm from './base-ant-form'

const components = [BaseTree, BaseTreeSelect, BaseAntForm]
const BaseComponents = {
  BaseTree,
  BaseTreeSelect,
  BaseAntForm,
  install(App) {
    components.forEach(c => {
      App.component(c.name, c)
    })
    return App
  }
}
export default BaseComponents

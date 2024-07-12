import BaseTree from './base-tree';

const components = [BaseTree];
const BaseComponents = {
  BaseTree,
  install(App) {
    components.forEach(c => {
      App.component(c.name, c)
    })
    return App
  }
}
export default BaseComponents
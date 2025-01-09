
import BaseChart from './BaseChart'
const components = [BaseChart]
const BaseComponents = {
  install(App) {
    components.forEach(c => {
      App.component(c.name, c)
    })
    return App
  }
}
export {
  BaseChart
}
export default BaseComponents

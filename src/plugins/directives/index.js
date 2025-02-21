import resize from './resize'
import highlight from './highlight'

export default Vue => {
  Vue.directive('resize', resize)
  Vue.directive('highlight', highlight)
}
